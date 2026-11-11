export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  role: string;
  initials: string;
  image?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  iconName: string;
  topics: string[];
  practicalHighlights: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const COMPANY_INFO = {
  name: "CODELYTIC SOFTWARE SOLUTIONS",
  shortName: "CODELYTIC",
  tagline: "Innovation. Excellence. Success.",
  logoUrl: "/assets/aistudio/image_70a30956.png",
  contact: {
    phone: "9943163326",
    whatsappUrl: "https://wa.me/919943163326",
    email: "official.codelytic@gmail.com",
    emailUrl: "mailto:official.codelytic@gmail.com",
    gmailComposeUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=official.codelytic@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/codelytic-software-11802944a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagramUrl: "https://www.instagram.com/official_codelytic_solutions?mdxt=MTllbmRzOHB3d2hxcw==",
  },
  hero: {
    heading: "Empowering Innovation Through Technology",
    supporting: "Transforming Ideas Into Digital Excellence.",
    intro: "At CODELYTIC SOFTWARE SOLUTIONS, we believe in innovation, continuous learning, and technological excellence. We empower individuals with essential digital skills and support the journey towards a smarter digital future.",
  },
  about: {
    title: "Who We Are",
    description: "CODELYTIC SOFTWARE SOLUTIONS is a technology-focused organization dedicated to digital innovation, skill development, and professional growth. We focus on empowering individuals through technology education, practical learning, and opportunities to explore the evolving digital world.",
  },
  vision: {
    title: "OUR VISION",
    text: "To become a trusted and innovative technology organization that inspires creativity, develops skilled professionals, and creates meaningful digital opportunities for the future.",
  },
  mission: {
    title: "OUR MISSION",
    text: "To empower individuals through quality technology education, practical skill development, innovation, and industry-relevant learning experiences while encouraging continuous professional growth.",
  },
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "priyadharshini",
    name: "Priyadharshini",
    designation: "Founder & CEO",
    role: "Leads the company's vision, strategic planning, business operations, and organizational development. Oversees overall management, drives innovation, and guides the company towards its long-term goals.",
    initials: "P",
    image: "/assets/aistudio/image_1fd5d402.png",
  },
  {
    id: "manisankar",
    name: "Manisankar M",
    designation: "HR Executive & Manager",
    role: "Manages recruitment, human resources, employee coordination, team engagement, and organizational communication. Supports workforce development and maintains a positive professional environment.",
    initials: "MM",
    image: "/assets/aistudio/image_b1e5747e.png",
  },
  {
    id: "sujith",
    name: "Sujith S",
    designation: "Business Development Manager",
    role: "Focuses on business expansion, client relationships, strategic partnerships, and identifying new opportunities. Develops growth strategies and strengthens the company's professional network.",
    initials: "SS",
    image: "/assets/aistudio/image_e3a07756.png",
  },
  {
    id: "santhiya",
    name: "Santhiya V",
    designation: "Team Management Lead",
    role: "Coordinates team activities, monitors workflow, supports collaboration, and ensures effective team communication. Helps members complete their responsibilities efficiently.",
    initials: "SV",
    image: "/assets/aistudio/image_164dedc2.png",
  },
  {
    id: "nisha",
    name: "Nisha P",
    designation: "Event Coordinator & Program Manager",
    role: "Plans and coordinates company events, manages programs, organizes activities, and oversees event execution. Ensures smooth coordination and successful program delivery.",
    initials: "NP",
    image: "/assets/aistudio/image_2044bcc1.png",
  },
];

