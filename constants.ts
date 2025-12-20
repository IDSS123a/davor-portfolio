import { ExperienceItem, NavItem, VolunteeringItem, TestimonialItem, BookItem } from './types';

export const CONSULTATION_URL = "https://davormulali.zohobookings.eu/#/253150000000046052";
export const BOOK_SUBMISSION_URL = "https://ai-solved-problem.netlify.app/";
export const AMAZON_AUTHOR_URL = "https://www.amazon.com/s?k=Davor+Mulali%C4%87&i=digital-text"; 

export const PROFILE = {
  name: "Davor Mulalić",
  title: "C-Level AI Leader • CEO & Managing Director",
  tagline: "Turning strategic vision into tangible business outcomes while fostering human-centered, future-ready leadership.",
  shortBio: "Executive Leader and expert in AI Strategy and Digital Transformation with over 25 years of experience driving growth, innovation, and operational excellence. With a proven track record of delivering strong financial results—including a €16M increase in operating income—I bridge traditional leadership with AI-powered solutions to create sustainable growth.",
  images: {
    profile: "https://i.postimg.cc/ryPH99VS/Davor_Mulali-B-1.png",
    about1: "https://i.postimg.cc/hjdYYbc6/TNT_5251.jpg",
    about2: "https://i.postimg.cc/prQ6WWhb/TNT_5279.jpg"
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/davormulalic/",
    email: "mulalic71@gmail.com",
    phone: "+387 (0)61 787 331",
    location: "Sarajevo, Bosnia and Herzegovina"
  },
  // Fixed: Removed duplicate education property
  education: [
    "Online Business School - Master of International Business",
    "Veterinary Faculty - Doctor of Veterinary Medicine"
  ],
  competencies: [
    "AI Strategy & Digital Transformation",
    "Strategic & Operational Management",
    "Financial Management & Revenue Growth",
    "Change Management & Workforce Development"
  ]
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Books', id: 'books' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Volunteering', id: 'volunteering' },
  { label: 'Contact', id: 'contact' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: "CEO / MANAGING DIRECTOR",
    company: "Internationale Deutsche Schule Sarajevo and International Montessori House Sarajevo",
    period: "Jul 2020 – Present",
    stats: [
      { label: "Income Growth", value: "▲240%" },
      { label: "Enrollment Inc.", value: "▲220%" },
      { label: "Team", value: "53" }
    ],
    description: [
      "Led operational management for IDSS and IMH, enhancing adherence to Thuringia and Baden-Württemberg curricula through AI-supported performance tracking for academic excellence.",
      "Created and implemented strategic plans, driving a 220% increase in student enrollment and optimizing workflows with predictive analytics tools.",
      "Spearheaded recruitment initiatives, boosting employee retention by 30% and improving workforce efficiency through AI-driven HR insights and mentorship programs.",
      "Conducted comprehensive market research, leading to the opening of two new branches and 40% growth in overall service capacity.",
      "Through strategic leadership and governance, guided the school to receive the “Business Leader for Sustainable Development 2025”, Bosnia and Herzegovina’s highest national recognition, awarded by UNDP, the United Nations, the Embassy of Sweden, and the Foreign Trade Chamber.",
      "Streamlined operational workflows, ensuring 100% compliance with legislation and standards while applying AI-based risk monitoring.",
      "Implemented ISO 9001:2015 and HACCP standards, achieving a 30% reduction in non-conformance incidents and elevating daily safety metrics."
    ],
    skills: ["AI Analytics", "Predictive Tools", "IBMYP", "ISO 9001:2015", "HACCP"]
  },
  {
    id: '2',
    role: "CORPORATE SALES MANAGER",
    company: "Bisnode / Dun & Bradstreet",
    period: "Jul 2019 - Jul 2020",
    stats: [
      { label: "Income Growth", value: "▲44%" },
      { label: "Team Efficiency", value: "+40%" },
      { label: "Team", value: "6" }
    ],
    description: [
      "Advised 80+ companies on commercial strategies, contributing to a 25% average revenue boost across the client portfolio.",
      "Built and coached a high-performing sales team of 6 members, increasing team efficiency by 40% and client acquisition by 30%.",
      "Conducted market analysis, identifying opportunities that led to a 15% increase in market penetration and product offerings.",
      "Launched two innovative product lines, increasing sales by €84,000 annually, while reducing sales cycle time by 25%.",
      "Managed relationships with 50+ key accounts, driving a 44% revenue growth and strengthening long-term partnerships.",
      "Focused on enhancing market presence, optimizing sales strategies, and contributing to the company's success in a competitive environment."
    ],
    skills: ["Commercial Strategy", "Sales Leadership", "Market Analysis", "Key Account Management"]
  },
  {
    id: '3',
    role: "CEO / MANAGING DIRECTOR and COO",
    company: "Blue Trade Ltd. (Krautz-Temax Group)",
    period: "Feb 2018 - Jul 2019",
    stats: [
      { label: "Net Profit Inc.", value: "▲673%" },
      { label: "Market Share", value: "+15%" },
      { label: "Team", value: "8" }
    ],
    description: [
      "Formulated and implemented strategic business plans for three divisions, driving €394,000 in net profit (+673%) over 18 months.",
      "Delivered market analysis and strategic insights that directly influenced a 15% expansion in regional market share.",
      "Designed operational strategies, boosting efficiency by 25% and expanding operations into two new markets.",
      "Enforced strict compliance frameworks, achieving 100% adherence to EU regulations and eliminating legal risks.",
      "Strengthened partnerships with stakeholders, facilitating €1.2M in joint ventures and improved regulatory compliance.",
      "Directed financial oversight, optimizing investment portfolios and achieving a 40% ROI across business units.",
      "Mentored executive teams using tailored training programs, leading to a 20% increase in leadership effectiveness.",
      "Reviewed and evaluated managerial reports to recognize achievements and address issues.",
      "Represented the company publicly, enhancing its profile and addressing complex challenges with effective solutions."
    ],
    skills: ["Strategic Planning", "Operational Efficiency", "Regulatory Compliance", "ROI Optimization"]
  },
  {
    id: '4',
    role: "CEO (Assistant General Manager) / COO",
    company: "Xylon Corporation Ltd. (Plena Group)",
    period: "Apr 2015 - Feb 2018",
    stats: [
      { label: "Income Growth", value: "▲33%" },
      { label: "Procurement Save", value: "€400K" },
      { label: "Team", value: "197" }
    ],
    description: [
      "Directed corporate strategy, aligning with board directives, which contributed to €16M (+33%) operating income in one year.",
      "Managed and coached a cross-functional team of 190 employees, improving departmental productivity by 35%.",
      "Implemented team-building initiatives and training sessions to enhance morale, resolve conflicts, and address Equal Employment Opportunity (EEO) complaints, while integrating LEAN concepts.",
      "Engineered production strategies, leading to €15M in annual revenue and a 20% reduction in production costs.",
      "Achieved significant cost reductions through streamlined procurement and production processes, improving operational efficiency.",
      "Achieved certification for ISO, FSC, and PEFC, raising operational compliance by 25% and aligning with global best practices.",
      "Reorganized procurement systems, saving €400,000 annually through strategic vendor negotiations and optimized workflows.",
      "Orchestrated ERP implementation, cutting lead times by 30% and improving inventory accuracy by 40%."
    ],
    skills: ["LEAN Concepts", "FSC & PEFC Certification", "ERP Implementation", "Production Strategy"]
  },
  {
    id: '5',
    role: "CEO (Assistant General Manager/Business Development Director)",
    company: "D.I.K. International Limited",
    period: "Jan 2013 - Apr 2015",
    stats: [
      { label: "Revenue Inc.", value: "▲32%" },
      { label: "Cost Savings", value: "€1.5M" },
      { label: "Team", value: "42" }
    ],
    description: [
      "Streamlined organizational strategy to align with the mission, resulting in a 32% increase in annual revenue to €10M.",
      "Enhanced HR practices, improving employee retention by 20% and building a high-performing culture aligned with company values.",
      "Managed high-impact projects, achieving 95% on-time delivery rates and fostering robust stakeholder engagement.",
      "Designed task frameworks and performance metrics, boosting subsidiary efficiency by 25% and ensuring seamless communication.",
      "Implemented innovative business strategies, resulting in €2.4M in additional revenue across subsidiaries.",
      "Achieved subsidiary targets by planning, budgeting, and tracking performance, efficiently allocating resources, and adapting strategies as needed.",
      "Enhanced the company's image through client, government, and community engagement, upholding ethical standards and advising stakeholders.",
      "Managed relationships from initial contact to project delivery and post-project follow-up, ensuring client satisfaction in collaboration with the Managing Director.",
      "Led KAIZEN initiatives, cutting operational waste by 30% and driving €1.5M in cost savings through process optimization."
    ],
    skills: ["KAIZEN Initiatives", "Stakeholder Engagement", "Subsidiary Management", "Business Strategy"]
  },
  {
    id: '6',
    role: "CEO / HEAD OF REGIONAL OFFICE",
    company: "LOK Microcredit Foundation",
    period: "Apr 2007 - Jan 2013",
    stats: [
      { label: "Portfolio Growth", value: "▲300%" },
      { label: "Client Base Inc.", value: "▲364%" },
      { label: "Team", value: "43" }
    ],
    description: [
      "Directed operations for 16 regional offices, expanding portfolio by 300% to €12M while supervising a team of 43 credit officers.",
      "Developed and implemented innovative strategies to enhance client engagement across diverse communities.",
      "Expanded operations by establishing 12 new offices and recruiting 33 credit officers within a two-year period.",
      "Engineered portfolio growth, increasing revenue by 300% and expanding client base by 364% through innovative credit strategies.",
      "Chaired the loan committee. Evaluated and approved loans with a 97% repayment rate, minimizing defaults and maintaining portfolio quality.",
      "Implemented ISO 9001:2000 standards, reducing documentation errors by 40% and ensuring strict compliance across all practices.",
      "Built strategic client partnerships, generating €2M in long-term business opportunities and securing high client satisfaction."
    ],
    skills: ["Portfolio Management", "Credit Scoring", "Risk Control", "ISO 9001:2000"]
  },
  {
    id: '7',
    role: "CEO / MANAGING DIRECTOR",
    company: "Hospitalija Trgovina d.o.o.",
    period: "Dec 2003 - Apr 2007",
    stats: [
      { label: "Income Growth", value: "▲25%" },
      { label: "Efficiency Inc.", value: "+35%" },
      { label: "Team", value: "8" }
    ],
    description: [
      "Established operational systems, achieving €2M annual revenue through strategic marketing and efficient process management.",
      "Designed strategic business plans, increasing operational efficiency by 35% and reducing overhead costs by 20%.",
      "Recruited and mentored an 8-member team, driving a 50% increase in client acquisition and improving service delivery metrics.",
      "Executed targeted marketing strategies, boosting net sales by 45% and reducing distribution costs by 25%.",
      "Supervised the complete sales pipeline, increasing customer retention by 30% and winning three key tender contracts.",
      "Fostered strong partnerships with key clients and renowned suppliers, including Grainer, Becton Dickinson, Top Guard, and Improve.",
      "Secured exclusive dealership agreements, increasing revenue by €400,000 annually through strong supplier relationships.",
      "Ensured strict compliance with medicine registration, importation, storage, delivery, and pharmacovigilance procedures."
    ],
    skills: ["Operational Systems", "Tender Contracts", "Dealership Agreements", "Pharmacovigilance"]
  },
  {
    id: '8',
    role: "SENIOR OPERATIONS ASSOCIATE",
    company: "USAID, KPMG - Business Finance/Banking project",
    period: "Mar 1997 - Dec 2003",
    stats: [
      { label: "Active Loans", value: "923" },
      { label: "Efficiency Inc.", value: "+25%" },
      { label: "Team", value: "6" }
    ],
    description: [
      "Directed the Operations Unit, streamlining workflows and achieving a 25% improvement in departmental efficiency.",
      "Facilitated collaboration among USAID divisions and local banks, accelerating project completions by 20%.",
      "Delivered analytical reports to the US Ambassador, leading to data-driven decisions on major funding allocations.",
      "Designed IAS-driven policies, reducing accounting errors by 30% and increasing transactional accuracy.",
      "Managed credit and loan approvals, disbursing €10M+ in funds while maintaining a 98% timeliness rate.",
      "Implemented VBA solutions, reducing operational costs by €250,000 annually through process automation.",
      "Created and implemented tailored MS Access/Excel solutions for the loan department's specific business requirements.",
      "Managed daily bank account activities, maintaining proactive communication with Bank of America and local banks.",
      "Directed daily account changes, ensuring meticulous reconciliation and accurate maintenance of user loan cards.",
      "Provided detailed daily reports to the Operations Unit Manager on loan status, bookkeeping, general ledger accounts, and unit-wide activities."
    ],
    skills: ["VBA Automation", "IAS-driven Policies", "Operations Management", "Analytical Reporting"]
  }
];

