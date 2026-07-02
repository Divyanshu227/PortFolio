import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Layers, 
  BookOpen, 
  GitBranch, 
  ChevronRight, 
  CheckCircle2, 
  Target
} from 'lucide-react'
import leetcodeLogo from '../assets/leetcodeLogo.png'
import codechefLogo from '../assets/codechefLogo.png'
import gfgLogo from '../assets/gfgLogo.png'

// Define Log types
type LogType = 'open-source' | 'shipments' | 'academic'

// Define Milestone interface
interface Milestone {
  id: string
  title: string
  subtitle: string
  period: string
  category: LogType
  status: 'ACTIVE' | 'COMPLETED' | 'DEPLOYED'
  summary: string
  tech: string[]
  details: string[]
  metrics?: { label: string; value: string }[]
}

// Experience Milestones Database
const milestonesData: Milestone[] = [
  // OPEN SOURCE
  {
    id: 'gssoc-26',
    title: "GSSoC '26 Contributor",
    subtitle: "GirlScript Summer of Code (Open Source)",
    period: "May 2026 - Present",
    category: 'open-source',
    status: 'ACTIVE',
    summary: "Actively contributing to Web Development and System automation repositories, resolving pipeline issues, and building modular features.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Git", "GitHub Actions"],
    metrics: [
      { label: 'STATUS', value: 'Active Contributor' },
      { label: 'COMMITS', value: 'Simulated Pull Requests' },
      { label: 'FOCUS', value: 'UI Optimization / AST Systems' }
    ],
    details: [
      "Selected as an open-source contributor in the GSSoC '26 cohort.",
      "Identified user interface bottlenecks and implemented responsive fixes across various projects.",
      "Collaborated with project maintainers and other contributors to resolve build errors and test failures.",
      "Submitted clean commit patches complying with repository PR templates and guidelines."
    ]
  },
  {
    id: 'github-community',
    title: "GitHub Open Source Contributions",
    subtitle: "Community Ecosystem & Packages",
    period: "Jan 2025 - Present",
    category: 'open-source',
    status: 'ACTIVE',
    summary: "Contributing patches, triaging codebase issues, writing markdown documentation guides, and sharing developer utility scripts.",
    tech: ["JavaScript", "Markdown", "Shell Scripting", "GitHub"],
    metrics: [
      { label: 'ROLE', value: 'Community Developer' },
      { label: 'COLLABS', value: 'Triaged Issues' },
      { label: 'DOCS', value: 'Guides / API Schemas' }
    ],
    details: [
      "Created and maintained documentation files detailing local repository build requirements.",
      "Shared automation utility shell scripts for batch indexing vectors and running test suites.",
      "Optimized documentation layouts and resolved markup compile issues on personal projects."
    ]
  },
  // PRODUCT SHIPMENTS
  {
    id: 'ship-securetalk',
    title: "SecureTalk System Deployed",
    subtitle: "Full-Stack Chat Application (v1.0.0)",
    period: "March 2026",
    category: 'shipments',
    status: 'DEPLOYED',
    summary: "A modern, feature-rich full-stack chat application enabling real-time messaging, conversation management, and secure JWT/bcrypt authentication with full message edit and delete support.",
    tech: ["React (TS)", "Node.js", "PostgreSQL", "JWT Auth"],
    metrics: [
      { label: 'VERSION', value: 'v1.0.0' },
      { label: 'DATABASE', value: 'PostgreSQL' },
      { label: 'GATEWAY', value: 'Express API' }
    ],
    details: [
      "Secure user registration and login session management via JWT and bcrypt.",
      "Interactive conversations list sidebar with duplicate creation checks.",
      "Full message lifecycle operations (Send, Edit, Delete) with edit status indicator.",
      "Responsive viewport layout (Mobile, Tablet, Desktop) optimized using dark themes."
    ]
  },
  {
    id: 'ship-gymbase',
    title: "GymBase Platform Launched",
    subtitle: "Interactive Workout Community Platform (v1.2.0)",
    period: "January 2026",
    category: 'shipments',
    status: 'DEPLOYED',
    summary: "Interactive workout community platform featuring live rooms creation, trainer dashboards, membership subscription payments via Stripe, and transactional mail pipelines.",
    tech: ["MERN Stack", "Stripe API", "SMTP Mail", "React.js"],
    metrics: [
      { label: 'VERSION', value: 'v1.2.0' },
      { label: 'PAYMENTS', value: 'Stripe API' },
      { label: 'DATABASE', value: 'MongoDB' }
    ],
    details: [
      "Secure checkout pipelines and subscription webhooks linked to Stripe API.",
      "Trainer portal tracking user logs, training stats, and schedule calendars.",
      "Automated welcome and validation notifications using Nodemailer SMTP.",
      "Role-based database schema access routing (Trainer/User)."
    ]
  },
  {
    id: 'ship-trueauth',
    title: "TrueAuth Gateway Deployed",
    subtitle: "Secure Login & Auth Gateway (v1.0.0)",
    period: "December 2025",
    category: 'shipments',
    status: 'DEPLOYED',
    summary: "A comprehensive client-side secure login gateway displaying multi-factor authentication, timed OTP validation codes, and session expiration audits.",
    tech: ["React", "Firebase", "Tailwind CSS", "MFA"],
    metrics: [
      { label: 'VERSION', value: 'v1.0.0' },
      { label: 'SECURITY', value: 'MFA Code Check' },
      { label: 'GATEWAY', value: 'Serverless Functions' }
    ],
    details: [
      "Multi-factor authentication check flows linked to Firebase auth modules.",
      "Temporary token generation (OTP validation keys) for session recoveries.",
      "Automatic activity tracking with local timeout logging system overrides.",
      "Styled responsive auth components with micro-animations state."
    ]
  },
  {
    id: 'ship-evalio',
    title: "Evalio AI & Resume System Shipped",
    subtitle: "AI-powered Resume Analysis Platform (v1.0.2)",
    period: "November 2025",
    category: 'shipments',
    status: 'DEPLOYED',
    summary: "An intelligent AI-powered resume analysis platform parsing document layouts, matching credentials against candidate search queries, scoring ATS compatibility, and highlighting structural improvements.",
    tech: ["Next.js", "FastAPI", "Gemini API", "Vector Search"],
    metrics: [
      { label: 'VERSION', value: 'v1.0.2' },
      { label: 'AI MODEL', value: 'Gemini API' },
      { label: 'VECTOR DB', value: 'Qdrant / Postgres' }
    ],
    details: [
      "PDF/DOCX layout parsing using advanced NLP heuristics.",
      "ATS-compatibility check scoring resume matches out of 100.",
      "Interactive feedback generator highlighting spelling, grammar, and style issues.",
      "Semantic search matching capabilities powered by Gemini and Qdrant."
    ]
  },
  {
    id: 'ship-klyft',
    title: "Klyft E-commerce Platform Launched",
    subtitle: "High-Performance Modern E-commerce (v1.0.0)",
    period: "October 2025",
    category: 'shipments',
    status: 'DEPLOYED',
    summary: "A high-performance modern e-commerce platform built with micro-frontends, server-side rendering, Stripe multi-currency processing, and automatic inventory synchronizations.",
    tech: ["React Router", "Node.js", "Stripe API", "PostgreSQL"],
    metrics: [
      { label: 'VERSION', value: 'v1.0.0' },
      { label: 'ORM', value: 'Prisma ORM' },
      { label: 'DEPLOYMENT', value: 'Fly.io + AWS' }
    ],
    details: [
      "Instantaneous server-side rendering for optimal SEO and sub-second load times.",
      "Flexible shopping cart state linked with LocalStorage and account synchronization.",
      "Secure multi-currency checkouts integrated via Stripe Elements.",
      "Real-time transactional notification emails sent upon order completion."
    ]
  },
  {
    id: 'ship-elysium',
    title: "Elysium Extension Published",
    subtitle: "Developer Chrome Extension (v1.0.0)",
    period: "August 2025",
    category: 'shipments',
    status: 'DEPLOYED',
    summary: "A lightweight developer browser extension that automatically captures successful GeeksforGeeks code submissions, structures files with descriptive readme info, and commits them instantly to a GitHub repository.",
    tech: ["JavaScript", "Chrome Extension", "GitHub API", "CSS Injection"],
    metrics: [
      { label: 'VERSION', value: 'v1.0.0' },
      { label: 'DB', value: 'Chrome Sync' },
      { label: 'API GATEWAY', value: 'GitHub REST API' }
    ],
    details: [
      "Automated submission hook detecting successful test pass events.",
      "Automatic markdown file builder creating structured repository directories.",
      "Direct repository commits via OAuth2 authorization token tokens.",
      "Interactive extensions drawer overlay showing sync states and history logs."
    ]
  },
  // ACADEMIC & CP
  {
    id: 'acad-cse',
    title: "B.Tech Computer Science Engineering",
    subtitle: "IIIT Bhopal (2024 - 2028)",
    period: "2024 - 2028",
    category: 'academic',
    status: 'ACTIVE',
    summary: "Pursuing B.Tech in Computer Science Engineering at IIIT Bhopal (Batch of 2024-2028). Focusing on DSA, DBMS, Operating Systems, and System Architectures.",
    tech: ["Core CS", "Data Structures", "Operating Systems", "DBMS", "Computer Networks"],
    metrics: [
      { label: 'COLLEGE', value: 'IIIT Bhopal' },
      { label: 'CGPA', value: '9.01 / 10.0' },
      { label: 'STATUS', value: 'Undergraduate' }
    ],
    details: [
      "Pursuing undergraduate program in Computer Science Engineering at IIIT Bhopal (Batch of 2024-2028) with a CGPA of 9.01.",
      "Acquired deep theoretical and practical understanding of CPU scheduler process threading and OSI networks.",
      "Studied relational models database management schemas, SQL indices, and transaction locks.",
      "Implemented custom search algorithms, graphs representations, and trees structures in C++."
    ]
  },
  {
    id: 'acad-12th',
    title: "12th Standard (Higher Secondary)",
    subtitle: "TGBIE Board",
    period: "2022 - 2024",
    category: 'academic',
    status: 'COMPLETED',
    summary: "Completed Higher Secondary education (Class XII) under the Telangana State Board of Intermediate Education (TGBIE) with a major focus on Physics, Chemistry, and Mathematics (MPC).",
    tech: ["Mathematics", "Physics", "Chemistry"],
    metrics: [
      { label: 'BOARD', value: 'TGBIE' },
      { label: 'PERCENTAGE', value: '98.2%' },
      { label: 'STATUS', value: 'Completed' }
    ],
    details: [
      "Completed Class XII board examinations with a score of 98.2% under TGBIE.",
      "Acquired solid fundamental skills in Calculus, Coordinate Geometry, Mechanics, Electromagnetism, and Chemistry.",
      "Demonstrated excellence in mathematical problem solving and science exhibition quizzes."
    ]
  },
  {
    id: 'acad-10th',
    title: "10th Standard (Secondary Education)",
    subtitle: "CBSE Board",
    period: "2020 - 2022",
    category: 'academic',
    status: 'COMPLETED',
    summary: "Completed Secondary School education (Class X) under the Central Board of Secondary Education (CBSE) with an exceptional academic record.",
    tech: ["General Science", "Mathematics", "Social Sciences", "English"],
    metrics: [
      { label: 'BOARD', value: 'CBSE' },
      { label: 'PERCENTAGE', value: '99%' },
      { label: 'STATUS', value: 'Completed' }
    ],
    details: [
      "Scored a cumulative 99% in CBSE Class X board examinations.",
      "Recognized with certificates of merit for scoring perfect grades in Mathematics and General Sciences.",
      "Established strong analytical foundations in mathematical reasoning and logic."
    ]
  },
  {
    id: 'acad-cp',
    title: "Algorithmic Contests & Coding Runs",
    subtitle: "Competitive Programming Milestones",
    period: "2024 - Present",
    category: 'academic',
    status: 'ACTIVE',
    summary: "Participating in global coding contests, solving complex puzzles, and mastering runtime complexity.",
    tech: ["C++ STL", "Algorithms", "Optimization", "Contest Runs"],
    metrics: [
      { label: 'LEETCODE', value: '600+ Solved' },
      { label: 'CODECHEF', value: '1500+ (2★)' },
      { label: 'GFG', value: '400+ Solved' }
    ],
    details: [
      "Solved 600+ problems on LeetCode focusing on dynamic programming and graph structures.",
      "Achieved a peak rating of 1500+ on CodeChef (2★) and solved 850+ challenges on the platform.",
      "Solved 400+ GeeksforGeeks problems mastering classic library structures implementations.",
      "Achieved strong rankings in weekly code contests and virtual algorithms runs."
    ]
  }
]

