import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CircleDollarSign,
  Compass,
  HeartHandshake,
  Landmark,
  PieChart,
  ShieldCheck,
  Target,
  WalletCards
} from "lucide-react";

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
  { href: "/compliance", label: "Compliance" }
];

export const trustPillars = [
  "Founded by CA Rohan R Shirke",
  "AMFI Registered Mutual Fund Distributor",
  "ARN-319365",
  "Client-first philosophy",
  "Disciplined long-term wealth approach"
];

export type ServiceItem = {
  title: string;
  summary: string;
  icon: LucideIcon;
  problem: string;
  approach: string[];
  benefits: string[];
  process: string[];
};

export const services: ServiceItem[] = [
  {
    title: "Wealth Management",
    summary:
      "Integrated wealth planning designed to grow, protect, and organize long-term capital.",
    icon: Landmark,
    problem: "Investors often accumulate products without a coherent strategy or disciplined review process.",
    approach: [
      "Map current assets, liabilities, cash flows, and family priorities.",
      "Create a long-term allocation and review framework tailored to risk capacity.",
      "Coordinate investment decisions with tax efficiency and liquidity needs."
    ],
    benefits: [
      "Clearer portfolio structure",
      "Improved long-term discipline",
      "Better coordination across goals"
    ],
    process: ["Discovery meeting", "Portfolio diagnosis", "Strategy build", "Execution support", "Review rhythm"]
  },
  {
    title: "Mutual Fund Distribution",
    summary:
      "Curated mutual fund selection aligned with suitability, diversification, and long-term behavior.",
    icon: PieChart,
    problem: "Too many fund choices can lead to product confusion, duplication, and poor consistency.",
    approach: [
      "Assess investment goals, time horizon, and risk profile.",
      "Shortlist relevant mutual fund categories and schemes.",
      "Support implementation, tracking, and periodic review."
    ],
    benefits: ["Product clarity", "Diversified implementation", "Structured ongoing monitoring"],
    process: ["Suitability mapping", "Fund shortlist", "Allocation design", "Execution", "Periodic review"]
  },
  {
    title: "Financial Planning",
    summary:
      "A full-picture financial plan covering cash flow, goals, protection, investments, and future readiness.",
    icon: Compass,
    problem: "Many professionals save regularly but lack a complete plan tying money decisions to life goals.",
    approach: [
      "Document personal and family financial objectives.",
      "Assess income, expenses, liabilities, insurance, and investable surplus.",
      "Build a priority-based action plan with review checkpoints."
    ],
    benefits: ["Goal visibility", "Higher decision confidence", "More efficient money allocation"],
    process: ["Fact-find", "Gap analysis", "Action roadmap", "Implementation coordination", "Progress reviews"]
  },
  {
    title: "Goal-Based Investing",
    summary:
      "Investing organized around outcomes such as education, lifestyle goals, and wealth milestones.",
    icon: Target,
    problem: "Generic investing often fails because it is not connected to specific goals and timelines.",
    approach: [
      "Separate short-, medium-, and long-term goals.",
      "Assign suitable investment buckets to each objective.",
      "Track progress and update contribution levels over time."
    ],
    benefits: ["Purpose-driven decisions", "Better allocation behavior", "Progress that feels measurable"],
    process: ["Goal mapping", "Timeline segmentation", "Bucket strategy", "Execution", "Milestone reviews"]
  },
  {
    title: "Retirement Planning",
    summary:
      "Long-horizon planning focused on income continuity, inflation resilience, and retirement confidence.",
    icon: WalletCards,
    problem: "Retirement is frequently underplanned because future spending, inflation, and longevity are underestimated.",
    approach: [
      "Estimate retirement corpus needs using realistic assumptions.",
      "Build a phased contribution and allocation strategy.",
      "Refine the plan as income, goals, and market conditions evolve."
    ],
    benefits: ["Better retirement visibility", "Inflation-aware planning", "Steadier saving discipline"],
    process: ["Retirement estimate", "Corpus gap review", "Strategy design", "Execution", "Annual recalibration"]
  },
  {
    title: "Portfolio Review",
    summary:
      "Independent review of portfolio structure, concentration, overlap, behavior risk, and suitability.",
    icon: BarChart3,
    problem: "Existing portfolios may be over-diversified, under-allocated, emotional, or misaligned with goals.",
    approach: [
      "Review current holdings across mutual funds and other assets.",
      "Identify overlap, style drift, and unnecessary complexity.",
      "Recommend a simpler, goal-aware restructuring path."
    ],
    benefits: ["Reduced clutter", "Clearer next steps", "Improved confidence during volatility"],
    process: ["Portfolio upload", "Diagnostic review", "Opportunity map", "Action suggestions", "Follow-up support"]
  },
  {
    title: "Corporate Investment Planning",
    summary:
      "Treasury and surplus management guidance for businesses, founders, and MSMEs seeking disciplined deployment.",
    icon: Building2,
    problem: "Business surplus often sits idle or gets deployed inconsistently without liquidity and tax context.",
    approach: [
      "Review cash reserve requirements and operating cycles.",
      "Define investment buckets for liquidity, reserves, and strategic surplus.",
      "Support implementation through suitable mutual fund-led solutions where relevant."
    ],
    benefits: ["Smarter surplus management", "Improved liquidity planning", "More intentional capital allocation"],
    process: ["Business context review", "Cash segmentation", "Investment framework", "Execution support", "Review cadence"]
  },
  {
    title: "Corporate Treasury Planning",
    summary:
      "Structured treasury planning for business reserves, operating liquidity, and disciplined deployment of corporate surplus.",
    icon: BriefcaseBusiness,
    problem: "Corporate cash often lacks a clear framework for liquidity, reserves, and measured deployment.",
    approach: [
      "Define treasury priorities across operating liquidity, buffer reserves, and deployable surplus.",
      "Segment capital by timeline, flexibility, and risk tolerance.",
      "Support a disciplined framework for monitoring and review."
    ],
    benefits: ["Sharper treasury discipline", "Improved cash visibility", "Stronger reserve planning"],
    process: ["Treasury review", "Capital segmentation", "Framework design", "Execution support", "Ongoing review"]
  },
  {
    title: "Real Estate and Housing Loan Consulting",
    summary:
      "Guidance on property-linked financial decisions, housing loan readiness, and long-term borrowing clarity.",
    icon: BriefcaseBusiness,
    problem: "Property decisions and home loans can become stressful when financing, affordability, and long-term fit are unclear.",
    approach: [
      "Review property goals, affordability, down payment readiness, and borrowing capacity.",
      "Help evaluate loan structure, repayment comfort, and long-term cash flow impact.",
      "Support more confident decision-making around real estate-linked commitments."
    ],
    benefits: ["Better borrowing clarity", "Stronger affordability planning", "More confident property decisions"],
    process: ["Goal review", "Affordability analysis", "Loan structure discussion", "Decision support", "Follow-up review"]
  }
];

