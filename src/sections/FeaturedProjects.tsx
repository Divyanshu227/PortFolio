import { motion } from 'framer-motion'
import { ArrowUpRight, MessageSquare, Terminal, Eye, Code2 } from 'lucide-react'

interface Project {
  title: string
  description: string
  tags: { name: string; color: string }[]
  mockup: React.ReactNode
}

export default function FeaturedProjects() {
  const projects: Project[] = [
    {
      title: 'SecureTalk',
      description: 'Chat application with end-to-end encryption, real-time messaging, and AI-powered chatbots for enhanced user experience.',
      tags: [
        { name: 'React', color: 'border-blue-500/30 text-blue-400 bg-blue-500/5' },
        { name: 'TypeScript', color: 'border-purple-500/30 text-purple-400 bg-purple-500/5' },
        { name: 'Socket.io', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5' },
      ],
      mockup: (
        <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#08070e] overflow-hidden flex flex-col p-3 shadow-inner">
          {/* Mockup header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
              <MessageSquare className="w-2.5 h-2.5 text-neon-cyan" />
              securetalk-v1.0
            </span>
          </div>
          {/* Chat Bubble 1 (User) */}
          <div className="self-end max-w-[80%] rounded-lg bg-neon-purple/10 border border-neon-purple/20 px-2.5 py-1.5 mb-2">
            <p className="text-[10px] text-slate-300 leading-tight">Write a futuristic UI layout.</p>
          </div>
          {/* Chat Bubble 2 (AI Assistant) */}
          <div className="self-start max-w-[85%] rounded-lg bg-white/5 border border-white/10 px-2.5 py-1.5 flex items-start gap-2">
            {/* Glowing avatar */}
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex-shrink-0 flex items-center justify-center">
              <span className="text-[8px] font-bold text-black font-mono">AI</span>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[9px] text-slate-400 font-mono leading-tight">Sure, here is your cyberpunk template:</p>
              {/* Fake Code Block */}
              <div className="w-32 h-5 bg-black/60 rounded border border-white/5 flex items-center px-1">
                <span className="text-[7px] text-emerald-400 font-mono">{"const Cyber = () => <UI />;"}</span>
              </div>
            </div>
          </div>
          {/* Pulsating neon cyan indicator */}
          <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-neon-cyan/15 flex items-center justify-center">
            <div className="w-3.5 h-3.5 rounded-full bg-neon-cyan flex items-center justify-center animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'GymBase',
      description: 'A real-time fitness community platform where users can join workout rooms, share progress, and get live feedback from trainers.',
      tags: [
        { name: 'MERN Stack', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' },
        { name: 'SMTP', color: 'border-teal-500/30 text-teal-400 bg-teal-500/5' },
        { name: 'Stripe', color: 'border-purple-500/30 text-purple-400 bg-purple-500/5' },
      ],
      mockup: (
        <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#08070e] overflow-hidden flex flex-col p-3 shadow-inner">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="text-[9px] font-bold text-slate-300 font-display">GymBase</span>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
          </div>
          {/* User Profile Cards Grid */}
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-purple to-neon-blue flex items-center justify-center font-bold text-[10px] text-white">
                AJ
              </div>
              <span className="text-[9px] font-bold text-slate-200 mt-1">Alex Johnson</span>
              <span className="text-[7px] text-neon-cyan font-mono">Fitness Trainer</span>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center font-bold text-[10px] text-white">
                SM
              </div>
              <span className="text-[9px] font-bold text-slate-200 mt-1">Sarah Miller</span>
              <span className="text-[7px] text-neon-purple font-mono">DevOps Engineer</span>
            </div>
          </div>
          {/* Active stats bar */}
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center bg-black/40 rounded px-2 py-1 border border-white/5">
            <span className="text-[8px] text-slate-500 font-mono">1.2k Devs Active</span>
            <span className="text-[8px] text-neon-purple font-mono flex items-center gap-1">
              <Eye className="w-2.5 h-2.5" /> 24 Rooms
            </span>
          </div>
        </div>
      ),
    },
    {
      title: 'TrueAuth',
      description: 'A secure authentication solution for web applications with multi-factor authentication and session management.',
      tags: [
        { name: 'React', color: 'border-blue-500/30 text-blue-400 bg-blue-500/5' },
        { name: 'Firebase', color: 'border-purple-500/30 text-purple-400 bg-purple-500/5' },
        { name: 'Tailwind', color: 'border-teal-500/30 text-teal-400 bg-teal-500/5' },
      ],
      mockup: (
        <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#08070e] overflow-hidden flex flex-col p-3 shadow-inner">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
            <div className="flex items-center gap-1">
              <Terminal className="w-3 h-3 text-neon-purple" />
              <span className="text-[9px] font-mono text-slate-400">trueauth / auth / login.js</span>
            </div>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
              <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
            </div>
          </div>
          {/* Code block editor representation */}
          <div className="flex-1 bg-black/60 rounded p-2 border border-white/5 font-mono text-[8px] overflow-hidden flex gap-2">
            {/* Line numbers */}
            <div className="text-slate-600 flex flex-col text-right select-none">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
            {/* Snippet */}
            <div className="flex-1 flex flex-col text-slate-300">
              <p>
                <span className="text-pink-500">def</span> <span className="text-blue-400">login</span>
                <span className="text-slate-400">(username, password):</span>
              </p>
              <p className="pl-3">
                <span className="text-pink-500">if</span> validate_user(username, password):
              </p>
              <p className="pl-6">
                <span className="text-pink-500">return</span> create_session(username)
              </p>
              <p className="pl-3">
                <span className="text-pink-500">raise</span> InvalidCredentialsError()
              </p>
            </div>
          </div>
          {/* Action pills */}
          <div className="absolute bottom-2 right-2 flex gap-1.5">
            <div className="px-1.5 py-0.5 rounded bg-neon-purple/20 border border-neon-purple/40 text-[7px] font-mono text-purple-300 flex items-center gap-0.5">
              <Code2 className="w-2 h-2" /> Copied!
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 md:px-8 py-12 select-none">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-gradient-to-b from-neon-purple to-neon-blue rounded-full" />
          <h2 className="text-[14px] font-bold tracking-[0.25em] text-slate-400 uppercase font-display">
            Featured Projects
          </h2>
        </div>
        <a
          href="#projects-all"
          className="text-xs font-semibold text-slate-400 hover:text-neon-cyan flex items-center gap-1 transition-all duration-300 group"
        >
          <span>View all projects</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col h-full rounded-2xl glass-panel glass-panel-hover p-5 relative overflow-hidden"
          >
            {/* Soft decorative glow behind the card on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Left Block: Info Content */}
            <div className="flex-grow flex flex-col text-left mb-5">
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-neon-cyan transition-colors duration-300 mb-2">
                {project.title}
              </h3>
              
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-light mb-5">
                {project.description}
              </p>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${tag.color} tracking-wide uppercase`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Right/Bottom Block: Visual Interactive Mockup */}
            <div className="w-full relative rounded-xl overflow-hidden mt-2">
              {project.mockup}
            </div>

            {/* Absolute Interactive Corner Arrow Button */}
            <div className="absolute top-5 right-5">
              <div className="w-8 h-8 rounded-full border border-white/10 bg-white/2 flex items-center justify-center text-slate-400 group-hover:text-neon-cyan group-hover:border-neon-cyan/50 group-hover:bg-neon-cyan/5 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