export default function Experience() {
  const [activeLogTab, setActiveLogTab] = useState<LogType>('open-source')
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone>(milestonesData[0])
  
  const clickSound = useRef(new Audio("/clicksound.mp3"))

  const playClick = () => {
    clickSound.current.currentTime = 0
    clickSound.current.play().catch(() => {})
  }

  // Set default selection when tab changes
  useEffect(() => {
    const defaultItem = milestonesData.find(m => m.category === activeLogTab)
    if (defaultItem) {
      setSelectedMilestone(defaultItem)
    }
  }, [activeLogTab])

  // Filtered milestones
  const filteredMilestones = milestonesData.filter(m => m.category === activeLogTab)

  const logTabs = [
    { id: 'open-source', label: 'Open Source Logs', icon: GitBranch },
    { id: 'shipments', label: 'Product Shipments', icon: Layers },
    { id: 'academic', label: 'Academic CSE / CP', icon: BookOpen }
  ]

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-28 pb-24 select-none">
      
      {/* Glow blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-neon-purple/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />

      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <span className="text-[11px] text-neon-cyan font-mono tracking-widest uppercase mb-3 block px-3 py-1 rounded-full border border-neon-cyan/15 bg-neon-cyan/5 inline-block">
          Mission Logs
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent mb-4">
          Experience Logs
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full mb-6" />
        <p className="text-slate-400 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
          Open-source contribution index, structural project deployment log milestones, and foundational academic coursework telemetry.
        </p>
      </motion.div>



      {/* Tab select dashboard switcher */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-2xl mx-auto">
        {logTabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeLogTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => { playClick(); setActiveLogTab(tab.id as LogType) }}
              className={`relative flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden cursor-pointer ${
                isActive
                  ? 'text-white border-neon-cyan shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                  : 'text-slate-400 hover:text-slate-200 border-white/5 hover:border-white/10 glass-panel'
              } border`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeExperienceTabBg"
                  className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className={`w-4 h-4 ${isActive ? 'text-neon-cyan' : 'text-slate-500'}`} />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Two-Column split dashboard: Timeline on left, sticky diagnostic console on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Timeline representation */}
        <div className="lg:col-span-7 relative border-l border-white/10 ml-4 md:ml-6 pl-6 md:pl-10 space-y-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLogTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {filteredMilestones.map((milestone) => {
                const isSelected = selectedMilestone.id === milestone.id
                return (
                  <div
                    key={milestone.id}
                    className="relative cursor-pointer group"
                    onClick={() => { playClick(); setSelectedMilestone(milestone) }}
                  >
                    {/* Glowing Timeline Connector dot */}
                    <div className={`absolute -left-[31px] md:-left-[47px] top-4 w-4 h-4 rounded-full bg-cyber-bg border-2 transition-all duration-300 ${
                      isSelected 
                        ? 'border-neon-cyan shadow-[0_0_10px_#06b6d4] scale-125' 
                        : 'border-white/20 group-hover:border-neon-purple/60'
                    }`} />

                    <div className={`p-6 rounded-2xl glass-panel transition-all duration-300 ${
                      isSelected 
                        ? 'border-neon-cyan/35 bg-white/[0.03] shadow-[0_0_20px_rgba(6,182,212,0.1)]' 
                        : 'border-white/5 hover:border-white/10 hover:bg-white/[0.01]'
                    }`}>
                      <span className="text-[10px] font-bold font-mono text-neon-purple tracking-widest uppercase mb-1.5 block">
                        {milestone.period}
                      </span>
                      <h3 className={`text-xl font-bold font-display transition-colors ${
                        isSelected ? 'text-neon-cyan' : 'text-white group-hover:text-neon-cyan'
                      }`}>
                        {milestone.title}
                      </h3>
                      <h4 className="text-xs text-slate-400 font-medium mb-3">
                        {milestone.subtitle}
                      </h4>
                      <p className="text-[12px] text-slate-400 leading-relaxed font-light mb-4">
                        {milestone.summary}
                      </p>

                      {/* Metrics highlights directly on the card */}
                      {milestone.metrics && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {milestone.metrics.map((metric) => (
                            <div key={metric.label} className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.02] border border-white/5 font-mono text-[10px]">
                              <span className="text-slate-500 uppercase text-[8.5px] tracking-wider">{metric.label}:</span>
                              <span className="text-neon-cyan font-bold">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {milestone.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400 group-hover:text-slate-300 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Diagnostic trigger pill */}
                      <div className="mt-4 flex justify-end">
                        <span className={`text-[9px] font-mono flex items-center gap-1 transition-colors ${
                          isSelected ? 'text-neon-cyan' : 'text-slate-500 group-hover:text-slate-300'
                        }`}>
                          Inspect Log <ChevronRight className={`w-3 h-3 transition-transform ${isSelected ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Sticky HUD Diagnostic Console */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMilestone.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-[#030208]/90 border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative"
            >
              {/* Decorative HUD corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-neon-cyan/40 pointer-events-none" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-neon-purple/40 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-neon-purple/40 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-neon-cyan/40 pointer-events-none" />

              {/* Console Header */}
              <div className="flex items-center justify-between px-5 py-4 bg-white/5 border-b border-white/5 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-pulse" />
                  <span className="font-semibold text-white tracking-wider">DK-HUD // MISSION LOG INSPECTOR</span>
                </div>
                <span className="text-[11px] uppercase font-bold text-neon-purple">{selectedMilestone.status}</span>
              </div>

              {/* Console Body Output */}
              <div className="p-6 font-mono text-[12px] md:text-[13px] leading-relaxed text-emerald-400 bg-black/75 space-y-5 select-text">
                
                {/* Meta details */}
                <div className="space-y-1.5 text-slate-300">
                  <p className="text-white font-bold">&gt; inspect_milestone --id={selectedMilestone.id}</p>
                  <p className="text-slate-500">Retrieving capability parameters...</p>
                  <p className="text-cyan-300 font-bold uppercase mt-2.5">[LOG TELEMETRY RECEIVED]</p>
                </div>

                {/* Metrics highlights */}
                {selectedMilestone.metrics && (
                  <div className="grid grid-cols-3 gap-3 bg-[#06030c] p-3.5 rounded border border-white/5">
                    {selectedMilestone.metrics.map((metric) => (
                      <div key={metric.label}>
                        <span className="text-slate-500 block text-[9.5px] uppercase tracking-wider">{metric.label}</span>
                        <span className="text-white font-bold block mt-1 text-[13px]">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Checklist Accomplishments */}
                <div className="space-y-3">
                  <span className="text-cyan-300 font-bold block">[MISSION ACCOMPLISHMENTS]</span>
                  <ul className="space-y-2.5">
                    {selectedMilestone.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-emerald-400/90 leading-relaxed text-[12px] md:text-[13px]">
                        <CheckCircle2 className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Profile connectors for Competitive Programming */}
                {selectedMilestone.id === 'acad-cp' && (
                  <div className="space-y-2.5 pt-2.5 border-t border-white/5 font-mono">
                    <span className="text-cyan-300 font-bold block uppercase text-[10px]">[PROFILE CONNECTORS]</span>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={import.meta.env.VITE_LEETCODE_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded bg-black border border-[#FFA116]/20 hover:border-[#FFA116] hover:shadow-[0_0_10px_rgba(255,161,22,0.2)] transition-all cursor-pointer flex items-center justify-center"
                      >
                        <img src={leetcodeLogo} alt="LeetCode" className="h-5.5 object-contain" />
                      </a>
                      <a
                        href={import.meta.env.VITE_CODECHEF_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded bg-white border border-[#5B4636]/35 hover:border-[#967d6c] hover:shadow-[0_0_10px_rgba(150,125,108,0.2)] transition-all cursor-pointer flex items-center justify-center"
                      >
                        <img src={codechefLogo} alt="CodeChef" className="h-5.5 object-contain" />
                      </a>
                      <a
                        href={import.meta.env.VITE_GEEKSFORGEEKS_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded bg-white border border-[#2F8D46]/20 hover:border-[#2F8D46] hover:shadow-[0_0_10px_rgba(47,141,70,0.2)] transition-all cursor-pointer flex items-center justify-center"
                      >
                        <img src={gfgLogo} alt="GeeksforGeeks" className="h-5.5 object-contain" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Core Objective Status */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>LOG INDEX STATUS // SYSTEM_OK</span>
                  <span className="flex items-center gap-1.5 text-neon-cyan font-bold">
                    <Target className="w-4 h-4" /> VERIFIED BLUEPRINT
                  </span>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  )
}
