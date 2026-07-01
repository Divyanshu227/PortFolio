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
    title: "SecureTalk E2EE System Deployed",
    subtitle: "Independent Product Shipment (v1.0.0)",
    period: "March 2026",
    category: 'shipments',
    status: 'DEPLOYED',
    summary: "Built and shipped SecureTalk, a fully encrypted chat service using the WebCrypto API (SubtleCrypto) for end-to-end security.",
    tech: ["React.js", "Socket.io", "Node.js", "WebCrypto API"],
    metrics: [
      { label: 'VERSION', value: 'v1.0.0' },
      { label: 'E2EE STATUS', value: 'AES-GCM 256bit' },
      { label: 'DEPLOYMENT', value: 'Render + Vercel' }
    ],
    details: [
      "Architected SubtleCrypto E2EE encryption pipelines, generating client-side session keys.",
      "Shipped real-time bi-directional message streaming channels using Socket.io rooms.",
      "Integrated Gemini LLM automation helper agents directly into chat channels.",
      "Deployed frontend client to Vercel and backend microservice to Render container systems."
    ]
  },
  {
    id: 'ship-devintel',
    title: "DevIntel AI & RAG Engine Launched",
    subtitle: "AI Systems Deployed (v1.0.4)",
    period: "November 2025",
    category: 'shipments',
    status: 'DEPLOYED',
    summary: "Launched DevIntel AI, an automated codebase RAG assistant that indexes directories and queries vector databases.",
    tech: ["Next.js", "FastAPI", "Pinecone", "LangChain"],
    metrics: [
      { label: 'VERSION', value: 'v1.0.4' },
      { label: 'INDEX CAPACITY', value: '248 AST Nodes' },
      { label: 'DB VECTOR', value: 'Pinecone Database' }
    ],
    details: [
      "Designed directory tree walking parsing scripts, compiling abstract syntax templates.",
      "Linked Pinecone vector indices to store high-dimensional embeddings mapped from source modules.",
      "Constructed RAG semantic search querying structures with OpenAI embeddings.",
      "Shipped a visual code checklist overlay using Framer Motion spring modules."
    ]
  },
  {
    id: 'ship-hypergraph',
    title: "HyperGraph Engine Gateway Merged",
    subtitle: "Data API Systems Deployed (v0.8.2-beta)",
    period: "August 2025",
    category: 'shipments',
    status: 'DEPLOYED',
    summary: "Deployed HyperGraph, a GraphQL gateway layer managing cache lookups under sub-millisecond ranges using Redis.",
    tech: ["GraphQL", "Redis Cache", "PostgreSQL", "Docker"],
    metrics: [
      { label: 'VERSION', value: 'v0.8.2-beta' },
      { label: 'LATENCY', value: '0.4ms avg response' },
      { label: 'CACHE HIT', value: '94.2%' }
    ],
    details: [
      "Engineered Apollo Server schema definitions merging postgres relational tables.",
      "Implemented Redis key-value caches middleware, achieving 0.4ms average response rates.",
      "Optimized batch loaders queries, reducing database connection pools load under heavy stress tests.",
      "Containerized microservice gateway utilizing multi-stage Docker build files."
    ]
  },
  // ACADEMIC & CP
  {
    id: 'acad-cse',
    title: "B.Tech Computer Science Engineering",
    subtitle: "Academic Coursework & Foundation",
    period: "2023 - Present",
    category: 'academic',
    status: 'ACTIVE',
    summary: "Pursuing a Bachelor of Technology in CSE, focusing on DSA, Operating Systems, DBMS, and Networks.",
    tech: ["Core CS", "Data Structures", "Operating Systems", "DBMS", "Computer Networks"],
    metrics: [
      { label: 'CSE STATUS', value: 'Undergraduate' },
      { label: 'CORE DEPT', value: 'Computer Science' },
      { label: 'FOCUS', value: 'Systems / Systems Design' }
    ],
    details: [
      "Maintaining strong academic scores across core engineering subjects.",
      "Acquired deep theoretical and practical understanding of CPU scheduler process threading and OSI networks.",
      "Studied relational models database management schemas, SQL indices, and transaction locks.",
      "Implemented custom search algorithms, graphs representations, and trees structures in C++."
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
      { label: 'CODECHEF', value: '850+ Solved' },
      { label: 'GFG', value: '400+ Solved' }
    ],
    details: [
      "Solved 600+ problems on LeetCode focusing on dynamic programming and graph structures.",
      "Solved 850+ challenges on CodeChef, demonstrating rapid logic decomposition under constraint environments.",
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
              <div className="flex items-center justify-between px-5 py-3.5 bg-white/5 border-b border-white/5 font-mono text-[10px] text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                  <span className="font-semibold text-white tracking-wider">DK-HUD // MISSION LOG INSPECTOR</span>
                </div>
                <span className="text-[9px] uppercase font-bold text-neon-purple">{selectedMilestone.status}</span>
              </div>

              {/* Console Body Output */}
              <div className="p-5 font-mono text-[10px] leading-relaxed text-emerald-400 bg-black/75 space-y-4 select-text">
                
                {/* Meta details */}
                <div className="space-y-1 text-slate-300">
                  <p className="text-white font-bold">&gt; inspect_milestone --id={selectedMilestone.id}</p>
                  <p className="text-slate-500">Retrieving capability parameters...</p>
                  <p className="text-cyan-300 font-bold uppercase mt-2">[LOG TELEMETRY RECEIVED]</p>
                </div>

                {/* Metrics highlights */}
                {selectedMilestone.metrics && (
                  <div className="grid grid-cols-3 gap-2 bg-[#06030c] p-2.5 rounded border border-white/5 text-[9px]">
                    {selectedMilestone.metrics.map((metric) => (
                      <div key={metric.label}>
                        <span className="text-slate-500 block text-[8px] uppercase">{metric.label}</span>
                        <span className="text-white font-semibold block mt-0.5">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Checklist Accomplishments */}
                <div className="space-y-2">
                  <span className="text-cyan-300 font-bold block">[MISSION ACCOMPLISHMENTS]</span>
                  <ul className="space-y-2">
                    {selectedMilestone.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2 text-emerald-400/90 leading-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Objective Status */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] text-slate-400">
                  <span>LOG INDEX STATUS // SYSTEM_OK</span>
                  <span className="flex items-center gap-1.5 text-neon-cyan font-bold">
                    <Target className="w-3 h-3" /> VERIFIED BLUEPRINT
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