export const valueCards = [
  {
    title: "Trust",
    copy: "A relationship-first approach grounded in clarity, consistency, and responsible communication.",
    icon: ShieldCheck
  },
  {
    title: "Discipline",
    copy: "Calm decision-making and process-led investing over noise, hype, or short-term reactions.",
    icon: BadgeCheck
  },
  {
    title: "Transparency",
    copy: "Straightforward recommendations, visible logic, and realistic expectations.",
    icon: HeartHandshake
  },
  {
    title: "Long-Term Thinking",
    copy: "Strategies designed for durable wealth creation, preservation, and life-stage readiness.",
    icon: CircleDollarSign
  }
];

export const investorPainPoints = [
  "Confused about where to invest?",
  "Too many mutual funds to choose from?",
  "Need disciplined long-term planning?",
  "Want clarity instead of market noise?",
  "Struggling with asset allocation and tax efficiency?",
  "Worried about market volatility and emotional decisions?"
];

export const processSteps = [
  { title: "Understand Goals", copy: "We start with your priorities, timelines, risk comfort, and family context." },
  { title: "Analyze Financial Position", copy: "Cash flow, assets, liabilities, protection, and current investments are reviewed." },
  { title: "Build Investment Strategy", copy: "A goal-led plan is created with suitable allocations and implementation pathways." },
  { title: "Execute & Monitor", copy: "We coordinate execution and bring structure to investment follow-through." },
  { title: "Ongoing Reviews", copy: "Regular reviews help the plan stay aligned as markets and life evolve." }
];

