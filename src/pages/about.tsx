import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Code2, Cpu, Database, GitBranch, Globe, Sparkles, Terminal, Wrench, Layers } from 'lucide-react'
import developerImg from '../assets/developer.jpg'

type TabType = 'toolkit' | 'problemSolving' | 'vision'

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>('toolkit')

  const tabs = [
    { id: 'toolkit', label: 'Technical Toolkit', icon: Layers },
    { id: 'problemSolving', label: 'Problem Solving', icon: Brain },
    { id: 'vision', label: 'Vision & Philosophy', icon: Sparkles }
  ]

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-28 pb-24 select-none">
      
      {/* Background glowing ambient blobs for the page */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-neon-cyan/5 blur-[150px] pointer-events-none" />

      {/* About Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-[11px] text-neon-cyan font-mono tracking-widest uppercase mb-3 block px-3 py-1 rounded-full border border-neon-cyan/15 bg-neon-cyan/5 inline-block">
          Profile Identity
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent mb-4">
          About Me
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
      </motion.div>

      {/* Grid Section: Bio and Profile Hologram Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        
        {/* Left: Bio Info */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="relative p-8 rounded-3xl glass-panel border border-white/5 overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-neon-purple to-neon-cyan" />
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-neon-purple font-mono">01.</span> REDEFINING WEB ENGINEERING
            </h2>
            <div className="space-y-4 text-slate-300 text-base leading-relaxed font-light">
              <p>
                Hi, I'm <span className="text-white font-medium">Divyanshu</span> — a passionate Full Stack Developer, Competitive Programmer, and AI enthusiast currently pursuing my Bachelor's degree in Computer Science Engineering. I specialize in merging complex backend logic with beautiful, immersive frontend designs.
              </p>
              <p>
                My engineering philosophy is simple: write code that is clean, modular, and highly optimized, while delivering a visual experience that is smooth and responsive. I believe visual aesthetics and software performance are not trade-offs; they must coexist to build exceptional digital experiences.
              </p>
              <p>
                I enjoy building systems from scratch — from planning and architecture to database optimization, server setup, custom APIs, browser integrations, and modern UI design. Constantly learning and exploring, I enjoy leveraging AI tools and automation to optimize workflows and boost user productivity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Holographic ID Card */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group w-full max-w-[380px] p-6 rounded-3xl glass-panel border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.1)] hover:shadow-[0_0_50px_rgba(6,182,212,0.15)] transition-all duration-500 overflow-hidden">
            
            {/* Visual corner accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-cyan/35 rounded-tr-xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-purple/35 rounded-bl-xl pointer-events-none" />

            {/* Glowing holographic light effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/5 via-transparent to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Profile Picture Frame */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-[#000] border border-white/5 flex items-center justify-center">
              <img
                src={developerImg}
                alt="Divyanshu - Portrait"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Availability tag overlay */}
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-emerald-500/20 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  Online & Active
                </span>
              </div>
            </div>

            {/* ID Details */}
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-[11px] text-slate-500 font-mono uppercase tracking-wider">IDENTITY</span>
                <span className="text-sm font-bold text-white font-display">DIVYANSHU</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-[11px] text-slate-500 font-mono uppercase tracking-wider">SPECIALTY</span>
                <span className="text-xs font-semibold text-neon-cyan font-mono">Full-Stack / AI / CP</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-[11px] text-slate-500 font-mono uppercase tracking-wider">EDUCATION</span>
                <span className="text-[11px] font-semibold text-slate-300 text-right">B.Tech CSE Student</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-slate-500 font-mono uppercase tracking-wider">LOCATION</span>
                <span className="text-xs font-medium text-slate-400">India (GMT+5:30)</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Tab Selectors */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-2xl mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`relative flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden cursor-pointer ${
                isActive
                  ? 'text-white border-neon-cyan shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                  : 'text-slate-400 hover:text-slate-200 border-white/5 hover:border-white/10 glass-panel'
              } border`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className={`w-4 h-4 ${isActive ? 'text-neon-cyan' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Tabs Content */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === 'toolkit' && (
            <motion.div
              key="toolkit"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              {/* Frontend Card */}
              <div className="p-6 rounded-2xl glass-panel border border-white/5 hover:border-neon-cyan/30 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-neon-cyan/10 text-neon-cyan">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Frontend Visuals</h3>
                    <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">UX & Graphics</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Crafting gorgeous, responsive, and performance-optimized user interfaces with modern reactive logic.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5/CSS3'].map((item) => (
                    <span key={item} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Card */}
              <div className="p-6 rounded-2xl glass-panel border border-white/5 hover:border-neon-purple/30 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-neon-purple/10 text-neon-purple">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Backend Architectures</h3>
                    <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">APIs & Operations</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Developing optimized servers, custom RESTful endpoints, secure authentications, and automated pipelines.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'JSON Schema', 'OOP Design'].map((item) => (
                    <span key={item} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database Card */}
              <div className="p-6 rounded-2xl glass-panel border border-white/5 hover:border-neon-blue/30 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-neon-blue/10 text-neon-blue">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Data & Databases</h3>
                    <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Storage & Analytics</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Managing relational and document database systems, optimizing query speeds, and structuring complex schemas.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'MongoDB', 'SQL', 'Schema Design', 'Query Tuning', 'JSON Storage'].map((item) => (
                    <span key={item} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dev Tools Card */}
              <div className="p-6 rounded-2xl glass-panel border border-white/5 hover:border-white/20 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white/5 text-slate-300">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Tools & DevOps</h3>
                    <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Environments</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Using version control workflows, command lines, API design suites, and modern compiler systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Git & GitHub', 'VS Code', 'Postman', 'Bash / Linux', 'NPM / PNPM', 'Vite / TSConfig'].map((item) => (
                    <span key={item} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'problemSolving' && (
            <motion.div
              key="problemSolving"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-center"
            >
              {/* Left Column: Stats & Explanation */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 rounded-2xl glass-panel border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-3 font-display flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-neon-cyan" /> Competitive Programming Mindset
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                    Strengthening my analytical logic through hours of problem-solving has shaped how I write software. Solving hundreds of problems across platforms has built a subconscious discipline for algorithmic complexity.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_6px_#06b6d4]" />
                      <span>Advanced understanding of complex Data Structures & Algorithms.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_6px_#06b6d4]" />
                      <span>Ability to analyze and optimize code space/time complexity (O(N) mindset).</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_6px_#06b6d4]" />
                      <span>Critical thinking and problem decomposition under time constraints.</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {/* LeetCode */}
                  <div className="p-4 rounded-xl glass-panel border border-white/5 text-center">
                    <span className="text-xs text-slate-400 block font-mono mb-1">LEETCODE</span>
                    <span className="text-2xl font-bold text-white font-display">Solved</span>
                    <span className="text-[10px] text-neon-cyan font-mono block mt-1">Hundreds</span>
                  </div>
                  {/* CodeChef */}
                  <div className="p-4 rounded-xl glass-panel border border-white/5 text-center">
                    <span className="text-xs text-slate-400 block font-mono mb-1">CODECHEF</span>
                    <span className="text-2xl font-bold text-white font-display">Algorithmic</span>
                    <span className="text-[10px] text-neon-purple font-mono block mt-1">Strengthened</span>
                  </div>
                  {/* GFG */}
                  <div className="p-4 rounded-xl glass-panel border border-white/5 text-center">
                    <span className="text-xs text-slate-400 block font-mono mb-1">GEEKSFORGEEKS</span>
                    <span className="text-2xl font-bold text-white font-display">Structures</span>
                    <span className="text-[10px] text-neon-blue font-mono block mt-1">Mastered</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Code Editor Mockup */}
              <div className="lg:col-span-5">
                <div className="w-full rounded-2xl bg-[#030208] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.7)] overflow-hidden">
                  {/* Editor Top Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5 font-mono text-[11px] text-slate-500">
                    <div className="flex gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span>Solution.ts — TypeScript</span>
                  </div>
                  {/* Code lines */}
                  <pre className="p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto text-left">
                    <code>
<span className="text-purple-400">interface</span> <span className="text-blue-300">Solution</span> {'{'}
  <span className="text-slate-400">complexity</span>: <span className="text-amber-300">string</span>;
  <span className="text-slate-400">optimize</span>: () =&gt; <span className="text-emerald-400">void</span>;
{'}'}

<span className="text-purple-400">const</span> <span className="text-blue-300">solveProblem</span> = (input) =&gt; {'{'}
  <span className="text-slate-500">// O(N log N) Time Complexity</span>
  <span className="text-purple-400">return</span> input
    .<span className="text-cyan-300">decompose</span>()
    .<span className="text-cyan-300">filter</span>(validate)
    .<span className="text-cyan-300">map</span>(optimize);
{'}'};
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'vision' && (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {/* Open Source */}
              <div className="p-6 rounded-2xl glass-panel border border-white/5 hover:border-neon-cyan/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-neon-cyan/10 text-neon-cyan w-fit mb-4">
                    <GitBranch className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">Open-Source & Git</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    Contributing to community codebases taught me collaborative workflows, commit etiquette, modular structures, and review patterns. Git and GitHub are central to my day-to-day work.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-slate-500 tracking-wider uppercase mt-4">
                  Collab & Review
                </div>
              </div>

              {/* Consistency & Discipline */}
              <div className="p-6 rounded-2xl glass-panel border border-white/5 hover:border-neon-purple/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-neon-purple/10 text-neon-purple w-fit mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">Growth & Adaptation</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    Consistent daily practice, constant code experiments, and a deep curiosity drive my growth. Adapting alongside the software industry keeps my mindset sharp and my toolset modern.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-slate-500 tracking-wider uppercase mt-4">
                  Evolving Daily
                </div>
              </div>

              {/* Long term goal */}
              <div className="p-6 rounded-2xl glass-panel border border-white/5 hover:border-neon-blue/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-neon-blue/10 text-neon-blue w-fit mb-4">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">Intelligent SaaS Vision</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    My ultimate engineering vision is to combine scalable distributed systems, databases, and AI agent frameworks to build software products that create massive value for millions of users.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-slate-500 tracking-wider uppercase mt-4">
                  Future-focused
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  )
}