export const VOLUNTEERING: VolunteeringItem[] = [
  {
    id: 'v1',
    role: "Business Mentor / CMAS & SSI Dive Master Instructor",
    organization: "KVS Scuba",
    period: "Apr 2019 – Present",
    description: "Mentored 500+ diving enthusiasts in sports, commercial, and technical diving with 100% certification success rate. Advocated for water resource preservation through 80+ community events, reaching 7,000+ participants. Developed therapeutic diving programs benefitting 50+ individuals with disabilities."
  },
  {
    id: 'v2',
    role: "Member of the Research Unit",
    organization: "Sharklab Malta",
    period: "2016 – Present",
    description: "Contributing to marine conservation and research efforts. Conducted species monitoring and public outreach programs. Supporting conservation efforts that reduced harmful fishing practices."
  },
  {
    id: 'v3',
    role: "President / Co-Founder",
    organization: "ELAN NGO – Youth-Sport-Environment",
    period: "Sep 2010 – Jun 2018",
    description: "Co-founded and led organization promoting youth sports and environmental awareness. Increased youth participation in sports by 40% and organized 15+ environmental events annually. Designed engagement programs raising community involvement by 30%."
  }
];

export const BOOKS: BookItem[] = [
  {
    id: 'b1',
    title: "AI for Business and Personal Excellence",
    subtitle: "Strategies for Modern Professionals",
    description: "A comprehensive handbook for professionals looking to integrate AI into their workflow for maximum productivity and excellence.",
    tags: ["Business", "AI", "Excellence"],
    link: AMAZON_AUTHOR_URL,
    isNew: false
  },
  {
    id: 'b2',
    title: "The AI Teacher's Companion: Integrating Artificial Intelligence in Your Classroom",
    subtitle: "A Practical Guide for Educators",
    description: "Insights into how educators can leverage AI tools to enhance learning outcomes and streamline classroom management.",
    tags: ["Education", "AI", "Teaching"],
    link: AMAZON_AUTHOR_URL,
    isNew: false
  },
  {
    id: 'b3',
    title: "Mastering Prompt Engineering: a practical manual for advanced non-coders",
    subtitle: "From Beginner to Power User",
    description: "A step-by-step manual for professionals to master the art of prompt engineering for various AI models.",
    tags: ["AI", "Prompt Engineering"],
    link: AMAZON_AUTHOR_URL,
    isNew: false
  },
  {
    id: 'b4',
    title: "AI Solved Business Problems - A Manager's Workbook (Pre-order)",
    subtitle: "A Manager’s Workbook",
    description: "50 real-world business challenges from 10 industries, each solved with a concrete, high-ROI AI prompt solution.",
    tags: ["AI", "Workbook", "Management"],
    link: BOOK_SUBMISSION_URL,
    isNew: true
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    author: "Bianca Badrov",
    role: "Digital Marketing Enthusiast",
    company: "Blue Trade Ltd.",
    quote: "Davor stands out as an exceptional leader who leads by example rather than just authority. He is deeply organized and inspiring, never hesitating to work alongside his team to reach a goal. His open-minded approach fostered a culture where my ideas were not only heard but championed, pushing me to exceed my own expectations. He combines vast global experience with a genuine willingness to learn from his employees—a rare and motivating trait."
  },
  {
    id: 't2',
    author: "Daniel Kanu",
    role: "Managing Director",
    company: "DIK International Limited, Nigeria",
    quote: "A major asset to our holding company, Davor demonstrated an exceptional ability to resourcefully manage and prioritize multiple high-stakes projects simultaneously. His integrity, connectedness, and persistence went far beyond the call of duty. Because of his unwavering commitment and strategic foresight, a critical $1 billion project was successfully extended for another ten-year period."
  },
  {
    id: 't3',
    author: "Laura Brodrick",
    role: "Project Manager",
    company: "Danish Refugee Council",
    quote: "Mr. Mulalić's greatest assets are his tireless work ethic and versatile skillset. He possesses a unique ability to bridge divides, working effectively with diverse ethnic groups in complex environments. Beyond his management capabilities, his technical skills in design and his uplifting sense of humor make him a unifying force within any organization."
  },
  {
    id: 't4',
    author: "James A. Gomez",
    role: "Chief Operating Officer",
    company: "USAID-Business Finance",
    quote: "Davor is an enthusiastic champion of the team's mission who takes immense pride in complex problem-solving. He is assertive yet conscientious, bringing a consistently positive attitude that drives results. His approach to business finance operations is characterized by a dedication to finding solutions where others see only obstacles."
  },
  {
    id: 't5',
    author: "Stipe Hrkać",
    role: "Director",
    company: "Hospitalija Trgovina d.o.o.",
    quote: "In handling the most complex management tasks, Mr. Mulalić has proven himself to be indispensable. He is a profoundly trustworthy professional with a collaborative team approach, yet he possesses the distinct capability to initiate and drive business independently. His strategic instincts allow him to navigate complex operational challenges with confidence."
  },
  {
    id: 't6',
    author: "Nusret Čaušević",
    role: "General Director",
    company: "LOK Microcredit Foundation",
    quote: "I unreservedly recommend Mr. Davor Mulalić for any high-level management position. His tenure was defined by unwavering responsibility and reliability. He possesses a rare talent for efficiently optimizing human, material, and financial resources simultaneously, ensuring that organizational potential is fully maximized."
  }
];
