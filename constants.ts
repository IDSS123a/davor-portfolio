

import { ExperienceItem, NavItem, VolunteeringItem, TestimonialItem, BookItem } from './types';

export const CONSULTATION_URL = "https://davormulali.zohobookings.eu/#/253150000000046052";
export const BOOK_SUBMISSION_URL = "https://ai-solved-problem.netlify.app/";
export const AMAZON_AUTHOR_URL = "#"; 

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
  education: [
    "Cambridge International Business Study - Master of International Business",
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
    role: "CEO / Managing Director",
    company: "Internationale Deutsche Schule Sarajevo & International Montessori House",
    period: "Jul 2020 – Present",
    stats: [
      { label: "Revenue", value: "€815K" },
      { label: "Growth", value: "▲240%" },
      { label: "Team", value: "53" },
      { label: "Students", value: "256" }
    ],
    description: [
      "Led operational management for IDSS and IMH, enhancing adherence to Thuringia and Baden-Württemberg curricula through AI-supported performance tracking for academic excellence",
      "Created and implemented strategic plans, driving 220% increase in student enrollment (from 80 to 256 students) and optimizing workflows with predictive analytics tools",
      "Spearheaded recruitment initiatives, boosting employee retention by 30% and improving workforce efficiency through AI-driven HR insights and mentorship programs",
      "Conducted comprehensive market research, leading to the opening of two new branches and 40% growth in overall service capacity",
      "Facilitated the adoption of the International Baccalaureate Middle Years Programme (IBMYP), securing €45,000 in funding and enhancing delivery with AI-assisted learning platforms",
      "Streamlined operational workflows, ensuring 100% compliance with legislation and standards while applying AI-based risk monitoring",
      "Implemented ISO 9001:2015 and HACCP standards, achieving a 30% reduction in non-conformance incidents and elevating daily safety metrics"
    ],
    skills: ["AI Analytics", "Predictive Tools", "LMS", "IBMYP", "ISO 9001:2015", "HACCP"]
  },
  {
    id: '2',
    role: "Corporate Sales Manager",
    company: "Bisnode / Dun & Bradstreet",
    period: "Jul 2019 – Jul 2020",
    stats: [
      { label: "Revenue", value: "€438K" },
      { label: "Growth", value: "▲44%" },
      { label: "Team", value: "6" }
    ],
    description: [
      "Advised 80+ companies on commercial strategies, contributing to a 25% average revenue boost across the client portfolio",
      "Built and coached a high-performing sales team of 6 members, increasing team efficiency by 40% and client acquisition by 30%",
      "Conducted market analysis, identifying opportunities that led to a 15% increase in market penetration and product offerings",
      "Launched two innovative product lines, increasing sales by €84,000 annually, while reducing sales cycle time by 25%",
      "Managed relationships with 50+ key accounts, driving a 44% revenue growth (from €304K to €438K) and strengthening long-term partnerships"
    ],
    skills: ["Commercial Strategy", "Sales Leadership", "Market Analysis", "Key Account Management"]
  },
  {
    id: '3',
    role: "CEO / Managing Director & COO",
    company: "Blue Trade Ltd. (Krautz-Temax Group)",
    period: "Feb 2018 – Jul 2019",
    stats: [
      { label: "Profit", value: "€394K" },
      { label: "Growth", value: "▲673%" },
      { label: "Team", value: "8" }
    ],
    description: [
      "Formulated and implemented strategic business plans for three divisions, driving €394,000 in net profit (+673% from €51K) over 18 months",
      "Delivered market analysis and strategic insights that directly influenced a 15% expansion in regional market share",
      "Designed operational strategies, boosting efficiency by 25% and expanding operations into two new markets",
      "Enforced strict compliance frameworks, achieving 100% adherence to EU regulations and eliminating legal risks",
      "Strengthened partnerships with stakeholders, facilitating €1.2M in joint ventures and improved regulatory compliance",
      "Directed financial oversight, optimizing investment portfolios and achieving a 40% ROI across business units",
      "Mentored executive teams using tailored training programs, leading to a 20% increase in leadership effectiveness"
    ],
    skills: ["Operational Strategy", "Regulatory Compliance", "Financial Oversight", "Business Expansion"]
  },
  {
    id: '4',
    role: "CEO (Assistant General Manager) / COO",
    company: "Xylon Corporation Ltd. (Plena Group)",
    period: "Apr 2015 – Feb 2018",
    stats: [
      { label: "Income", value: "€16M" },
      { label: "Growth", value: "▲33%" },
      { label: "Team", value: "197" }
    ],
    description: [
      "Directed corporate strategy, aligning with board directives, which contributed to €16M (+33%) operating income in one year (from €12M to €16M)",
      "Managed and coached a cross-functional team of 190 employees, improving departmental productivity by 35%",
      "Implemented team-building initiatives and training sessions to enhance morale, resolve conflicts, and address Equal Employment Opportunity (EEO) complaints, while integrating LEAN concepts",
      "Engineered production strategies, leading to €15M in annual revenue and a 20% reduction in production costs",
      "Achieved certification for ISO, FSC, and PEFC, raising operational compliance by 25% and aligning with global best practices",
      "Reorganized procurement systems, saving €400,000 annually through strategic vendor negotiations and optimized workflows",
      "Orchestrated ERP implementation, cutting lead times by 30% and improving inventory accuracy by 40%"
    ],
    skills: ["ERP Systems", "ISO", "FSC", "PEFC", "LEAN"]
  },
  {
    id: '5',
    role: "CEO (Assistant General Manager/Business Development Director)",
    company: "D.I.K. International Limited",
    period: "Jan 2013 – Apr 2015",
    stats: [
      { label: "Revenue", value: "€10M" },
      { label: "Growth", value: "▲32%" },
      { label: "Team", value: "42" }
    ],
    description: [
      "Streamlined organizational strategy to align with the mission, resulting in a 32% increase in annual revenue to €10M (from €7.6M)",
      "Enhanced HR practices, improving employee retention by 20% and building a high-performing culture aligned with company values",
      "Managed high-impact projects, achieving 95% on-time delivery rates and fostering robust stakeholder engagement",
      "Designed task frameworks and performance metrics, boosting subsidiary efficiency by 25% and ensuring seamless communication",
      "Implemented innovative business strategies, resulting in €2.4M in additional revenue across subsidiaries",
      "Led KAIZEN initiatives, cutting operational waste by 30% and driving €1.5M in cost savings through process optimization"
    ],
    skills: ["KAIZEN", "Process Optimization", "Supply Chain", "HR Strategy"]
  },
  {
    id: '6',
    role: "CEO / Head of Regional Office",
    company: "LOK Microcredit Foundation",
    period: "Apr 2007 – Jan 2013",
    stats: [
      { label: "Portfolio", value: "€12M" },
      { label: "Growth", value: "▲300%" },
      { label: "Team", value: "43" }
    ],
    description: [
      "Directed operations for 16 regional offices, expanding portfolio by 300% to €12M (from €3M) while supervising a team of 43 credit officers",
      "Developed and implemented innovative strategies to enhance client engagement across diverse communities",
      "Expanded operations by establishing 12 new offices and recruiting 33 credit officers within a two-year period",
      "Engineered portfolio growth, increasing revenue by 300% and expanding client base by 364% through innovative credit strategies",
      "Chaired the loan committee, evaluated and approved loans with a 97% repayment rate, minimizing defaults and maintaining portfolio quality",
      "Implemented ISO 9001:2000 standards, reducing documentation errors by 40% and ensuring strict compliance across all practices",
      "Built strategic client partnerships, generating €2M in long-term business opportunities and securing high client satisfaction"
    ],
    skills: ["ISO 9001:2000", "Microfinance", "Regional Expansion", "Risk Management"]
  },
  {
    id: '7',
    role: "CEO / Managing Director",
    company: "Hospitalija Trgovina d.o.o.",
    period: "Dec 2003 – Apr 2007",
    stats: [
      { label: "Revenue", value: "€2M" },
      { label: "Growth", value: "▲25%" },
      { label: "Team", value: "8" }
    ],
    description: [
      "Established operational systems, achieving €2M annual revenue (from €1.6M, +25%) through strategic marketing and efficient process management",
      "Designed strategic business plans, increasing operational efficiency by 35% and reducing overhead costs by 20%",
      "Recruited and mentored an 8-member team, driving a 50% increase in client acquisition and improving service delivery metrics",
      "Executed targeted marketing strategies, boosting net sales by 45% and reducing distribution costs by 25%",
      "Supervised the complete sales pipeline, increasing customer retention by 30% and winning three key tender contracts",
      "Fostered strong partnerships with key clients and renowned suppliers, including Grainer, Becton Dickinson, Top Guard, and Improve",
      "Secured exclusive dealership agreements, increasing revenue by €400,000 annually through strong supplier relationships"
    ],
    skills: ["ISO 9001:2000", "Strategic Marketing", "Process Management"]
  },
  {
    id: '8',
    role: "Senior Operations Associate",
    company: "USAID, KPMG – Business Finance/Banking Project",
    period: "Mar 1997 – Dec 2003",
    stats: [
      { label: "Disbursed", value: "€10M+" },
      { label: "Savings", value: "€250K" },
      { label: "Loans", value: "923" }
    ],
    description: [
      "Directed the Operations Unit, streamlining workflows and achieving a 25% improvement in departmental efficiency",
      "Facilitated collaboration among USAID divisions and local banks, accelerating project completions by 20%",
      "Delivered analytical reports to the US Ambassador, leading to data-driven decisions on major funding allocations",
      "Designed IAS-driven policies, reducing accounting errors by 30% and increasing transactional accuracy",
      "Managed credit and loan approvals, disbursing €10M+ in funds while maintaining a 98% timeliness rate",
      "Implemented VBA solutions, reducing operational costs by €250,000 annually through process automation",
      "Created and implemented tailored MS Access/Excel solutions for the loan department's specific business requirements"
    ],
    skills: ["VBA", "MS Access", "MS Excel", "IAS"]
  }
];

