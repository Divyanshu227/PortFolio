import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowUpRight, 
  Search, 
  Layers, 
  ShieldAlert, 
  Cpu, 
  Globe, 
  ExternalLink, 
  X,
  CheckCircle2,
  Database,
  Cpu as CpuIcon,
  Sparkles
} from 'lucide-react'

// Define project interface
interface Project {
  title: string
  category: 'web-apps' | 'security' | 'systems-ai'
  description: string
  tags: { name: string; color: string }[]
  features: string[]
  specs: {
    database: string
    host: string
    security: string
    gateway: string
  }
  mockup: React.ReactNode
  videoUrl?: string
  githubUrl?: string
}

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState<'all' | 'web-apps' | 'security' | 'systems-ai'>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Full projects dataset
  const projectsList: Project[] = [
    {
      title: 'Noctis',
      category: 'web-apps',
      githubUrl: import.meta.env.VITE_GITHUB_URL_NOCTIS || '#',
      description: 'A chilling, immersive horror story platform where users can read spine-tingling tales, listen to eerie narrations, and submit their own stories.',
      tags: [
        { name: 'React', color: 'border-rose-500/30 text-rose-500 bg-rose-500/5' },
        { name: 'Tailwind CSS', color: 'border-stone-500/30 text-stone-400 bg-stone-500/5' },
        { name: 'Audio API', color: 'border-purple-500/30 text-purple-400 bg-purple-500/5' }
      ],
      features: [
        'Immersive UI with a dark, spooky aesthetic and haunting visuals.',
        'Audio narration integration to listen to stories dynamically.',
        'Community publishing platform for writers to submit their own tales.'
      ],
      specs: {
        database: 'MongoDB',
        host: 'Vercel',
        security: 'Session Auth',
        gateway: 'Next.js API'
      },
      mockup: (
        <div className="relative w-full h-44 rounded-xl border border-rose-900/30 bg-[#050505] overflow-hidden flex flex-col p-3 shadow-[inset_0_0_20px_rgba(159,18,57,0.15)]">
          <div className="flex items-center justify-between border-b border-rose-900/20 pb-2 mb-2 font-display text-[9px] uppercase tracking-wider text-rose-600 font-bold">
            <span>NIGHT WHISPERS</span>
            <span className="text-rose-500 animate-pulse text-[7px]">● LIVE</span>
          </div>
          <div className="flex-grow flex flex-col items-center justify-center p-2 rounded bg-black/40 border border-white/5 relative overflow-hidden">
            {/* Fake Moon Graphic */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800/20 via-transparent to-transparent pointer-events-none"></div>
            <div className="z-10 text-center">
              <span className="text-white text-[11px] font-bold tracking-widest block mb-1 uppercase text-rose-50 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">SOME STORIES</span>
              <span className="text-rose-600 text-[14px] font-extrabold tracking-widest block uppercase drop-shadow-[0_0_8px_rgba(225,29,72,0.8)]">REFUSE TO DIE</span>
            </div>
            {/* Fake Stats */}
            <div className="w-full flex justify-between px-2 mt-3 z-10 text-center font-mono text-[7px]">
              <div><span className="text-rose-500 block font-bold text-[9px]">250+</span><span className="text-stone-400">STORIES</span></div>
              <div><span className="text-rose-500 block font-bold text-[9px]">10K+</span><span className="text-stone-400">LISTENERS</span></div>
              <div><span className="text-rose-500 block font-bold text-[9px]">500+</span><span className="text-stone-400">WRITERS</span></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Strata',
      category: 'web-apps',
      githubUrl: import.meta.env.VITE_GITHUB_URL_STRATA,
      description: 'An intelligent, multi-channel message routing and notification platform that routes incoming messages directly to Discord, Telegram, and Email with built-in AI Spam Detection.',
      tags: [
        { name: 'Next.js', color: 'border-blue-500/30 text-blue-400 bg-blue-500/5' },
        { name: 'Kafka', color: 'border-purple-500/30 text-purple-400 bg-purple-500/5' },
        { name: 'PostgreSQL', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5' },
        { name: 'Redis', color: 'border-rose-500/30 text-rose-400 bg-rose-500/5' }
      ],
      features: [
        'Centralized Inbox Dashboard for viewing and replying to messages.',
        'Multi-Workspace Support for managing different platforms.',
        'Flexible Notification Routing to Discord, Telegram, and Email.',
        'TrustGate AI Integration for spam and phishing detection.'
      ],
      specs: {
        database: 'PostgreSQL (Supabase)',
        host: 'Vercel / Enterprise',
        security: 'TrustGate AI Scanning',
        gateway: 'Next.js API Routes'
      },
      mockup: (
        <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#08070e] overflow-hidden flex flex-col p-3 shadow-inner">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2 font-mono text-[8px]">
            <span className="text-slate-400">strata // inbox_router</span>
            <span className="text-neon-cyan font-semibold">● ACTIVE</span>
          </div>
          <div className="flex-grow bg-black/60 rounded p-2 border border-white/5 space-y-1 font-mono text-[7.5px]">
            <p className="text-white font-bold">&gt; Incoming message detected</p>
            <p className="text-slate-500">Routing to Discord Webhook...</p>
            <p className="text-emerald-400">TrustGate Score: 98% Safe</p>
            <p className="text-neon-purple font-semibold">SUCCESS: Delivered to 3 channels</p>
          </div>
        </div>
      )
    },
    {
      title: 'Mentra AI',
      category: 'systems-ai',
      githubUrl: import.meta.env.VITE_GITHUB_URL_MENTRA,
      description: 'An intelligent, AI-powered quiz generation platform allowing users to automatically create dynamic quizzes from simple text prompts or by uploading PDF/image documents.',
      tags: [
        { name: 'Next.js', color: 'border-blue-500/30 text-blue-400 bg-blue-500/5' },
        { name: 'Express', color: 'border-purple-500/30 text-purple-400 bg-purple-500/5' },
        { name: 'Gemini API', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5' },
        { name: 'Zustand', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' }
      ],
      features: [
        'AI Quiz Generation complete with multiple-choice options and explanations.',
        'Multi-Modal Input accepting simple text prompts or file uploads.',
        'Modern User Interface with interactive Framer Motion animations.',
        'Robust Backend built with Express.js, TypeScript, and Prisma ORM.'
      ],
      specs: {
        database: 'PostgreSQL Database',
        host: 'Vercel & Render',
        security: 'Session Authentication',
        gateway: 'Express API Server'
      },
      mockup: (
        <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#08070e] overflow-hidden flex flex-col p-3 shadow-inner">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2 font-mono text-[8px]">
            <span className="text-slate-400">mentra-ai // generator</span>
            <span className="text-neon-cyan animate-pulse">● GENERATING</span>
          </div>
          <div className="flex-grow flex items-center justify-center p-2 rounded bg-white/5 border border-white/10">
            <div className="flex flex-col items-center gap-2">
               <Sparkles className="w-6 h-6 text-neon-purple animate-pulse" />
               <span className="text-[10px] text-white font-bold font-display">Generating Quiz...</span>
               <span className="text-[7.5px] text-slate-500 font-mono">Parsing document context (Gemini)</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'TrustGate',
      category: 'security',
      githubUrl: import.meta.env.VITE_GITHUB_URL_TRUSTGATE,
      description: 'An AI-powered gateway for real-time threat detection, protecting platforms against spam, phishing, and toxic content using NLP and advanced heuristics.',
      tags: [
        { name: 'Next.js', color: 'border-blue-500/30 text-blue-400 bg-blue-500/5' },
        { name: 'Machine Learning', color: 'border-purple-500/30 text-purple-400 bg-purple-500/5' },
        { name: 'NLP', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5' },
        { name: 'Docker', color: 'border-rose-500/30 text-rose-400 bg-rose-500/5' }
      ],
      features: [
        'AI-Powered Threat Detection using Naive Bayes NLP classification.',
        'Advanced Heuristics scanning for high-risk links and suspicious typography.',
        'Real-Time Analysis API for analyzing messages on the fly.',
        'Infrastructure Ready with docker-compose for PostgreSQL and Redis.'
      ],
      specs: {
        database: 'PostgreSQL & Redis',
        host: 'Docker Containers',
        security: 'ML Classifier / Heuristics',
        gateway: 'Next.js API Routes'
      },
      mockup: (
        <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#08070e] overflow-hidden flex flex-col p-3 shadow-inner">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2 font-mono text-[8px]">
            <span className="text-slate-400">trustgate // engine</span>
            <span className="text-emerald-400 font-bold">SECURE</span>
          </div>
          <div className="flex-grow flex flex-col gap-2 font-mono text-[7.5px]">
            <div className="bg-black/60 p-2 rounded border border-white/5 text-slate-300">
               <span className="text-pink-500 font-bold">POST</span> /api/v1/analyze
               <p className="mt-1">"Claim your free prize now! http://..."</p>
            </div>
            <div className="bg-rose-500/10 p-2 rounded border border-rose-500/20 text-rose-400 text-right">
               <p className="font-bold">CLASSIFICATION: SPAM (99%)</p>
               <p className="text-[6px] mt-0.5">Flags: Suspicious URL, Urgency Heuristics</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'SecureTalk',
      category: 'security',
      githubUrl: import.meta.env.VITE_GITHUB_URL_SECURETALK,
      description: 'A modern, feature-rich full-stack chat application enabling real-time messaging, conversation management, and secure JWT/bcrypt authentication with full message edit and delete support.',
      tags: [
        { name: 'React (TS)', color: 'border-blue-500/30 text-blue-400 bg-blue-500/5' },
        { name: 'Node.js', color: 'border-purple-500/30 text-purple-400 bg-purple-500/5' },
        { name: 'PostgreSQL', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5' },
        { name: 'JWT Auth', color: 'border-rose-500/30 text-rose-400 bg-rose-500/5' }
      ],
      features: [
        'Secure user registration and login session management via JWT and bcrypt.',
        'Interactive conversations list sidebar with duplicate creation checks.',
        'Full message lifecycle operations (Send, Edit, Delete) with edit status indicator.',
        'Responsive viewport layout (Mobile, Tablet, Desktop) optimized using dark themes.'
      ],
      specs: {
        database: 'PostgreSQL Database',
        host: 'Railway (API) / Vercel (Web)',
        security: 'Bcrypt Hash / JWT Expire Token',
        gateway: 'Express API Server Router'
      },
      mockup: (
        <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#08070e] overflow-hidden flex flex-col p-3 shadow-inner">
          {/* Mockup header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
              <span className="text-[9px] font-bold text-slate-300 font-display">SecureTalk // Client Portal</span>
            </div>
            <span className="text-[8px] text-slate-500 font-mono">user: active</span>
          </div>
          {/* Chat Bubble 1 (User 1) */}
          <div className="self-end max-w-[80%] rounded-lg bg-neon-purple/10 border border-neon-purple/20 px-2.5 py-1 mb-1.5 text-right">
            <p className="text-[9px] text-slate-300 leading-tight">Did you test the new message edit features?</p>
            <span className="text-[6.5px] text-slate-500 block mt-0.5">10:42 AM</span>
          </div>
          {/* Chat Bubble 2 (User 2) */}
          <div className="self-start max-w-[80%] rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 flex flex-col">
            <p className="text-[9px] text-slate-300 leading-tight">Yes! Edited and deleted messages update instantly in the database.</p>
            <div className="flex items-center justify-between mt-1 text-[6.5px] text-slate-500">
              <span>10:43 AM</span>
              <span className="text-neon-cyan italic">Edited</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'GymBase',
      category: 'web-apps',
      githubUrl: import.meta.env.VITE_GITHUB_URL_GYMBASE,
      description: 'Interactive workout community platform featuring live rooms creation, trainer dashboards, membership subscription payments via Stripe, and transactional mail pipelines.',
      tags: [
        { name: 'MERN Stack', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' },
        { name: 'Stripe API', color: 'border-purple-500/30 text-purple-400 bg-purple-500/5' },
        { name: 'SMTP Mail', color: 'border-teal-500/30 text-teal-400 bg-teal-500/5' }
      ],
      features: [
        'Secure checkout pipelines and subscription webhooks linked to Stripe API.',
        'Trainer portal tracking user logs, training stats, and schedule calendars.',
        'Automated welcome and validation notifications using Nodemailer SMTP.',
        'Role-based database schema access routing (Trainer/User).'
      ],
      specs: {
        database: 'MongoDB (Mongoose ODM)',
        host: 'AWS EC2 + Vercel Deployment',
        security: 'JWT authentication / Bcrypt hashes',
        gateway: 'Express API Server'
      },
      mockup: (
        <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#08070e] overflow-hidden flex flex-col p-3 shadow-inner">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
              <span className="text-[9px] font-bold text-slate-300 font-display">GymBase Dashboard</span>
            </div>
            <span className="text-[8px] text-slate-500 font-mono">v1.2</span>
          </div>
          {/* Profiles grid mockup */}
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-neon-purple to-neon-blue flex items-center justify-center font-bold text-[8px] text-white">
                AJ
              </div>
              <span className="text-[8px] font-bold text-slate-200 mt-1">Alex Trainer</span>
              <span className="text-[6.5px] text-neon-cyan font-mono">Expert Coach</span>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center font-bold text-[8px] text-white">
                SM
              </div>
              <span className="text-[8px] font-bold text-slate-200 mt-1">Sarah Client</span>
              <span className="text-[6.5px] text-neon-purple font-mono">Active user</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'TrueAuth',
      category: 'security',
      githubUrl: import.meta.env.VITE_GITHUB_URL_TRUEAUTH,
      description: 'A comprehensive client-side secure login gateway displaying multi-factor authentication, timed OTP validation codes, and session expiration audits.',
      tags: [
        { name: 'React', color: 'border-blue-500/30 text-blue-400 bg-blue-500/5' },
        { name: 'Firebase', color: 'border-purple-500/30 text-purple-400 bg-purple-500/5' },
        { name: 'Tailwind CSS', color: 'border-teal-500/30 text-teal-400 bg-teal-500/5' }
      ],
      features: [
        'Multi-factor authentication check flows linked to Firebase auth modules.',
        'Temporary token generation (OTP validation keys) for session recoveries.',
        'Automatic activity tracking with local timeout logging system overrides.',
        'Styled responsive auth components with micro-animations state.'
      ],
      specs: {
        database: 'Cloud Firestore',
        host: 'Firebase Hosting Node',
        security: 'MFA Code Check / Expire Hook',
        gateway: 'Serverless Functions'
      },
      mockup: (
        <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#08070e] overflow-hidden flex flex-col p-3 shadow-inner">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2 font-mono text-[8px]">
            <span className="text-slate-400">auth_gate.py — 256bit Enc</span>
            <span className="text-neon-purple font-semibold">SECURE</span>
          </div>
          {/* Code code editor layout */}
          <div className="flex-grow bg-black/60 rounded p-2 border border-white/5 font-mono text-[7.5px] overflow-hidden flex gap-1.5">
            <div className="text-slate-600 flex flex-col text-right select-none w-3">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <div className="flex-1 flex flex-col text-slate-300">
              <p><span className="text-pink-500">def</span> <span className="text-cyan-400">verify_mfa</span>(otp_code):</p>
              <p className="pl-3"><span className="text-pink-500">if</span> token.equals(otp_code):</p>
              <p className="pl-6"><span className="text-emerald-400">return</span> ACCESS_GRANTED</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Elysium',
      category: 'web-apps',
      githubUrl: import.meta.env.VITE_GITHUB_URL_ELYSIUM,
      description: 'A lightweight developer browser extension that automatically captures successful GeeksforGeeks code submissions, structures files with descriptive readme info, and commits them instantly to a GitHub repository.',
      videoUrl: 'https://res.cloudinary.com/cxvvisl8/video/upload/f_auto,q_auto/v1782907780/elysiumintro_yaiirg.mp4',
      tags: [
        { name: 'JavaScript', color: 'border-yellow-500/30 text-yellow-400 bg-yellow-500/5' },
        { name: 'Chrome Extension', color: 'border-blue-500/30 text-blue-400 bg-blue-500/5' },
        { name: 'GitHub API', color: 'border-purple-500/30 text-purple-400 bg-purple-500/5' },
        { name: 'CSS Injection', color: 'border-pink-500/30 text-pink-400 bg-pink-500/5' }
      ],
      features: [
        'Automated submission hook detecting successful test pass events.',
        'Automatic markdown file builder creating structured repository directories.',
        'Direct repository commits via OAuth2 authorization token tokens.',
        'Interactive extensions drawer overlay showing sync states and history logs.'
      ],
      specs: {
        database: 'Chrome Sync Storage',
        host: 'GitHub API Services',
        security: 'OAuth2 Client Tokens',
        gateway: 'GitHub REST API Gateway'
      },
      mockup: (
        <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#08070e] overflow-hidden flex flex-col p-3 shadow-inner">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2 font-mono text-[8px]">
            <span className="text-slate-400">elysium-extension // background_worker</span>
            <span className="text-neon-cyan animate-pulse">● SYNCING</span>
          </div>
          <div className="flex-grow flex flex-col justify-between font-mono text-[7.5px]">
            <div className="bg-black/60 rounded p-2 border border-white/5 space-y-1">
              <p className="text-white font-bold">&gt; Hooked submission ID: 948271</p>
              <p className="text-slate-500">Problem: "Reverse a Linked List"</p>
              <p className="text-emerald-400">Parsed Solution.cpp. Serializing...</p>
              <p className="text-neon-purple font-semibold">SUCCESS: Pushed commit to GitHub</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  // Filters based on activeCategory Tab and search query
  const filteredProjects = projectsList.filter((project) => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Categories definitions
  const filterCategories = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'web-apps', label: 'Web Applications', icon: Globe },
    { id: 'security', label: 'Security & Auth', icon: ShieldAlert },
    { id: 'systems-ai', label: 'Systems & AI', icon: Cpu }
  ]

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-28 pb-24 select-none">
      
      {/* Ambient glowing blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-neon-purple/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />

      {/* Header text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <span className="text-[11px] text-neon-cyan font-mono tracking-widest uppercase mb-3 block px-3 py-1 rounded-full border border-neon-cyan/15 bg-neon-cyan/5 inline-block">
          Build Blueprint
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent mb-4">
          Software Architecture
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full mb-6" />
        <p className="text-slate-400 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed font-sans">
          A catalogue of custom backend gateways, secure authentication microservices, responsive web clients, and vector database indexing engines. Click any block arrow to inspect technical blueprints.
        </p>
      </motion.div>

      {/* Filters Hub: Search & Category tabs */}
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12 w-full">
        {/* Search */}
        <div className="relative w-full lg:max-w-xs group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-neon-cyan transition-colors" />
          <input
            type="text"
            placeholder="Search projects or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-black/40 border border-white/5 font-sans text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/25 transition-all duration-300"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-500 hover:text-white"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto">
          {filterCategories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id
            return (
              <button
                key={category.id}
                onClick={() => { setActiveCategory(category.id as any) }}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden cursor-pointer ${
                  isActive
                    ? 'text-white border-neon-cyan shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                    : 'text-slate-400 hover:text-slate-200 border-white/5 hover:border-white/10 glass-panel'
                } border`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjCategoryBg"
                    className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-neon-cyan' : 'text-slate-500'}`} />
                <span>{category.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Grid displays filtered projects */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col h-full rounded-2xl glass-panel p-5 relative overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex-grow flex flex-col text-left mb-6">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-neon-cyan transition-colors duration-300 mb-2 font-display">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold border ${tag.color} tracking-wide uppercase font-mono`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Mockup frame */}
              <div className="w-full relative rounded-xl overflow-hidden mt-2 border border-white/5 shadow-md">
                {project.videoUrl ? (
                  <div className="relative w-full h-44 bg-[#08070e] flex items-center justify-center overflow-hidden">
                    <video
                      src={project.videoUrl}
                      controls
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                ) : (
                  project.mockup
                )}
              </div>

              {/* Inspect Arrow Button */}
              <div className="absolute top-5 right-5">
                <div className="w-8 h-8 rounded-full border border-white/10 bg-white/2 flex items-center justify-center text-slate-400 group-hover:text-neon-cyan group-hover:border-neon-cyan/50 group-hover:bg-neon-cyan/5 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-24 rounded-3xl glass-panel border border-white/5 max-w-md mx-auto"
        >
          <Sparkles className="w-8 h-8 text-slate-600 mx-auto mb-4 animate-pulse" />
          <h3 className="text-lg font-bold text-white font-display mb-1">No blueprints found</h3>
          <p className="text-xs text-slate-500 px-6">
            We couldn't find any projects matching "{searchTerm}" under the selected filter tab.
          </p>
          <button
            onClick={() => { setSearchTerm(''); setActiveCategory('all') }}
            className="mt-5 text-xs font-mono text-neon-cyan hover:text-white underline cursor-pointer"
          >
            Reset filter selectors
          </button>
        </motion.div>
      )}

      {/* INTERACTIVE DETAIL BLUEPRINT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-3xl rounded-3xl glass-panel border border-white/10 p-6 md:p-8 bg-[#040308] overflow-hidden flex flex-col max-h-[90vh] text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* HUD corner borders */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan/50 rounded-tl-xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-purple/50 rounded-tr-xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-purple/50 rounded-bl-xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan/50 rounded-br-xl pointer-events-none" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-pointer bg-white/5 z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="overflow-y-auto pr-2 scrollbar-thin space-y-6">
                
                {/* Title & Category Tag */}
                <div>
                  <span className="text-[10px] text-neon-cyan font-mono tracking-widest uppercase mb-1 block px-2 py-0.5 rounded bg-neon-cyan/5 border border-neon-cyan/15 w-fit">
                    {selectedProject.category.toUpperCase().replace('-', ' ')} MODULE
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold font-display text-white mt-2">
                    {selectedProject.title} Blueprint
                  </h2>
                </div>

                {/* Detailed Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {selectedProject.description}
                </p>

                {/* Grid Split: Visual representation & specs table */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Specs column */}
                  <div className="lg:col-span-6 space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5 border-b border-white/5 pb-2">
                      <CpuIcon className="w-3.5 h-3.5 text-neon-purple" /> Technical Specifications
                    </h3>
                    <div className="space-y-3 font-mono text-[11px]">
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">DATABASE</span>
                        <span className="text-slate-200 text-right">{selectedProject.specs.database}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">HOST PLATFORM</span>
                        <span className="text-slate-200 text-right">{selectedProject.specs.host}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">SECURITY AUDIT</span>
                        <span className="text-slate-200 text-right">{selectedProject.specs.security}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500">API GATEWAY</span>
                        <span className="text-slate-200 text-right">{selectedProject.specs.gateway}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Mockup column */}
                  <div className="lg:col-span-6 space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5 border-b border-white/5 pb-2">
                      {selectedProject.videoUrl ? (
                        <>
                          <svg className="w-3.5 h-3.5 text-neon-cyan animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="23 7 16 12 23 17 23 7" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                          </svg>
                          <span>Showcase Video</span>
                        </>
                      ) : (
                        <>
                          <Database className="w-3.5 h-3.5 text-neon-cyan" />
                          <span>Interactive Preview</span>
                        </>
                      )}
                    </h3>
                    <div className="scale-95 origin-top-left w-[105%]">
                      {selectedProject.videoUrl ? (
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#08070e] shadow-inner mb-2">
                          <video
                            src={selectedProject.videoUrl}
                            controls
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        selectedProject.mockup
                      )}
                    </div>
                  </div>

                </div>

                {/* Key Features List */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono border-b border-white/5 pb-2">
                    Core Capabilities Check
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300 font-light">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5 justify-end">
                  {selectedProject.githubUrl ? (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all font-mono text-xs cursor-pointer bg-white/2"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>Source Repository</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => { alert('Accessing secure code repository preview...') }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all font-mono text-xs cursor-pointer bg-white/2"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>Source Repository</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => { alert('Connecting to live sandbox container deployment...') }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-neon-cyan text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all font-mono text-xs cursor-pointer bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20"
                  >
                    <ExternalLink className="w-4 h-4 text-neon-cyan" />
                    <span>Launch Blueprint</span>
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}