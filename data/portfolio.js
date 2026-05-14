const PORTFOLIO = {
  name: "Ha Lim Chung",
  preferredName: "Jack",
  role: "Business Analytics Graduate Student",
  tags: ["Data Analytics", "Machine Learning", "Business Technology"],
  summary: "Business Analytics graduate student focused on data analytics, machine learning, optimization, and business technology. Seeking Summer 2026 internships and full-time opportunities after Summer 2027.",
  location: "Fairfax, Virginia",
  email: "jack.chung@gwu.edu",
  github: "https://github.com/wjdgkfla",
  linkedin: "https://www.linkedin.com/in/ha-lim-chung/",
  resume: "/uploads/Ha_Lim_Chung_Resume_Mar4_2026.pdf",

  about: [
    "I am pursuing a Master of Science in Business Analytics at The George Washington University, building on a B.S. in Management Information Systems from George Mason University's School of Business.",
    "My focus is on turning data into actionable business intelligence — building ETL pipelines, forecasting models, and dashboards that help organizations make faster, more confident decisions. I am most interested in roles at the intersection of data analytics, operations, and business technology.",
  ],

  stats: [
    { k: "15%", v: "Forecast accuracy improvement" },
    { k: "50%", v: "Manual workload reduction" },
    { k: "~6.5M", v: "Customer records maintained" },
    { k: "30%", v: "Review process time reduction" },
  ],

  projects: [
    {
      id: "enrollment",
      name: "Enrollment Projection Tool",
      year: "2023–24",
      kind: "Internship Project · INTO Mason",
      blurb: "Built an end-to-end ETL and forecasting pipeline that improved enrollment projection accuracy by 15% and cut manual reporting workload by 50%, delivering weekly business intelligence dashboards to planning and marketing teams.",
      details: "Designed the full data pipeline: extracted enrollment data from Snowflake, cleaned and normalized student cohorts, ran forecasting models, and automated recurring KPI reports and trend dashboards using pandas and Matplotlib. Presented weekly data visualizations to cross-functional stakeholders to support enrollment planning decisions.",
      stack: ["Python", "Snowflake", "pandas", "Matplotlib"],
      role: "Intern — solo build",
      status: "Shipped",
    },
    {
      id: "rml",
      name: "Responsible Machine Learning",
      year: "2026",
      kind: "Graduate Capstone · DNSC 6330",
      blurb: "Graduate-level capstone examining model fairness, subgroup error measurement, and deployment defensibility for machine learning systems making consequential business decisions.",
      details: "Applied fairness auditing and model evaluation techniques including subgroup error analysis, calibration assessment, and residual risk evaluation. Developed a structured business intelligence framework for how models should be documented, tested, and reviewed before production deployment — with an emphasis on explainability and responsible AI governance.",
      stack: ["Python", "scikit-learn", "Fairlearn", "pandas"],
      role: "Graduate capstone",
      status: "In progress",
    },
    {
      id: "mason-market",
      name: "Mason Market",
      year: "2025",
      kind: "Mobile App · Side Project",
      blurb: "A GMU-focused campus marketplace designed to help students buy, sell, and trade items within a trusted university community.",
      details: "Cross-platform mobile app featuring Firebase authentication, real-time listings via Firestore, in-app messaging, and verified Mason email sign-up. Designed around student-centered product logic and campus pickup workflows.",
      stack: ["Flutter", "Firebase", "Firestore", "Dart"],
      role: "Solo build — design and development",
      status: "In development",
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
        "Reduced content review cycle time by 30% as measured by processing speed improvements by collaborating with analysts, QA, and operations teams to redesign the content tagging workflow and data pipeline.",
        "Maintained data integrity across 5,000+ ad records per batch as measured by zero compliance flags by overseeing structured data imports and exports aligned with client policies and regulatory requirements.",
        "Achieved 90%+ content accuracy as measured by client quality ratings by reviewing and refining 120+ queries and keywords daily against industry standards and best practices.",
        "Supported ad network efficiency and KPI targets by curating and rating bilingual Korean–English digital content with 90%+ accuracy across high-volume review cycles.",
      ],
    },
    {
      company: "INTO Mason",
      role: "Enrollment Projection Tool Intern",
      where: "Fairfax, VA",
      when: "Aug 2023 — Aug 2024",
      bullets: [
        "Improved enrollment forecast accuracy by 15% as measured by reduction in projection error by building Python-based ETL workflows that extracted, cleaned, and normalized student enrollment data from Snowflake.",
        "Reduced manual reporting workload by 50% as measured by weekly time savings by automating recurring data preparation and generating business intelligence dashboards using pandas and Matplotlib.",
        "Delivered actionable KPI reports and trend dashboards to marketing and cross-functional teams by building data visualizations that surfaced enrollment patterns and supported targeted outreach planning.",
        "Enabled data-driven enrollment strategy for Korean student recruitment by presenting weekly business intelligence insights to planning and marketing stakeholders.",
      ],
    },
    {
      company: "Sallie Mae",
      role: "Credit Bureau Reporting Intern",
      where: "Newcastle, DE · Remote",
      when: "Jun 2023 — Aug 2023",
      bullets: [
        "Maintained 90%+ data accuracy across approximately 6.5 million customer records as measured by industry-leading low reject and dispute rates by monitoring reporting controls and flagging faulty data trends.",
        "Reduced reporting exceptions as measured by exception database growth rate by using SQL to identify and document illogical FCRA reporting scenarios across four national credit bureaus.",
        "Ensured daily data accuracy and KPI compliance by reconciling account-level information reported to Equifax, TransUnion, Experian, and Innovis.",
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
        "Led 50+ members as President and Advisor of KISA at George Mason University.",
        "Organized events and job fair programs in collaboration with the Embassy and Consulate of Korea.",
      ],
    },
  ],

  skills: [
    {
      group: "Programming & Analytics",
      items: ["Python", "SQL", "R", "pandas", "Matplotlib", "scikit-learn", "Snowflake"],
    },
    {
      group: "Machine Learning & Data Analysis",
      items: ["Forecasting", "Classification", "Regression", "Clustering", "Model evaluation", "Fairness metrics", "Exploratory data analysis", "Data cleaning"],
    },
    {
      group: "Statistics & Optimization",
      items: ["Statistical inference", "Hypothesis testing", "Probability models", "Stochastic modeling", "Linear programming", "Mathematical optimization"],
    },
    {
      group: "Tools & Platforms",
      items: ["Excel", "PowerPoint", "GitHub", "Jupyter Notebook", "Firebase", "Flutter"],
    },
    {
      group: "Business & Operations",
      items: ["Business intelligence", "ETL pipelines", "KPI reporting", "Dashboard development", "Data visualization", "Process improvement", "Stakeholder communication", "Digital marketing analytics"],
    },
  ],
};

export default PORTFOLIO;
