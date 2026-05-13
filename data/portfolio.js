const PORTFOLIO = {
  name: "Ha Lim Chung",
  preferredName: "Jack",
  role: "Business Analytics Graduate Student",
  tags: ["Data Analytics", "Machine Learning", "Optimization"],
  summary: "Graduate student in Business Analytics at The George Washington University — focused on forecasting, ML, optimization, and practical data tools that support real decisions.",
  location: "Fairfax, Virginia",
  email: "chunghalim98@gmail.com",
  github: "https://github.com/wjdgkfla",
  linkedin: "https://www.linkedin.com/in/ha-lim-chung/",
  resume: "/uploads/Ha_Lim_Chung_Resume_Mar4_2026.pdf",
  about: [
    "I'm pursuing a Master of Science in Business Analytics at The George Washington University, building on a B.S. in Management Information Systems from George Mason University's School of Business.",
    "My work sits at the intersection of analytics and practical engineering — forecasting, automation, and data tooling that real teams can use. I'm most interested in building solutions that reduce manual work and support clearer decisions.",
  ],
  stats: [
    { k: "15%", v: "Forecast accuracy improvement" },
    { k: "50%", v: "Manual workload reduction" },
    { k: "~6.5M", v: "Customer records maintained" },
    { k: "5,000+", v: "Ads processed per batch" },
  ],
  projects: [
    { id: "mason-market", name: "Mason Market", year: "2025", kind: "Mobile app · Side project", blurb: "A GMU-focused campus marketplace — a student-to-student way to buy, sell, and trade within the Mason community.", details: "Cross-platform mobile app with real-time listings, in-app messaging, and verified Mason email sign-up.", stack: ["Flutter", "Firebase", "Firestore", "Dart"], role: "Solo build · design + dev", status: "In development" },
    { id: "rml", name: "Responsible Machine Learning", year: "2026", kind: "Graduate coursework · DNSC 6330", blurb: "Fairness, subgroup error measurement, and deployment defensibility for ML systems making consequential decisions.", details: "Examining model fairness through subgroup error analysis, calibration, and residual risk.", stack: ["Python", "scikit-learn", "Fairlearn", "pandas"], role: "Graduate coursework", status: "In progress" },
    { id: "enrollment", name: "Enrollment Projection Tool", year: "2023-24", kind: "Internship work · INTO Mason", blurb: "Python + Snowflake forecasting workflows that replaced manual spreadsheet processes.", details: "Built an end-to-end pipeline improving projection accuracy by 15% and reducing manual workload by 50%.", stack: ["Python", "Snowflake", "pandas", "Matplotlib"], role: "Intern · solo build", status: "Shipped" },
    { id: "coursework", name: "Graduate Analytics Coursework", year: "2025-26", kind: "Graduate program · GWU MSBA", blurb: "Applied projects across machine learning, optimization, statistics, and data analytics.", details: "Applied projects spanning machine learning, statistical inference, optimization, risk analytics, and marketing analytics. Project work available on GitHub.", stack: ["Python", "R", "SQL", "Jupyter", "scikit-learn"], role: "Coursework", github: "https://github.com/wjdgkfla", status: "Ongoing" },
  ],
  experience: [
    { company: "Vaco", role: "Content Analyst", where: "Fairfax, VA · Remote", when: "Nov 2024 — Aug 2025", bullets: ["Reviewed and refined 120+ queries and keywords daily to align with client policies and industry standards.", "Oversaw data imports/exports of 5,000+ ads per batch, maintaining accuracy, security, and regulatory compliance.", "Collaborated with analysts, QA, and ops teams to redesign the content tagging process, reducing review time by 30%.", "Curated and rated bilingual Korean-English digital content with 90%+ accuracy."] },
    { company: "INTO Mason", role: "Enrollment Projection Tool Intern", where: "Fairfax, VA", when: "Aug 2023 — Aug 2024", bullets: ["Developed Python-based enrollment forecasting workflows, improving projection accuracy by 15%.", "Automated recurring data preparation and reporting processes, reducing manual workload by 50%.", "Built data visualizations and trend reports using pandas and Matplotlib.", "Presented weekly enrollment insights to marketing and cross-functional teams."] },
    { company: "Sallie Mae", role: "Credit Bureau Reporting Intern", where: "Newcastle, DE · Remote", when: "Jun 2023 — Aug 2023", bullets: ["Maintained reporting accuracy across approximately 6.5 million customer records.", "Used SQL to identify illogical FCRA reporting scenarios and maintained an exceptions database.", "Reconciled account data reported to four national credit bureaus daily.", "Supported a 90%+ data accuracy standard, evidenced by low reject and dispute rates."] },
    { company: "George Mason IT Support", role: "Student Support Specialist", where: "Fairfax, VA", when: "Jan 2022 — Aug 2023", bullets: ["Supported 20+ students and faculty per shift with a 90%+ resolution rate.", "Created and resolved 40+ support tickets per shift through Team Dynamics.", "Consistently met and exceeded the 95% customer interaction satisfaction target."] },
  ],
  leadership: [
    { org: "Korean International Student Association (KISA)", role: "President / Advisor", where: "George Mason University · Fairfax, VA", when: "Aug 2021 — Aug 2023", bullets: ["Led 50+ members as President and Advisor of KISA at George Mason University.", "Organized events and job fair programs with the Embassy and Consulate of Korea."] },
  ],
  skills: [
    { group: "Programming & Data", items: ["Python", "SQL", "R", "pandas", "Matplotlib", "scikit-learn", "Snowflake"] },
    { group: "Analytics & Machine Learning", items: ["Machine Learning", "Forecasting", "Classification", "Regression", "Clustering", "Fairness metrics", "Risk modeling", "EDA", "Data cleaning"] },
    { group: "Statistics & Optimization", items: ["Statistical inference", "Hypothesis testing", "Probability models", "Stochastic modeling", "Linear programming", "Mathematical optimization"] },
    { group: "Tools & Platforms", items: ["Excel", "PowerPoint", "GitHub", "Jupyter", "Firebase", "Flutter"] },
    { group: "Marketing & Business", items: ["Digital marketing analytics", "AI in marketing", "Reporting", "Process improvement", "Stakeholder communication"] },
    { group: "Languages", items: ["English", "Korean", "Chinese"] },
  ],
};
export default PORTFOLIO;