export const COURSES: Course[] = [
  {
    id: "excel",
    title: "MICROSOFT EXCEL",
    description: "Learn spreadsheet management, formulas, functions, data organization, and professional reporting.",
    iconName: "Table",
    topics: [
      "Spreadsheet Management & Cell Formatting",
      "Core Mathematical & Statistical Formulas",
      "Lookup Functions (VLOOKUP, XLOOKUP, INDEX/MATCH)",
      "Pivot Tables & Dynamic Summaries",
      "Data Cleaning & Conditional Formatting",
      "Executive Dashboard & Reporting Creation"
    ],
    practicalHighlights: [
      "Hands-on spreadsheet manipulation",
      "Automating repetitive calculation workflows",
      "Building structured business reports"
    ]
  },
  {
    id: "sql",
    title: "SQL",
    description: "Understand database management, queries, data retrieval, and database operations.",
    iconName: "Database",
    topics: [
      "Relational Database Architecture",
      "Data Definition & Manipulation (DDL & DML)",
      "Complex Queries, Filtering & Sorting",
      "Table Joins (Inner, Left, Right, Full)",
      "Aggregate Functions & Grouping",
      "Subqueries, Views & Index Optimization"
    ],
    practicalHighlights: [
      "Writing production-grade SQL queries",
      "Extracting critical business insights",
      "Multi-table relationship structuring"
    ]
  },
  {
    id: "python",
    title: "PYTHON PROGRAMMING",
    description: "Develop programming skills through Python fundamentals, logical thinking, and practical coding.",
    iconName: "Code2",
    topics: [
      "Python Syntax & Core Data Types",
      "Control Flow & Decision Logic",
      "Functions, Scopes & Modular Programming",
      "Data Structures: Lists, Dictionaries, Sets, Tuples",
      "Object-Oriented Programming (Classes & Objects)",
      "File I/O, Error Handling & Built-in Modules"
    ],
    practicalHighlights: [
      "Algorithmic problem-solving routines",
      "Building modular script utilities",
      "Clean, readable Pythonic code standards"
    ]
  },
  {
    id: "power-bi",
    title: "POWER BI",
    description: "Learn data visualization, interactive dashboards, business intelligence, and reporting.",
    iconName: "BarChart3",
    topics: [
      "Power BI Desktop Interface & Workflow",
      "Data Importation & Power Query Transformations",
      "Data Modeling & Cardinality Relationships",
      "DAX Measures & Calculated Columns",
      "Interactive Charting, Cards & Drill-throughs",
      "Publishing Reports & Dashboard Distribution"
    ],
    practicalHighlights: [
      "Converting raw datasets into visual stories",
      "Creating interactive multi-page dashboards",
      "Business performance metric monitoring"
    ]
  },
  {
    id: "frontend",
    title: "FRONTEND DEVELOPMENT",
    description: "Explore HTML, CSS, JavaScript, and modern frontend development fundamentals.",
    iconName: "Layout",
    topics: [
      "Semantic HTML5 & Document Structure",
      "Modern CSS3, Flexbox & CSS Grid Layouts",
      "Responsive Web Design & Mobile Optimization",
      "JavaScript Fundamentals & DOM Manipulation",
      "Event Handling & Asynchronous API Requests",
      "Modern UI Component Design Principles"
    ],
    practicalHighlights: [
      "Building fully responsive web page interfaces",
      "Clean cross-browser styling workflows",
      "Interactive DOM user experience scripting"
    ]
  },
  {
    id: "java",
    title: "JAVA PROGRAMMING",
    description: "Understand Java programming, object-oriented concepts, and application development fundamentals.",
    iconName: "Coffee",
    topics: [
      "Java Syntax, Data Types & JVM Architecture",
      "Object-Oriented Programming (OOP) Pillars",
      "Encapsulation, Inheritance, Polymorphism & Abstraction",
      "Java Collections Framework (List, Set, Map)",
      "Exception Handling & Debugging Techniques",
      "Input/Output Streams & Multithreading Basics"
    ],
    practicalHighlights: [
      "Designing robust object hierarchies",
      "Handling complex application states",
      "Enterprise-grade programming patterns"
    ]
  },
  {
    id: "prompt-engineering",
    title: "PROMPT ENGINEERING",
    description: "Learn how to create effective AI prompts and improve productivity using modern AI tools.",
    iconName: "Sparkles",
    topics: [
      "Foundations of Large Language Models",
      "Prompt Framing & System Instructions",
      "Few-Shot, Chain-of-Thought & Role Prompting",
      "Structured Output Generation (JSON, Markdown)",
      "Context Window Optimization & Token Efficiency",
      "Integrating AI into Daily Professional Workflows"
    ],
    practicalHighlights: [
      "Iterative prompt refinement techniques",
      "Automating research, drafting, and analysis tasks",
      "Ensuring output accuracy and consistency"
    ]
  },
  {
    id: "digital-marketing",
    title: "DIGITAL MARKETING",
    description: "Explore SEO, social media marketing, content strategy, and digital marketing fundamentals.",
    iconName: "Megaphone",
    topics: [
      "Digital Marketing Landscape & Funnels",
      "Search Engine Optimization (On-Page & Off-Page)",
      "Keyword Research & Search Intent",
      "Social Media Campaign Planning & Growth",
      "Content Marketing & Copywriting Fundamentals",
      "Analytics, Conversion Tracking & ROI Measurement"
    ],
    practicalHighlights: [
      "Designing multi-channel campaign strategies",
      "Optimizing organic web presence",
      "Audience engagement analytics review"
    ]
  },
  {
    id: "canva",
    title: "CANVA DESIGN",
    description: "Learn creative design, social media graphics, presentations, and professional visual content creation.",
    iconName: "Palette",
    topics: [
      "Canva Interface & Design Canvas Navigation",
      "Visual Hierarchy, Typography & Color Harmony",
      "Social Media Creative Assets (Posts, Stories, Banners)",
      "Professional Presentations & Pitch Decks",
      "Brand Kits, Palettes & Asset Organization",
      "Export Formats, Print Readiness & Digital Assets"
    ],
    practicalHighlights: [
      "Creating professional marketing collateral",
      "Designing high-impact slide presentations",
      "Mastering visual brand consistency"
    ]
  }
];

export const FEATURES: Feature[] = [
  {
    id: "practical-learning",
    title: "Practical Learning",
    description: "Focus on hands-on application, real-world case scenarios, and practical exercises that reinforce conceptual mastery.",
    iconName: "Laptop"
  },
  {
    id: "industry-relevant",
    title: "Industry-Relevant Skills",
    description: "Curriculum aligned directly with modern enterprise expectations and the evolving demands of the technology sector.",
    iconName: "CheckCircle2"
  },
  {
    id: "innovation-creativity",
    title: "Innovation & Creativity",
    description: "Fostering analytical problem-solving and creative thinking to build progressive digital solutions for tomorrow.",
    iconName: "Lightbulb"
  },
  {
    id: "professional-development",
    title: "Professional Development",
    description: "Comprehensive guidance that empowers learners with career agility, workplace confidence, and professional etiquette.",
    iconName: "TrendingUp"
  },
  {
    id: "continuous-learning",
    title: "Continuous Learning",
    description: "Instilling a lifelong learning mindset to stay resilient, adaptive, and proficient as technologies continue to advance.",
    iconName: "BookOpen"
  },
  {
    id: "future-ready",
    title: "Future-Ready Skills",
    description: "Equipping individuals with modern technical and digital capabilities designed to thrive in tomorrow's digital economy.",
    iconName: "Compass"
  }
];
