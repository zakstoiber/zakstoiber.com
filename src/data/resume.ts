// From "Zak Stoiber - Resume - General (Sep 2026) v14". Public version: no phone number, and internal MGIC
// figures rounded. Only $3.4B is public, so keep any other MGIC figure rounded here.
export const resume = {
  headline: 'Marketing Analytics Leader',
  focus: ['Measurement Strategy', 'Customer Insight', 'Revenue Attribution', 'SEO', 'BI'],
  summary:
    "Marketing analytics leader with 12 years in marketing at MGIC (2014 to 2026), nine of them in measurement and analytics. Started in content and communications, which is why the measurement I build gets used: questions agreed with leadership first, then metrics and dashboards, presented monthly to the whole marketing team and up to the company president. Now publishing independent analytics projects (R, DuckDB/SQL, Tableau, AI-assisted).",
  achievements: [
    ['Built the marketing analytics function from zero, alone.', "As the only marketing analytics person on a 30+ person product and marketing team, defined the strategy, metrics framework, and governance, and drove adoption until the metrics were cited in meetings I wasn't in."],
    ['Tied marketing to revenue for the first time.', "The first attribution analysis at MGIC showed that nearly a quarter of Q1 2026 new business volume ($3.4B) came from marketing-engaged contacts, who grew about 7% faster YoY, an estimated $200M+ in incremental volume. Now a standing quarterly executive review."],
    ['Set the standard for honest campaign reporting.', 'Replaced one-off recaps with a monthly review benchmarked against comparable campaigns and prior years, under-benchmark results included, setting expectations before launch.'],
    ['Six years of SEO ownership at #1.', 'Owned SEO for six years and held the #1 organic-traffic position and highest SEMrush Authority Score among competitors throughout.'],
  ],
  employer: { name: 'MGIC', place: 'Milwaukee, WI', dates: '2014–2026', note: 'four promotions' },
  roles: [
    {
      title: 'Senior Marketing Analyst',
      dates: 'Apr 2023 – May 2026',
      points: [
        ['Analytics strategy and alignment.', 'Facilitated business-question discovery with the VP of Product and Marketing and five marketing managers; mapped every major KPI to one of six marketing strategies so the team could track each strategy through the year; catalogued 50+ metrics with source, cadence, owner, and limitations; and delivered the Analytics Input Framework for leadership sign-off.'],
        ['Revenue attribution.', "Designed and led MGIC's first marketing-to-revenue analysis: set it at the contact level so marketing could act on the results, directed an analyst's revenue data pull, then analyzed the output and presented the findings to executives. Engaged contacts accounted for nearly a quarter of Q1 2026 new business volume ($3.4B) and grew about 7% faster YoY, an estimated $200M+ incremental."],
        ['Single source of truth and dashboards.', 'Built the consolidated reporting model (GA4, Marketo, and Salesforce extracts) and self-service dashboards in Salesforce and Data Studio with the stakeholders who used them.'],
        ['Customer segmentation.', 'Segmented by type, institution, and role: engaged contacts accounted for about half of community-bank and credit-union new business volume, about double the company-wide share.'],
        ['Value-add impact.', "Built the multi-year case that grew the free Self-Employed Borrower Worksheet into a cashflow-worksheet program (50K+ users, 200K+ downloads a year), then answered leadership's doubt that use moved business: its users carried a roughly 10% YoY growth gap, about 3x email clicks, and drove as much new business volume as the far larger email-click group."],
        ['Predictive modeling.', "Scoped and directed MGIC's data science team on customer-level predictive models projecting percentage growth by customer, and presented results to senior leadership including the president."],
        ['Cross-functional analytics partner.', "Served as marketing's main liaison to the data science, business-development analytics, and customer experience teams and analytics partner beyond marketing: helped tag the underwriting team's internal site, and turned menu, bounce, CTA, and top-page data into UX recommendations that informed several major site redesigns, each re-tagged and tested before launch."],
        ['Competitive intelligence.', 'Authored the annual competitive review for the VP; findings led to two new training formats, including the bite-sized "Magic Minutes" series.'],
        ['SEO and paid media.', 'Owned SEO strategy and reporting (SEMrush, Google Search Console), holding the #1 organic-traffic position and highest SEMrush Authority Score among competitors. Built a monthly paid-media dashboard checking platform-reported metrics against verifiable ones and advised the media buyer, which led to dropping an IP-targeting partner and reallocating publication spend. I made the case to cut it (~$100K a year) after its pilot.'],
        ['Campaign performance.', 'Ran monthly campaign performance reviews across email, paid ads, and web pages, benchmarked against comparable campaigns and prior years (under-benchmark results included) and broken down to A/B results, individual email CTA clicks, and ad creative and banner size. The reviews shaped campaign strategy and drove segmentation and funnel work; re-send tests roughly doubled opens.'],
      ],
    },
    {
      title: 'Marketing Program Specialist II',
      dates: 'Mar 2022 – Apr 2023',
      points: [
        ['GA4 migration.', 'Independently led the Universal Analytics to GA4 migration across 4 sites (including the consumer-facing Readynest homebuyer site, 300+ pages, 1M+ annual visits), finishing before the shutdown: rebuilt and tested the tracking before launch, preserved historical data, and set up automated insights, anomaly detection, and alerts.'],
        ['Data governance.', 'Implemented UTM frameworks and custom JavaScript tags in Google Tag Manager tracking every major click down to sub-menu navigation, with custom parameters that showed downloads by program. Built 10+ dashboards, including a page for each major campaign and program showing visits, form fills, downloads, and video plays.'],
      ],
    },
    {
      title: 'Marketing Program Specialist',
      dates: 'May 2020 – Mar 2022',
      points: [['Measurement foundation.', 'Moved marketing beyond out-of-the-box Universal Analytics: tagged all company websites and set GTM standards.']],
    },
    {
      title: 'Marketing Specialist IV',
      dates: 'May 2017 – May 2020',
      points: [
        ['National training.', 'Traveled the country teaching loan officers to generate business through social media, from one-on-ones to 300-person banking and sales conferences and a ~500-attendee webinar.'],
        ['Social and SEO strategy.', 'Owned social media strategy across all channels and social and SEO performance reporting, using Sprout Social and SEMrush to spot trends and insights.'],
      ],
    },
    {
      title: 'Marketing Specialist II',
      dates: 'Feb 2014 – May 2017',
      points: [['Content and email.', 'Managing editor of the monthly internal newsletter; wrote content, emails, and collateral.']],
    },
  ],
  skills: [
    ['Analytics & measurement', 'Revenue attribution, KPI frameworks and measurement taxonomy, customer segmentation, campaign and paid-channel analysis, funnel analysis from campaign engagement through closed business, A/B testing, regression analysis, SEO strategy and reporting, competitive intelligence, metric socialization'],
    ['Data & BI tools', 'Tableau, Tableau Cloud, Power BI, Data Studio (formerly Looker Studio); Google Analytics 4 (admin), Google Tag Manager (admin, custom JavaScript tags), Salesforce and Marketo data extraction, advanced Excel (with Copilot), PowerPoint; SQL and DuckDB/DBeaver (certificate and independent projects); R/RStudio'],
    ['AI-assisted analysis', 'SQL and R drafted and Tableau/Power BI debugged with AI, all checked against source data.'],
  ],
  education: [
    'Google Data Analytics Professional Certificate (SQL, Tableau, R), 2026',
    'B.A., Speech Communication & Rhetoric, University of Wisconsin–Madison, 2012',
  ],
};
