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
    "My focus is on turning data into practical, usable solutions — forecasting models, automated reporting pipelines, and machine learning systems that support real business decisions. I am most interested in roles at the intersection of analytics, operations, and business technology.",
  ],

  stats: [
    { k: "15%", v: "Forecast accuracy improvement" },
    { k: "50%", v: "Manual workload reduction" },
    { k: "~6.5M", v: "Customer records maintained" },
    { k: "5,000+", v: "Ads processed per batch" },
  ],

  projects: [
    {
      id: "enrollment",
      name: "Enrollment Projection Tool",
      year: "2023–24",
      kind: "Internship Project · INTO Mason",
      blurb: "Built Python and Snowflake forecasting workflows that replaced manual spreadsheet processes, improving projection accuracy by 15% and reducing manual workload by 50%.",
      details: "Designed an end-to-end data pipeline: pulled enrollment data from Snowflake, cleaned and normalized student cohorts, ran forecasting models, and generated recurring reports for planning and stakeholder review. Presented weekly insights to marketing and cross-functional teams.",
      stack: ["Python", "Snowflake", "pandas", "Matplotlib"],
      role: "Intern — solo build",
      status: "Shipped",
    },
    {
      id: "rml",
      name: "Responsible Machine Learning",
      year: "2026",
      kind: "Graduate Capstone · DNSC 6330",
      blurb: "Graduate-level project examining model fairness, subgroup error measurement, and deployment defensibility for ML systems making consequential decisions.",
      details: "Applied fairness auditing techniques including subgroup error analysis, calibration assessment, and residual risk evaluation. Developed a structured framework for how models should be documented, tested, and reviewed before production deployment.",
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
      blurb: "Applied coursework across machine learning, optimization, statistics, risk analytics, and marketing analytics through the GWU MSBA program.",
      details: "Projects covering supervised and unsupervised learning, mathematical optimization, statistical inference, stochastic modeling, decision and risk analysis, and AI applications in marketing. Selected work available on GitHub.",
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
        "Reviewed and refined 120+ queries and keywords daily to ensure alignment with client policies, industry standards, and best practices.",
        "Oversaw data imports and exports of 5,000+ ads per batch, maintaining accuracy, security, and regulatory compliance.",
        "Collaborated with analysts, QA, and operations teams to redesign the content tagging process, reducing review time by 30%.",
        "Curated and rated bilingual Korean–English digital content with 90%+ accuracy, supporting ad network efficiency.",
      ],
    },
    {
      company: "INTO Mason",
      role: "Enrollment Projection Tool Intern",
      where: "Fairfax, VA",
      when: "Aug 2023 — Aug 2024",
      bullets: [
        "Developed Python-based enrollment forecasting workflows to collect, clean, and analyze student enrollment data, improving projection accuracy by 15%.",
        "Automated recurring data preparation and reporting processes, reducing manual workload by 50%.",
        "Built data visualizations and trend reports using pandas and Matplotlib to support enrollment planning and stakeholder decision-making.",
        "Presented weekly enrollment insights to marketing and cross-functional teams to support Korean student recruitment outreach.",
      ],
    },
    {
      company: "Sallie Mae",
      role: "Credit Bureau Reporting Intern",
      where: "Newcastle, DE · Remote",
      when: "Jun 2023 — Aug 2023",
      bullets: [
        "Maintained reporting accuracy across approximately 6.5 million customer records and monitored controls for faulty reporting trends.",
        "Used SQL to identify illogical FCRA reporting scenarios and maintained an exceptions database.",
        "Reconciled account data reported to four national credit bureaus — Equifax, TransUnion, Experian, and Innovis — on a daily basis.",
        "Supported a 90%+ data accuracy standard, evidenced by low reject and dispute rates.",
      ],
    },
    {
      company: "George Mason IT Support",
      role: "Student Support Specialist",
      where: "Fairfax, VA",
      when: "Jan 2022 — Aug 2023",
      bullets: [
        "Supported 20+ students and faculty per shift via phone, live chat, and walk-in with a 90%+ resolution rate.",
        "Created and resolved 40+ support tickets per shift through Team Dynamics.",
        "Consistently met and exceeded the 95% customer interaction satisfaction target.",
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
      items: ["Reporting", "Process improvement", "Stakeholder communication", "Digital marketing analytics", "AI in marketing"],
    },
  ],
};

export default PORTFOLIO;
