const PORTFOLIO = {
  name: "Ha Lim Chung",
  preferredName: "Jack",
  role: "Business Analytics Graduate Student",
  tags: ["Data Analytics", "Machine Learning", "Business Technology"],
  summary: "Business Analytics graduate student focused on data analytics, machine learning, optimization, and business technology. Seeking internships and full-time opportunities — graduating June 2027.",
  location: "Fairfax, Virginia",
  email: "jack.chung@gwu.edu",
  github: "https://github.com/wjdgkfla",
  linkedin: "https://www.linkedin.com/in/ha-lim-chung/",
  resume: "/uploads/Ha_Lim_Chung_Resume_July_2026.pdf",

  about: [
    "I am pursuing a Master of Science in Business Analytics at The George Washington University, building on a B.S. in Management Information Systems from George Mason University's School of Business.",
    "My focus is on turning data into actionable business intelligence — building ETL pipelines, forecasting models, and dashboards that help organizations make faster, more confident decisions. I am most interested in roles at the intersection of data analytics, operations, and business technology.",
  ],

  stats: [
    { k: "15%", v: "Forecast accuracy improvement" },
    { k: "50%", v: "Manual workload reduction" },
    { k: "~6.5M", v: "Customer records at 99%+ accuracy" },
    { k: "2.4M", v: "Loan records audited for ML fairness" },
  ],

  projects: [
    {
      id: "enrollment",
      name: "Enrollment Projection Tool",
      year: "2023–24",
      kind: "Internship Project · INTO Mason",
      blurb: "Built an end-to-end ETL and forecasting pipeline validated against 10 years of historical enrollment data — improved projection accuracy by 15% and cut manual reporting workload by 50% (~5 hours saved weekly).",
      details: "Designed the full data pipeline: extracted enrollment data from Snowflake, cleaned and normalized student cohorts, ran time-series forecasting models, and automated recurring KPI reports and trend dashboards using pandas and Matplotlib. Delivered recurring trend reports and visualizations to 5 cross-functional teams to support enrollment planning decisions.",
      stack: ["Python", "Snowflake", "pandas", "Matplotlib"],
      role: "Intern — solo build",
      github: "https://github.com/wjdgkfla/INTO-Mason-Report",
      status: "Shipped",
    },
    {
      id: "rml",
      name: "Responsible Machine Learning",
      year: "2026",
      kind: "Graduate Capstone · DNSC 6330",
      blurb: "Fairness audit of a mortgage approval classifier trained on 2.4 million HMDA loan records — identified three adverse impact ratio violations and remediated all of them through decision-threshold adjustment.",
      details: "Trained an XGBoost classifier (AUC 0.8127) on 2024 HMDA data and applied a three-pillar responsible ML audit framework: subgroup performance analysis, adverse impact ratio testing, and false positive/negative rate comparison across demographic groups. Remediated all three baseline AIR violations by adjusting the decision threshold, and produced a model card, system card, and monitoring plan supporting a defensible deployment recommendation.",
      stack: ["Python", "XGBoost", "scikit-learn", "pandas"],
      role: "Graduate capstone",
      github: "https://github.com/wjdgkfla/DNSC-6330-Capstone",
      status: "Completed",
    },
    {
      id: "mason-market",
      name: "Mason Market",
      year: "2025",
      kind: "Full-Stack Web App · Side Project",
      blurb: "A live GMU-focused campus marketplace that helps students buy, sell, and trade items within a trusted university community — built end-to-end with AI-assisted development.",
      details: "Full-stack web application featuring Supabase authentication and real-time listings, verified Mason email sign-up, and student-centered campus pickup workflows. Built from zero to production using Next.js, Supabase, and Tailwind CSS, leveraging Claude AI and Cursor throughout design and development.",
      stack: ["Next.js", "Supabase", "Tailwind CSS", "Claude AI", "Cursor"],
      role: "Solo build — design and development",
      link: "https://masonmarket-seven.vercel.app/",
      status: "Live",
    },
    {
      id: "coursework",
      name: "Graduate Analytics Coursework",
      year: "2025–26",
      kind: "Graduate Program · GWU MSBA",
      blurb: "Applied coursework in machine learning, optimization, statistics, risk analytics, and marketing analytics — with a focus on building business intelligence skills and data-driven decision-making.",
      details: "Projects covering supervised and unsupervised learning, mathematical optimization, statistical inference, stochastic modeling, decision and risk analysis, and AI applications in marketing. Selected work and dashboards available on GitHub.",
      stack: ["Python", "R", "SQL", "Jupyter", "scikit-learn"],
      role: "Graduate coursework",
      github: "https://github.com/wjdgkfla",
      status: "Ongoing",
    },
  ],

  experience: [
    {
      company: "Vaco",
      role: "Content Analyst",
      where: "Fairfax, VA · Remote",
      when: "Nov 2024 — Aug 2025",
      bullets: [
        "Reduced content review time by 30% by redesigning the content tagging workflow in collaboration with analysts, QA, and operations teams.",
        "Maintained zero compliance violations across 5,000+ digital ads per batch by managing data imports/exports, validating records, and applying regulatory requirements.",
        "Processed 120+ queries and keywords daily while sustaining 90%+ content accuracy, applying client guidelines, industry standards, and structured quality-control processes.",
        "Supported ad network efficiency and KPI targets by curating and rating bilingual Korean–English digital content across high-volume review cycles.",
      ],
    },
    {
      company: "INTO Mason",
      role: "Enrollment Projection Tool Intern",
      where: "Fairfax, VA",
      when: "Aug 2023 — Aug 2024",
      bullets: [
        "Improved enrollment projection accuracy by 15% by building a Python forecasting workflow that collected, cleaned, and validated 10 years of historical student enrollment data.",
        "Cut recurring reporting workload by 50% (~5 hours saved weekly) by automating manual data preparation pipelines with Python and pandas.",
        "Delivered recurring trend reports and Matplotlib visualizations to 5 cross-functional teams, including marketing and enrollment, informing data-driven recruitment and enrollment planning decisions.",
        "Enabled data-driven enrollment strategy for Korean student recruitment by presenting weekly business intelligence insights to planning and marketing stakeholders.",
      ],
    },
    {
      company: "Sallie Mae",
      role: "Credit Bureau Reporting Intern",
      where: "Newcastle, DE · Remote",
      when: "Jun 2023 — Aug 2023",
      bullets: [
        "Maintained 99%+ data accuracy across approximately 6.5 million customer records, evidenced by industry-leading low reject and dispute rates, by monitoring reporting controls and flagging faulty data trends.",
        "Identified and documented 100+ reporting exceptions weekly using SQL, flagging illogical FCRA scenarios and updating exception-tracking databases across four national credit bureaus.",
        "Reconciled 20+ account-level records daily against data reported to Equifax, TransUnion, Experian, and Innovis, ensuring daily reporting accuracy and KPI compliance.",
        "Supported credit reporting integrity and regulatory compliance by collecting and analyzing all customer data submitted to credit bureaus on a daily basis.",
      ],
    },
    {
      company: "George Mason IT Support",
      role: "Student Support Specialist",
      where: "Fairfax, VA",
      when: "Jan 2022 — Aug 2023",
      bullets: [
        "Exceeded the 95% customer satisfaction KPI as measured by interaction ratings by resolving 20+ student and faculty support requests per shift via phone, live chat, and walk-in.",
        "Maintained a 90%+ first-contact resolution rate as measured by ticket closure data by creating and resolving 40+ support tickets per shift through Team Dynamics.",
      ],
    },
  ],

  leadership: [
    {
      org: "Korean International Student Association (KISA)",
      role: "President / Advisor",
      where: "George Mason University · Fairfax, VA",
      when: "Aug 2021 — Aug 2023",
      bullets: [
        "Grew membership from 12 to 75+ students as President, leading event logistics, member communication, and outreach across a two-year tenure.",
        "Organized 2+ cultural, networking, and career events per semester with 30+ attendees each, in collaboration with the Embassy and Consulate of Korea.",
        "Coordinated event logistics, member communication, and student outreach to support participation and strengthen the KISA community.",
        "Advised student leaders on event preparation and communication to support organizational continuity after serving as President.",
      ],
    },
  ],

  volunteer: [
    {
      org: "Messiah Presbyterian Church",
      role: "Korean School Teacher",
      where: "Fairfax, VA",
      blurb: "Teach Korean language classes at the church's Korean school, supporting language and cultural education for the local community.",
    },
  ],

  skills: [
    {
      group: "Programming & Analytics",
      items: ["Python", "SQL", "R", "pandas", "Matplotlib", "scikit-learn", "Snowflake"],
    },
    {
      group: "Machine Learning & Data Analysis",
      items: ["Forecasting", "Classification", "Regression", "Clustering", "XGBoost", "SHAP", "LIME", "Model evaluation", "Fairness metrics", "Exploratory data analysis", "Data cleaning"],
    },
    {
      group: "Statistics & Optimization",
      items: ["Statistical inference", "Hypothesis testing", "Probability models", "Stochastic modeling", "Linear programming", "Mathematical optimization"],
    },
    {
      group: "Tools & Platforms",
      items: ["Excel", "PowerPoint", "GitHub", "Jupyter Notebook", "Supabase", "Next.js", "Tailwind CSS"],
    },
    {
      group: "AI Tools",
      items: ["Claude AI", "ChatGPT", "Cursor", "AI-assisted development"],
    },
    {
      group: "Business & Operations",
      items: ["Business intelligence", "ETL pipelines", "KPI reporting", "Dashboard development", "Data visualization", "Process improvement", "Stakeholder communication", "Digital marketing analytics"],
    },
  ],
};

export default PORTFOLIO;