export const BOOKS: BookItem[] = [
  {
    id: 'b1',
    title: "AI for Business and Personal Excellence",
    subtitle: "Strategies for Growth and Productivity",
    description: "Applying AI strategies for business growth and personal productivity enhancement",
    tags: ["Business automation", "Personal productivity"],
    link: "#",
    isNew: true
  },
  {
    id: 'b2',
    title: "The AI Teacher's Companion",
    subtitle: "Integrating Artificial Intelligence in Your Classroom",
    description: "Practical guide for educators to effectively integrate AI tools into daily teaching practice",
    tags: ["AI tools for teachers", "Lesson planning with AI"],
    link: "#",
    isNew: true
  },
  {
    id: 'b3',
    title: "Mastering Prompt Engineering",
    subtitle: "A Practical Manual for Advanced Non-Coders",
    description: "Comprehensive guide to prompt engineering for educators and professionals without coding background",
    tags: ["Prompting techniques", "Educational applications"],
    link: "#",
    isNew: true
  },
  {
    id: 'b4',
    title: "AI Solved Business Problems",
    subtitle: "A Manager's Workbook",
    description: "Practical workbook for managers to solve real business challenges using AI",
    tags: ["Problem solving", "Management"],
    link: "#",
    isNew: true
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

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't6',
    author: "Bianca Badrov",
    role: "Digital Marketing Enthusiast",
    company: "Blue Trade Ltd.",
    quote: "Davor stands out as an exceptional leader who leads by example rather than just authority. He is deeply organized and inspiring, never hesitating to work alongside his team to reach a goal. His open-minded approach fostered a culture where my ideas were not only heard but championed, pushing me to exceed my own expectations. He combines vast global experience with a genuine willingness to learn from his employees—a rare and motivating trait."
  },
  {
    id: 't1',
    author: "Daniel Kanu",
    role: "Managing Director",
    company: "DIK International Limited, Nigeria",
    quote: "A major asset to our holding company, Davor demonstrated an exceptional ability to resourcefully manage and prioritize multiple high-stakes projects simultaneously. His integrity, connectedness, and persistence went far beyond the call of duty. Because of his unwavering commitment and strategic foresight, a critical $1 billion project was successfully extended for another ten-year period."
  },
  {
    id: 't2',
    author: "Laura Brodrick",
    role: "Project Manager",
    company: "Danish Refugee Council",
    quote: "Mr. Mulalić's greatest assets are his tireless work ethic and versatile skillset. He possesses a unique ability to bridge divides, working effectively with diverse ethnic groups in complex environments. Beyond his management capabilities, his technical skills in design and his uplifting sense of humor make him a unifying force within any organization."
  },
  {
    id: 't3',
    author: "James A. Gomez",
    role: "Chief Operating Officer",
    company: "USAID-Business Finance",
    quote: "Davor is an enthusiastic champion of the team's mission who takes immense pride in complex problem-solving. He is assertive yet conscientious, bringing a consistently positive attitude that drives results. His approach to business finance operations is characterized by a dedication to finding solutions where others see only obstacles."
  },
  {
    id: 't4',
    author: "Stipe Hrkać",
    role: "Director",
    company: "Hospitalija Trgovina d.o.o.",
    quote: "In handling the most complex management tasks, Mr. Mulalić has proven himself to be indispensable. He is a profoundly trustworthy professional with a collaborative team approach, yet he possesses the distinct capability to initiate and drive business independently. His strategic instincts allow him to navigate complex operational challenges with confidence."
  },
  {
    id: 't5',
    author: "Nusret Čaušević",
    role: "General Director",
    company: "LOK Microcredit Foundation",
    quote: "I unreservedly recommend Mr. Davor Mulalić for any high-level management position. His tenure was defined by unwavering responsibility and reliability. He possesses a rare talent for efficiently optimizing human, material, and financial resources simultaneously, ensuring that organizational potential is fully maximized."
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for the personal portfolio of Davor Mulalić.
Davor is an Executive Leader, CEO, and AI Business Strategist with over 25 years of experience.

Key Profile Facts:
- Current Role: CEO & Managing Director at both Internationale Deutsche Schule Sarajevo (IDSS) and International Montessori House Sarajevo (IMH).
- Key Achievement: Delivered a €16M (33%) increase in operating income at Xylon and 673% net profit increase at Blue Trade.
- Education: Doctor of Veterinary Medicine & Master of International Business (Cambridge).
- Books: Author of 4 books including "AI Solved Business Problems".
- Expertise: AI Strategy, Digital Transformation, Financial Management, School Management.
- Languages: Bosnian/Croatian/Serbian (C2), English (C1), German (A2), French (A1), Latin (B1).
- Interests: Licensed Diving Instructor (CMAS/SSI), Business Consulting.

Project "AI Solved Business Problems":
- Davor's new workbook tackles 50 real-world business challenges.
- He invites users to submit challenges. Selected ones get a 5-pillar prompt solution and book feature.

Professional Style:
- Bridges traditional leadership with AI-powered solutions.
- Focused on human-centered, future-ready leadership.

Tone: Professional, executive, knowledgeable, yet accessible.
`;