export const faqItems = [
  {
    question: "Who is Roshwealth best suited for?",
    answer:
      "Roshwealth works with professionals, business owners, families, first-time investors, and long-term wealth builders who want disciplined financial guidance."
  },
  {
    question: "Do you offer guaranteed returns?",
    answer:
      "No. Roshwealth does not promise guaranteed returns, assured profits, or risk-free investing. Recommendations are aligned to goals, suitability, and market realities."
  },
  {
    question: "Can I get a portfolio review before investing more?",
    answer:
      "Yes. Portfolio reviews are designed to help investors understand allocation gaps, overlap, concentration, and opportunities for simplification."
  }
];

export const blogPosts = [
  {
    slug: "sip-investing-discipline-over-noise",
    title: "SIP Investing: Why Discipline Often Matters More Than Timing",
    excerpt:
      "A calm look at how systematic investing can reduce hesitation, improve consistency, and support long-term goals.",
    category: "SIP Investing",
    publishedAt: "2026-05-10",
    readTime: "5 min read",
    author: "Rohan R Shirke",
    content: [
      "Systematic investing works best when it removes the pressure to predict every market move.",
      "A SIP brings investing into a repeatable habit. That habit matters because many investors struggle more with behavior than with product selection.",
      "Consistency can help investors continue through periods of optimism and fear, which is often where long-term outcomes are shaped.",
      "The right SIP strategy should still be connected to goal timelines, asset allocation, and review discipline."
    ]
  },
  {
    slug: "asset-allocation-for-modern-indian-investors",
    title: "Asset Allocation for Modern Indian Investors",
    excerpt:
      "Why portfolio structure, not just product choice, drives long-term confidence and decision quality.",
    category: "Asset Allocation",
    publishedAt: "2026-05-03",
    readTime: "7 min read",
    author: "Rohan R Shirke",
    content: [
      "Investors often focus on which fund to buy next, while ignoring whether the overall portfolio is balanced.",
      "Asset allocation is the framework that connects liquidity, risk, growth, and long-term stability.",
      "A portfolio should reflect time horizon, cash needs, and emotional comfort, not just recent market narratives.",
      "Reviewing asset allocation regularly can reduce reactionary investing and improve consistency."
    ]
  },
  {
    slug: "handling-market-volatility-with-clarity",
    title: "Handling Market Volatility with Clarity",
    excerpt:
      "How a structured review process can help investors stay grounded during uncertain markets.",
    category: "Behavioural Finance",
    publishedAt: "2026-04-28",
    readTime: "6 min read",
    author: "Rohan R Shirke",
    content: [
      "Volatility is uncomfortable, but it is also part of long-term investing.",
      "Without a plan, investors can confuse temporary market movement with permanent strategy failure.",
      "A review framework built around goals, allocation, and time horizon creates better decision anchors.",
      "Clarity during volatile periods often comes from process, not prediction."
    ]
  }
];

export const seoKeywords = [
  "Wealth Management Mumbai",
  "Financial Planner Mumbai",
  "Mutual Fund Consultant Mumbai",
  "SIP Investment Planning",
  "Wealth Advisor India",
  "Goal-Based Financial Planning"
];

export const footerLinks = {
  services: services.slice(0, 4),
  company: navigation
};

export const whyRoshwealth = [
  "Personalized planning rooted in your real goals and constraints",
  "Goal-based investing over product-led selling",
  "A long-term view built for market cycles, not headlines",
  "Transparent communication and clear review structures",
  "Modern financial intelligence with regulatory professionalism"
];

export const stats = [
  { value: "Client-First", label: "Engagement philosophy" },
  { value: "Goal-Led", label: "Investment design" },
  { value: "Long-Term", label: "Wealth building mindset" },
  { value: "Mumbai", label: "Primary local SEO focus" }
];

export const calculators = [
  {
    title: "SIP Calculator",
    description: "Estimate how steady monthly investing can compound over time."
  },
  {
    title: "Goal Planning Calculator",
    description: "Approximate the monthly investment needed for a future goal."
  }
];
