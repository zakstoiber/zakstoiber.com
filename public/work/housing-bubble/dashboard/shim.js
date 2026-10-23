/* Why the housing market isn't a bubble, standalone. A small stand-in for the dashboard runtime the
   page was written for: it loads the CSVs, runs the page's calculations on demand, and redraws on resize. */
(() => {
  const SOURCES = ["quarterly", "credit", "mortgages", "originations", "permits", "then_now", "longrun", "downpay", "downpay_years", "stocks", "bnpl"];
  const store = {};
  const calcs = {};
  const listeners = [];
  let pending = 0;

  const notify = () => {
    if (pending) return;
    pending = requestAnimationFrame(() => {
      pending = 0;
      for (const fn of listeners) {
        try { fn(); } catch (e) { console.error(e); }
      }
    });
  };

  for (const id of SOURCES) {
    store[id] = { status: 'loading', data: [], columns: [], message: '' };
    const s = document.createElement('script');
    s.src = `data/${id}.js`;
    s.async = true;
    s.onload = () => {
      const text = window.N8_CSV && window.N8_CSV[id];
      if (typeof text !== 'string') {
        store[id] = { status: 'error', data: [], columns: [], message: `data/${id}.js did not define its rows` };
      } else {
        const rows = d3.csvParse(text);
        store[id] = { status: 'ok', data: rows, columns: rows.columns, message: '' };
        delete window.N8_CSV[id];
      }
      notify();
    };
    s.onerror = () => {
      store[id] = { status: 'error', data: [], columns: [], message: `Couldn't load data/${id}.js` };
      notify();
    };
    document.head.appendChild(s);
  }

  const dash = {
    calc(id, def) { calcs[id] = { def, cache: null }; },
    loader() {},
    data(id) {
      if (store[id]) return store[id];
      const c = calcs[id];
      if (!c) return { status: 'missing', data: [], columns: [] };
      const ins = c.def.inputs.map((i) => dash.data(i));
      if (ins.some((d) => d.status === 'error' || d.status === 'missing')) return { status: 'error', data: [], columns: [] };
      if (ins.some((d) => d.status !== 'ok')) return { status: 'loading', data: [], columns: [] };
      const inputs = ins.map((d) => d.data);
      if (!c.cache || c.cache.inputs.some((x, i) => x !== inputs[i])) {
        let result;
        try {
          const data = c.def.fn(...inputs);
          result = { status: 'ok', data, columns: Array.isArray(data) && data.length ? Object.keys(data[0]) : [] };
        } catch (e) {
          console.error(`Calculation ${id} failed`, e);
          result = { status: 'error', data: [], columns: [], message: String(e) };
        }
        c.cache = { inputs, result };
      }
      return c.cache.result;
    },
    onData(fn) {
      listeners.push(fn);
      try { fn(); } catch (e) { console.error(e); }
    },
    params() { return {}; },
    setParams() { notify(); },
    resetParams() { notify(); },
    setLink(name) {
      try { history.replaceState(null, '', '#' + encodeURIComponent(name)); } catch (e) { /* file:// pages */ }
    },
    refresh() {},
    colors: [1, 2, 3, 4, 5, 6, 7, 8].map((i) => `var(--cds-chart-categorical-${i})`),
  };
  window.dash = dash;

  // redraw when the page's width changes, as the dashboard runtime does
  let lastWidth = 0;
  const watch = () => {
    const root = document.getElementById('dash-root');
    if (!root || typeof ResizeObserver !== 'function') return;
    new ResizeObserver((entries) => {
      const w = Math.round(entries[0].contentRect.width);
      if (w !== lastWidth) { lastWidth = w; notify(); }
    }).observe(root);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watch);
  else watch();
})();
