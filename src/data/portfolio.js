export const portfolioData = {
  name: "Himasai Tummala",
  title: "Software Engineering & Quantitative Analytics",
  school: "Drexel University '29",
  availability: "Seeking Fall 2026 Co-op (SWE, Data Engineering, Quant Dev)",
  location: "Philadelphia, PA",
  profileImage: null,

  contact: {
    email: "tummala.himasai@gmail.com",
    linkedin: "https://linkedin.com/in/himasai-tummala",
    github: "https://github.com/Himasai10",
  },

  stats: [
    { number: "1st Place", label: "Deloitte Datathon" },
    { number: "3rd Nationally", label: "TSA Conference" },
    { number: "500+", label: "SKUs Automated Daily" },
    { number: "10K+", label: "Records Processed Daily" },
  ],

  about:
    "I build software and data systems that are measurable and production-focused. Most recently, I automated competitive intelligence workflows at Wayfair and built Python backends at Zenith Services that improved efficiency and reduced downtime. My goal for Fall 2026 is a co-op where I can ship backend or data-heavy systems with clear business impact.",

  education: {
    school: "Drexel University",
    location: "Philadelphia, PA",
    degree: "Bachelor of Science, Finance",
    minor: "Computer Science",
    graduation: "Expected June 2029",
    honors: ["Drexel University Scholarship (2024–Present)"],
    coursework: [
      "Data Structures & Algorithms",
      "Financial Accounting",
      "Business Statistics",
      "Calculus I & II",
      "Microeconomics",
      "Computer Science Foundations",
    ],
    extracurriculars: [
      {
        name: "Drexel Consulting Group",
        role: "Member",
        period: "Sep 2024 – Present",
        description:
          "Builds structured problem-solving and presentation skills through weekly case workshops.",
      },
    ],
  },

  projects: [
    {
      id: 1,
      name: "PULSE",
      tagline: "Healthcare analytics dashboard for intervention ROI",
      achievement: "1st Place, Deloitte × Drexel LeBow Datathon",
      description:
        "Built a hyper-local ROI dashboard by merging Chicago Health Atlas and American Lung Association datasets to estimate economic impact of prevention interventions.",
      tech: ["Python", "React", "JavaScript", "Tailwind CSS", "Mapbox GL"],
      keyStat: "Won 1st place against undergraduate and graduate teams",
      challenges:
        "Normalized mismatched geospatial data (zip code vs. census tract) and validated transformations for consistent comparability.",
      architecture:
        "Python ETL pipeline for preprocessing large public datasets, delivered through a static React-based analytical interface.",
      links: {
        github: null,
        live: null,
      },
      color: "#4361ee",
    },
    {
      id: 2,
      name: "E-Commerce BI System",
      tagline: "Event-driven ingestion for Shopify/Stripe/GA4 analytics",
      achievement: "Active Development",
      description:
        "Designing a unified BI platform with FastAPI, Redis streams, and PostgreSQL to handle bursty webhook traffic and preserve event consistency.",
      tech: ["Python", "FastAPI", "PostgreSQL", "React", "Docker", "Redis"],
      keyStat: "Targeting 1,000+ events/sec and <200ms ingest latency",
      challenges:
        "Burst traffic created lock contention in storage. Addressed by queueing ingress and processing asynchronously with workers.",
      architecture:
        "FastAPI producer -> Redis stream -> worker consumers -> PostgreSQL, containerized for reproducible deployments.",
      links: {
        github: null,
        live: null,
      },
      color: "#4cc9f0",
    },
    {
      id: 3,
      name: "Factoid",
      tagline: "Financial data aggregation and volatility analysis",
      achievement: "3rd Place Nationally, TSA",
      description:
        "Developed a market analysis platform aggregating financial APIs, with feature pipelines and regression modeling for short-horizon trend analysis.",
      tech: ["Python", "Pandas", "Scikit-Learn", "REST APIs"],
      keyStat: "Top 3 finalist out of 200+ teams",
      challenges:
        "Handled API rate limits and schema drift via retry logic, schema checks, and robust ingestion guards.",
      architecture:
        "Scheduled Python ingestion jobs, in-memory transformation with Pandas, and model evaluation in scikit-learn.",
      links: {
        github: null,
        live: null,
      },
      color: "#3f37c9",
    },
  ],

  timeline: [
    {
      id: 1,
      year: "2019",
      title: "PA Lead Youth Volunteer",
      org: "Sewa International",
      type: "volunteer",
      logo: null,
      description: [
        "Coordinated statewide youth initiatives and mobilized 100+ volunteers for community service projects.",
        "Recognized with Bronze Presidential Volunteer Service Awards (2021–2024) for sustained community impact.",
        "Led event logistics and volunteer onboarding across multiple Pennsylvania chapters.",
      ],
      metrics: ["4x Presidential Awards", "7+ Years Leadership"],
    },
    {
      id: 2,
      year: "2022",
      title: "Business Operations Associate",
      org: "Junior Achievement",
      type: "work",
      logo: null,
      description: [
        "Achieved 69.9% ROI by analyzing survey data and mentor feedback to optimize product pricing.",
        "Generated $2,000+ revenue across 200+ units through direct sales and coordinated inventory workflows.",
        "Coordinated cross-functional communication across 4 teams for on-time delivery.",
      ],
      metrics: ["69.9% ROI", "$2K+ Revenue", "Top Sales Team"],
    },
    {
      id: 3,
      year: "2022",
      title: "National Finalist",
      org: "TSA Conference",
      type: "achievement",
      logo: null,
      description: [
        "Built 'Factoid,' a real-time market analysis platform integrating 5+ financial APIs.",
        "Improved data quality via retry-aware ETL and schema validation controls.",
        "Placed 3rd nationally among 200+ teams with a quantitative prediction approach.",
      ],
      metrics: ["Top 3 Nationally", "200+ Teams"],
    },
    {
      id: 4,
      year: "2023",
      title: "Software Engineer Intern",
      org: "Zenith Services",
      type: "work",
      logo: null,
      description: [
        "Improved system efficiency by 15% by automating reconciliation workflows in Python.",
        "Reduced client downtime by 20% by integrating and debugging REST API endpoints.",
        "Automated validation for 10,000+ daily records to speed issue detection.",
      ],
      metrics: ["15% Efficiency Gain", "Python Automation", "REST APIs"],
    },
    {
      id: 5,
      year: "2024",
      title: "BS Finance & CS",
      org: "Drexel University",
      type: "education",
      logo: null,
      description: [
        "Drexel University Scholarship recipient (2024–Present).",
        "Pursuing Finance with a Computer Science minor focused on quant and systems thinking.",
        "Active in consulting case workshops and industry competitions.",
      ],
      metrics: ["Scholarship Recipient", "Expected '29"],
    },
    {
      id: 6,
      year: "2025",
      title: "AI Automation Extern",
      org: "Wayfair",
      type: "work",
      logo: null,
      description: [
        "Automated competitor data collection across 500+ SKUs/day with AI agent workflows.",
        "Built live dashboards to surface pricing trend and assortment opportunities.",
        "Delivered category-level benchmarking against major competitors for strategy decisions.",
      ],
      metrics: ["500+ SKUs/Day", "AI Workflows", "Automated ETL"],
    },
    {
      id: 7,
      year: "2026",
      title: "Datathon Champion",
      org: "Deloitte × Drexel",
      type: "achievement",
      logo: null,
      description: [
        "Built PULSE by integrating Chicago Health Atlas and American Lung Association data.",
        "Delivered a React/Tailwind dashboard for intervention ROI in underserved areas.",
        "Won 1st place after presenting technical and business framing to Deloitte judges.",
      ],
      metrics: ["1st Place", "Cross-Disciplinary Build"],
    },
  ],

  skills: {
    languages: ["Python", "SQL", "JavaScript", "TypeScript", "Java", "C++"],
    frameworks: ["React", "Node.js", "FastAPI", "Docker", "AWS", "Git/GitHub", "REST APIs"],
    data: ["ETL Pipelines", "Data Visualization", "Business Intelligence", "Regression Modeling"],
    certifications: ["McGraw-Hill Excel Yellow Belt"],
  },

  hobbies: [
    {
      name: "Basketball",
      icon: "basketball",
      title: "Execution Under Pressure",
      description:
        "Competitive basketball trained fast decision-making, communication, and accountability in time-constrained environments.",
      color: "#f97316",
    },
    {
      name: "Poker",
      icon: "poker",
      title: "Risk and Expected Value",
      description:
        "Poker sharpens probability-based decision-making under uncertainty, a framework I apply to analytics and prioritization.",
      color: "#ef4444",
    },
    {
      name: "Chess",
      icon: "chess",
      title: "Structured Problem Solving",
      description:
        "Chess reinforces planning, trade-off analysis, and long-range thinking that transfers directly to architecture and debugging.",
      color: "#8b5cf6",
    },
  ],
};
