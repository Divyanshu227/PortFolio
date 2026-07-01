import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Terminal as TerminalIcon, 
  Search, 
  Sparkles, 
  Layers, 
  Cpu, 
  Globe, 
  ShieldCheck,
  BrainCircuit
} from 'lucide-react'

// Define the Skill interface
interface Skill {
  name: string
  category: 'languages' | 'frontend' | 'backend' | 'databases' | 'devops' | 'core-cs'
  level: 'Expert' | 'Advanced' | 'Proficient' | 'Familiar'
  percentage: number
  colorClass: string       // Tailwind color for text/borders
  bgGlowClass: string      // Custom class or style for card hover glow
  progressBarColor: string // Tailwind color for progress bar
  tags: string[]
  description: string
  logo: React.ReactNode
}

// Unified capabilities database defined outside component
const skillsData: Skill[] = [
  // CP & LANGUAGES
  {
    name: 'C++',
    category: 'languages',
    level: 'Advanced',
    percentage: 90,
    colorClass: 'text-sky-500 border-sky-600/20',
    bgGlowClass: 'hover:border-sky-500/30 hover:shadow-[0_0_25px_rgba(14,165,233,0.15)]',
    progressBarColor: 'bg-sky-500 shadow-[0_0_10px_#0ea5e9]',
    tags: ['STL Templates', 'Memory Management', 'OOP Principles', 'CP solving'],
    description: 'Deep understanding of execution structures, pointers, template classes, and algorithmic problem-solving for competitive programming.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <polygon points="64,5 120,35 120,95 64,125 8,95 8,35" fill="#00599C" />
        <text x="64" y="82" fill="#FFF" fontSize="46" fontWeight="bold" textAnchor="middle" fontFamily="'Outfit', sans-serif">C++</text>
      </svg>
    )
  },
  {
    name: 'C',
    category: 'languages',
    level: 'Advanced',
    percentage: 88,
    colorClass: 'text-slate-400 border-slate-500/20',
    bgGlowClass: 'hover:border-slate-500/30 hover:shadow-[0_0_25px_rgba(148,163,184,0.15)]',
    progressBarColor: 'bg-slate-400 shadow-[0_0_10px_#94a3b8]',
    tags: ['Pointers', 'Memory Alloc', 'Structures', 'Low Level'],
    description: 'Structured programming logic, memory layout control, pointer arithmetic, structures definition, and raw system interfaces.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <polygon points="64,5 120,35 120,95 64,125 8,95 8,35" fill="#475569" />
        <text x="64" y="82" fill="#FFF" fontSize="56" fontWeight="bold" textAnchor="middle" fontFamily="'Outfit', sans-serif">C</text>
      </svg>
    )
  },
  {
    name: 'Python',
    category: 'languages',
    level: 'Advanced',
    percentage: 90,
    colorClass: 'text-indigo-400 border-indigo-500/20',
    bgGlowClass: 'hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(129,140,248,0.15)]',
    progressBarColor: 'bg-indigo-400 shadow-[0_0_10px_#818cf8]',
    tags: ['Automation Scripts', 'Data Scraping', 'AI Integrations', 'FastAPI'],
    description: 'Dynamic scripting tools, numeric analytics engines, machine learning API connections, and clean backend web routing configurations.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <path d="M64 8c-28 0-26 12-26 12v10h26v4h-36c-16 0-20 14-20 28s4 26 20 26h12v-16c0-14 12-26 26-26h26v-12c0-16-10-26-28-26z" fill="#3776AB" />
        <path d="M64 120c28 0 26-12 26-12v-10h-26v-4h36c16 0 20-14 20-28s-4-26-20-26h-12v16c0 14-12 26-26 26h-26v12c0 16 10 26 28 26z" fill="#FFE873" />
        <circle cx="50" cy="22" r="3.5" fill="#fff" />
        <circle cx="78" cy="106" r="3.5" fill="#000" />
      </svg>
    )
  },
  {
    name: 'Data Structures & Algorithms',
    category: 'core-cs',
    level: 'Expert',
    percentage: 95,
    colorClass: 'text-emerald-400 border-emerald-500/20',
    bgGlowClass: 'hover:border-emerald-500/30 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]',
    progressBarColor: 'bg-emerald-500 shadow-[0_0_10px_#10b981]',
    tags: ['Trees & Graphs', 'Dynamic Programming', 'Recursion & Sorting', 'Complexity Analysis'],
    description: 'Strong foundations in data structures representation, binary search, greed algorithms, shortest path algorithms, and performance analysis.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="22" r="10" stroke="#10B981" strokeWidth="4" />
        <circle cx="34" cy="70" r="10" stroke="#10B981" strokeWidth="4" />
        <circle cx="94" cy="70" r="10" stroke="#10B981" strokeWidth="4" />
        <line x1="56" y1="28" x2="42" y2="62" stroke="#FFF" strokeWidth="3" />
        <line x1="72" y1="28" x2="86" y2="62" stroke="#FFF" strokeWidth="3" />
      </svg>
    )
  },
  {
    name: 'Complexity Optimization',
    category: 'core-cs',
    level: 'Expert',
    percentage: 95,
    colorClass: 'text-rose-400 border-rose-500/20',
    bgGlowClass: 'hover:border-rose-500/30 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)]',
    progressBarColor: 'bg-rose-450 shadow-[0_0_10px_#ef4444]',
    tags: ['Time Complexity O(N)', 'Space Optimization', 'Auxiliary Storage', 'Recursion overhead'],
    description: 'Structuring runtime scripts to minimize CPU work cycles, optimizing auxiliary variable arrays, stack management, and inline caching.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <path d="M15 110 L15 15 M15 110 L115 110" stroke="#FFF" strokeWidth="4" />
        <path d="M25 25 Q 40 100 110 100" stroke="#EF4444" strokeWidth="4" />
        <path d="M25 60 Q 60 95 110 105" stroke="#10B981" strokeWidth="4" />
      </svg>
    )
  },
  // FRONTEND DEV
  {
    name: 'TypeScript',
    category: 'frontend',
    level: 'Expert',
    percentage: 95,
    colorClass: 'text-blue-400 border-blue-500/20',
    bgGlowClass: 'hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]',
    progressBarColor: 'bg-blue-500 shadow-[0_0_10px_#3b82f6]',
    tags: ['Generics', 'Strict Mode', 'Type Inference', 'ESNext'],
    description: 'Robust compiler designs, interface definitions, custom type guards, and type safety compliance across production systems.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" fill="#3178C6" rx="8" />
        <text x="112" y="112" fill="#FFF" fontSize="62" fontWeight="bold" textAnchor="end" fontFamily="'Outfit', sans-serif">TS</text>
      </svg>
    )
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    level: 'Expert',
    percentage: 95,
    colorClass: 'text-amber-400 border-amber-500/20',
    bgGlowClass: 'hover:border-amber-500/30 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]',
    progressBarColor: 'bg-amber-400 shadow-[0_0_10px_#fbbf24]',
    tags: ['ES6+', 'Event Loop', 'Closures', 'Promises / Async'],
    description: 'Core execution environment architectures, prototypical inheritance, DOM rendering models, and asynchronous scripting engines.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" fill="#F7DF1E" rx="8" />
        <text x="115" y="112" fill="#000" fontSize="62" fontWeight="bold" textAnchor="end" fontFamily="'Outfit', sans-serif">JS</text>
      </svg>
    )
  },
  {
    name: 'React.js',
    category: 'frontend',
    level: 'Expert',
    percentage: 95,
    colorClass: 'text-neon-cyan border-neon-cyan/20',
    bgGlowClass: 'hover:border-neon-cyan/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]',
    progressBarColor: 'bg-neon-cyan shadow-[0_0_10px_#06b6d4]',
    tags: ['Custom Hooks', 'Reconciliation', 'Context / Redux', 'React Query'],
    description: 'Designing modular component hierarchies, optimizing render loops, orchestrating dynamic UI state, and custom react hook patterns.',
    logo: (
      <svg className="w-6 h-6 animate-[spin_12s_linear_infinite]" viewBox="0 0 128 128" fill="none">
        <ellipse cx="64" cy="64" rx="18" ry="46" fill="none" stroke="#06B6D4" strokeWidth="4" transform="rotate(30,64,64)" />
        <ellipse cx="64" cy="64" rx="18" ry="46" fill="none" stroke="#06B6D4" strokeWidth="4" transform="rotate(90,64,64)" />
        <ellipse cx="64" cy="64" rx="18" ry="46" fill="none" stroke="#06B6D4" strokeWidth="4" transform="rotate(150,64,64)" />
        <circle cx="64" cy="64" r="7.5" fill="#06B6D4" />
      </svg>
    )
  },
  {
    name: 'Next.js',
    category: 'frontend',
    level: 'Advanced',
    percentage: 90,
    colorClass: 'text-slate-100 border-white/10',
    bgGlowClass: 'hover:border-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]',
    progressBarColor: 'bg-slate-200 shadow-[0_0_10px_rgba(255,255,255,0.3)]',
    tags: ['Server Components', 'App Router', 'SSR / SSG', 'Incremental Builds'],
    description: 'Production deployments with Next Server Components, server actions, route handlers, middleware pipelines, and SEO optimizations.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#000" stroke="#FFF" strokeWidth="2.5" />
        <path d="M92 90 L52 42 H42 V86 H48 V50 L84 92 Z" fill="#FFF" />
        <rect x="76" y="42" width="6" height="44" fill="#FFF" />
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Expert',
    percentage: 95,
    colorClass: 'text-cyan-400 border-cyan-400/20',
    bgGlowClass: 'hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]',
    progressBarColor: 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]',
    tags: ['Utility Compositions', 'Tailwind v4', 'Custom Grid System', 'HUD aesthetics'],
    description: 'Dynamic utility designs, layout styling configurations, responsive flex/grid overlays, and dark-theme aesthetics integrations.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <path d="M64 35C45.1 35 33.4 44.5 28.9 63.4c6.7-9.5 14.5-12.8 23.4-10 5 1.6 8.6 5.3 12.6 9.4 6.5 6.7 14 14.5 31 14.5 18.9 0 30.6-9.5 35.1-28.4-6.7 9.5-14.5 12.8-23.4 10-5-1.6-8.6-5.3-12.6-9.4C78.5 42.8 71 35 64 35zM28.9 77.2C10 77.2 3.9 86.7 0 105.6c6.7-9.5 14.5-12.8 23.4-10 5 1.6 8.6 5.3 12.6 9.4 6.5 6.7 14 14.5 31 14.5 18.9 0 30.6-9.5 35.1-28.4-6.7 9.5-14.5 12.8-23.4 10-5-1.6-8.6-5.3-12.6-9.4c-6.5-6.7-14-14.5-31-14.5z" fill="#38BDF8" />
      </svg>
    )
  },
  {
    name: 'Framer Motion',
    category: 'frontend',
    level: 'Advanced',
    percentage: 90,
    colorClass: 'text-purple-400 border-purple-500/20',
    bgGlowClass: 'hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]',
    progressBarColor: 'bg-purple-500 shadow-[0_0_10px_#a855f7]',
    tags: ['Layout Animations', 'Keyframe Cycles', 'Spring Physics', 'HUD Gestures'],
    description: 'Micro-animations Orchestration, layout transitions, exit/enter animations, page navigation fades, and gesture feedback controls.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <path d="M10 20 L64 74 L118 20 Z" fill="#FF00C8" />
        <path d="M10 74 L64 128 L118 74 Z" fill="#7B00FF" />
        <path d="M10 74 L64 20 L118 74 Z" fill="#00F0FF" />
      </svg>
    )
  },
  // BACKEND & DATA DEV
  {
    name: 'Node.js',
    category: 'backend',
    level: 'Advanced',
    percentage: 90,
    colorClass: 'text-emerald-400 border-emerald-500/20',
    bgGlowClass: 'hover:border-emerald-500/30 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]',
    progressBarColor: 'bg-emerald-500 shadow-[0_0_10px_#10b981]',
    tags: ['V8 Engine Core', 'Streams & Buffers', 'File Controllers', 'Asynchronous Execution'],
    description: 'Scalable backend engines, HTTP servers execution, custom scripting utilities, event-loop process structures, and stream pipes.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <path d="M64 5L15 33v57l49 28 49-28V33L64 5zm0 15l36 21v42L64 104 28 83V41l36-21z" fill="#339933" />
        <path d="M64 33v62l30-17V50L64 33z" fill="#339933" />
      </svg>
    )
  },
  {
    name: 'Express.js',
    category: 'backend',
    level: 'Advanced',
    percentage: 92,
    colorClass: 'text-slate-300 border-slate-500/20',
    bgGlowClass: 'hover:border-slate-500/30 hover:shadow-[0_0_25px_rgba(148,163,184,0.15)]',
    progressBarColor: 'bg-slate-400 shadow-[0_0_10px_#94a3b8]',
    tags: ['Middleware Stack', 'REST Controllers', 'JWT Auth Systems', 'CORS / Security'],
    description: 'REST API routing stacks, secure token authentications, validation schemas middlewares, and payload intercept controllers.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" fill="#1e1e1e" rx="8" />
        <text x="64" y="82" fill="#FFF" fontSize="48" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ex</text>
      </svg>
    )
  },
  {
    name: 'GraphQL',
    category: 'backend',
    level: 'Advanced',
    percentage: 88,
    colorClass: 'text-pink-400 border-pink-500/20',
    bgGlowClass: 'hover:border-pink-500/30 hover:shadow-[0_0_25px_rgba(244,63,94,0.15)]',
    progressBarColor: 'bg-pink-500 shadow-[0_0_10px_#ec4899]',
    tags: ['Unified Schema', 'Resolvers Map', 'Queries / Mutations', 'Apollo Integration'],
    description: 'Designing typed query endpoints, optimizing database resolver performance, schema definition, and payload shape controls.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <path d="M64 5 L118 36 L118 92 L64 123 L10 92 L10 36 Z" stroke="#E10098" strokeWidth="6" />
        <circle cx="64" cy="64" r="14" fill="#E10098" />
        <circle cx="64" cy="12" r="8" fill="#E10098" />
        <circle cx="110" cy="38" r="8" fill="#E10098" />
        <circle cx="110" cy="90" r="8" fill="#E10098" />
        <circle cx="64" cy="116" r="8" fill="#E10098" />
        <circle cx="18" cy="90" r="8" fill="#E10098" />
        <circle cx="18" cy="38" r="8" fill="#E10098" />
        <path d="M64 12 L64 116 M18 38 L110 90 M18 90 L110 38" stroke="#E10098" strokeWidth="3" />
      </svg>
    )
  },
  {
    name: 'Socket.io',
    category: 'backend',
    level: 'Proficient',
    percentage: 85,
    colorClass: 'text-violet-400 border-violet-500/20',
    bgGlowClass: 'hover:border-violet-500/30 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]',
    progressBarColor: 'bg-violet-500 shadow-[0_0_10px_#8b5cf6]',
    tags: ['WebSockets', 'Rooms Channels', 'Bi-directional Streams', 'Connection Handlers'],
    description: 'Bidirectional communications pipelines, real-time message broadcasting engines, room-based connections, and heartbeats check protocols.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="58" stroke="#8B5CF6" strokeWidth="6" />
        <circle cx="64" cy="64" r="38" fill="#8B5CF6" />
        <path d="M52 64h24M64 52v24" stroke="#FFF" strokeWidth="8" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: 'PostgreSQL',
    category: 'databases',
    level: 'Advanced',
    percentage: 90,
    colorClass: 'text-blue-500 border-blue-600/20',
    bgGlowClass: 'hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]',
    progressBarColor: 'bg-blue-600 shadow-[0_0_10px_#2563eb]',
    tags: ['Relational Model', 'Subqueries & Joins', 'Indexes Tuning', 'Prisma / TypeORM'],
    description: 'Data isolation setups, raw SQL queries optimizations, constraint checks, schema migrations, and indexing strategies.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <path d="M64 10c-25 0-35 25-35 50 0 35 25 58 45 58s25-10 25-25V80c0-10 10-15 15-5 5 10 5 20 5 20s10-10 10-25c0-30-20-60-65-60z" fill="#336791" />
        <circle cx="45" cy="50" r="5.5" fill="#FFF" />
      </svg>
    )
  },
  {
    name: 'MongoDB',
    category: 'databases',
    level: 'Advanced',
    percentage: 92,
    colorClass: 'text-emerald-500 border-emerald-600/20',
    bgGlowClass: 'hover:border-emerald-500/30 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]',
    progressBarColor: 'bg-emerald-600 shadow-[0_0_10px_#059669]',
    tags: ['Document Schemas', 'Aggregation Pipes', 'Mongoose ODM', 'Query Optimizers'],
    description: 'Dynamic schema structures, multi-stage aggregation scripts, indexes setup, nested structures configurations, and database scaleups.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <path d="M64 5C61 5 35 60 35 100c0 30 15 45 29 45s29-15 29-45C93 60 67 5 64 5z" fill="#47A248" />
        <path d="M64 5v140c14 0 29-15 29-45C93 60 67 5 64 5z" fill="#589636" />
        <path d="M64 100c-8 0-14-10-14-25 0-20 14-50 14-50s14 30 14 50c0 15-6 25-14 25z" fill="#3F3E3F" />
      </svg>
    )
  },
  {
    name: 'Redis',
    category: 'databases',
    level: 'Proficient',
    percentage: 80,
    colorClass: 'text-rose-500 border-rose-600/20',
    bgGlowClass: 'hover:border-rose-500/30 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)]',
    progressBarColor: 'bg-rose-500 shadow-[0_0_10px_#ef4444]',
    tags: ['In-Memory Cache', 'Session Storage', 'Pub/Sub Piping', 'Expiry policies'],
    description: 'Key-value data indexing, RAM caches implementations, TTL config scripts, WebSocket session storages, and rate limit architectures.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <path d="M10 20 L64 5 L118 20 L64 35 Z" fill="#D82C20" />
        <path d="M10 50 L64 35 L118 50 L64 65 Z" fill="#D82C20" />
        <path d="M10 80 L64 65 L118 80 L64 95 Z" fill="#D82C20" />
        <path d="M10 20 L10 90 L64 105 L64 35 Z" fill="#A41E15" opacity="0.8" />
        <path d="M118 20 L118 90 L64 105 L64 35 Z" fill="#A41E15" />
      </svg>
    )
  },
  {
    name: 'Vector Databases',
    category: 'databases',
    level: 'Proficient',
    percentage: 85,
    colorClass: 'text-cyan-400 border-cyan-500/20',
    bgGlowClass: 'hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]',
    progressBarColor: 'bg-cyan-400 shadow-[0_0_10px_#06b6d4]',
    tags: ['Pinecone', 'ChromaDB', 'Embeddings Index', 'Semantic Search'],
    description: 'Storage of high-dimensional vectors, semantic matching using similarity metrics (cosine distance), search indices, and LLM integrations.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <path d="M20 30 L64 15 L108 30 L64 45 Z" fill="#06B6D4" opacity="0.3" />
        <path d="M20 60 L64 45 L108 60 L64 75 Z" fill="#06B6D4" opacity="0.6" />
        <path d="M20 90 L64 75 L108 90 L64 105 Z" fill="#06B6D4" />
        <path d="M64 15 L64 105" stroke="#FFF" strokeWidth="4" strokeDasharray="4 4" />
        <path d="M20 90 L108 30" stroke="#E24D3E" strokeWidth="3" />
      </svg>
    )
  },
  // CORE CS FOUNDATIONS
  {
    name: 'Operating Systems (OS)',
    category: 'core-cs',
    level: 'Advanced',
    percentage: 90,
    colorClass: 'text-blue-400 border-blue-500/20',
    bgGlowClass: 'hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]',
    progressBarColor: 'bg-blue-500 shadow-[0_0_10px_#3b82f6]',
    tags: ['Process Scheduling', 'Virtual Memory', 'Deadlock & Semaphores', 'Threading & Mutex'],
    description: 'Comprehensive comprehension of CPU schedules, virtual memory structures, paging algorithms, deadlock prevention, and process IPC lines.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <rect x="15" y="15" width="98" height="98" rx="8" stroke="#3B82F6" strokeWidth="5" />
        <line x1="15" y1="45" x2="113" y2="45" stroke="#3B82F6" strokeWidth="3" />
        <circle cx="30" cy="30" r="4" fill="#EF4444" />
        <circle cx="45" cy="30" r="4" fill="#F59E0B" />
        <circle cx="60" cy="30" r="4" fill="#10B981" />
        <rect x="35" y="60" width="25" height="25" rx="3" fill="#3B82F6" opacity="0.3" />
        <text x="47" y="77" fill="#FFF" fontSize="14" fontWeight="bold" textAnchor="middle">CPU</text>
      </svg>
    )
  },
  {
    name: 'Database Management Systems (DBMS)',
    category: 'core-cs',
    level: 'Advanced',
    percentage: 90,
    colorClass: 'text-amber-400 border-amber-500/20',
    bgGlowClass: 'hover:border-amber-500/30 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]',
    progressBarColor: 'bg-amber-450 shadow-[0_0_10px_#f59e0b]',
    tags: ['ACID Transactions', 'SQL Normalization', 'Concurrency Control', 'Indexing Schemes'],
    description: 'Relational logic patterns, database normal forms (1NF-BCNF), ACID properties enforcement, transactions schedules, and B-Tree indexing.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <ellipse cx="64" cy="30" rx="36" ry="12" stroke="#F59E0B" strokeWidth="5" />
        <path d="M28 30v25c0 6.6 16.1 12 36 12s36-5.4 36-12V30" stroke="#F59E0B" strokeWidth="5" />
        <path d="M28 55v25c0 6.6 16.1 12 36 12s36-5.4 36-12V55" stroke="#F59E0B" strokeWidth="5" />
        <line x1="64" y1="42" x2="64" y2="80" stroke="#F59E0B" strokeWidth="3" strokeDasharray="3 3" />
      </svg>
    )
  },
  {
    name: 'Computer Networks (CN)',
    category: 'core-cs',
    level: 'Advanced',
    percentage: 88,
    colorClass: 'text-orange-400 border-orange-500/20',
    bgGlowClass: 'hover:border-orange-500/30 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]',
    progressBarColor: 'bg-orange-500 shadow-[0_0_10px_#f97316]',
    tags: ['OSI / TCP-IP Models', 'Routing Protocols', 'HTTP / Socket Pipes', 'DNS & IP Routing'],
    description: 'Layered network stack architectures, packet transport systems, socket-level routing scripts, security audits, and DNS resolutions.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="30" r="10" stroke="#F97316" strokeWidth="4" />
        <circle cx="34" cy="90" r="10" stroke="#F97316" strokeWidth="4" />
        <circle cx="94" cy="90" r="10" stroke="#F97316" strokeWidth="4" />
        <path d="M64 40 L34 80 M64 40 L94 80 M34 90 L94 90" stroke="#FFF" strokeWidth="3" />
      </svg>
    )
  },
  {
    name: 'Object-Oriented Programming (OOP)',
    category: 'core-cs',
    level: 'Expert',
    percentage: 92,
    colorClass: 'text-cyan-400 border-cyan-500/20',
    bgGlowClass: 'hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]',
    progressBarColor: 'bg-cyan-500 shadow-[0_0_10px_#06b6d4]',
    tags: ['Polymorphism', 'Inheritance & Abstr', 'SOLID Architecture', 'Design Patterns'],
    description: 'Translating business logic structures to robust abstract hierarchies, polymorphism overrides, clean code boundaries, and structural patterns.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <rect x="44" y="15" width="40" height="30" rx="4" stroke="#06B6D4" strokeWidth="4" />
        <rect x="15" y="75" width="40" height="30" rx="4" stroke="#06B6D4" strokeWidth="4" />
        <rect x="73" y="75" width="40" height="30" rx="4" stroke="#06B6D4" strokeWidth="4" />
        <path d="M64 45v15M35 60h58v15" stroke="#FFF" strokeWidth="3" />
      </svg>
    )
  },
  // DEVOPS, INFRASTRUCTURE & AI
  {
    name: 'Git & GitHub',
    category: 'devops',
    level: 'Advanced',
    percentage: 92,
    colorClass: 'text-orange-500 border-orange-500/20',
    bgGlowClass: 'hover:border-orange-500/30 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]',
    progressBarColor: 'bg-orange-500 shadow-[0_0_10px_#f97316]',
    tags: ['Rebases & Merges', 'Git Actions CI/CD', 'Git Hooks', 'PR Code Reviews'],
    description: 'Repository workflow architectures, automated build validation workflows, repository branching configurations, and hook audits.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <path d="M125 60L68 3c-4-4-10-4-14 0L3 54c-4 4-4 10 0 14l57 57c4 4 10 4 14 0l51-51V60z" fill="#F05032" />
        <circle cx="64" cy="40" r="7.5" fill="#FFF" />
        <circle cx="64" cy="88" r="7.5" fill="#FFF" />
        <circle cx="88" cy="64" r="7.5" fill="#FFF" />
        <path d="M64 47.5v33M64 64h16.5" stroke="#FFF" strokeWidth="6" />
      </svg>
    )
  },
  {
    name: 'Docker',
    category: 'devops',
    level: 'Proficient',
    percentage: 82,
    colorClass: 'text-sky-400 border-sky-500/20',
    bgGlowClass: 'hover:border-sky-500/30 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]',
    progressBarColor: 'bg-sky-400 shadow-[0_0_10px_#38bdf8]',
    tags: ['Containers Isolation', 'Docker Compose', 'Multi-stage Builds', 'Volumes / Network'],
    description: 'Writing environment config files (Dockerfiles), bundle optimizations, multi-container layouts orchestrations, and image registers.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <rect x="20" y="30" width="16" height="16" rx="2" fill="#2496ED" />
        <rect x="40" y="30" width="16" height="16" rx="2" fill="#2496ED" />
        <rect x="60" y="30" width="16" height="16" rx="2" fill="#2496ED" />
        <rect x="30" y="50" width="16" height="16" rx="2" fill="#2496ED" />
        <rect x="50" y="50" width="16" height="16" rx="2" fill="#2496ED" />
        <rect x="70" y="50" width="16" height="16" rx="2" fill="#2496ED" />
        <path d="M10 80c5 0 20-5 30-5 30 0 45 15 50 15h30c10-15 0-35-15-40-10 0-20 5-30 5-25 0-35-20-65-10v35z" fill="#2496ED" />
      </svg>
    )
  },
  {
    name: 'Machine Learning & RAG',
    category: 'devops',
    level: 'Proficient',
    percentage: 82,
    colorClass: 'text-purple-400 border-purple-500/20',
    bgGlowClass: 'hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]',
    progressBarColor: 'bg-purple-500 shadow-[0_0_10px_#a855f7]',
    tags: ['RAG Pipelines', 'LLMs Integration', 'LangChain', 'OpenAI / Gemini'],
    description: 'Designing retrieval-augmented text generation processes, document indexing, embeddings configuration, and LLM orchestration scripts.',
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
        <circle cx="34" cy="34" r="8" fill="#A855F7" />
        <circle cx="34" cy="94" r="8" fill="#A855F7" />
        <circle cx="94" cy="34" r="8" fill="#A855F7" />
        <circle cx="94" cy="94" r="8" fill="#A855F7" />
        <circle cx="64" cy="64" r="12" fill="#06B6D4" />
        <path d="M34 34 L64 64 M34 94 L64 64 M94 34 L64 64 M94 94 L64 64" stroke="#888" strokeWidth="3" />
        <path d="M34 34 L34 94 M94 34 L94 94 M34 34 L94 34 M34 94 L94 94" stroke="#444" strokeWidth="2" strokeDasharray="3 3" />
      </svg>
    )
  }
]

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('')
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "DK-HUD OS v1.0.4 - CONNECTING TO TECHNICAL INTELLIGENCE MATRIX...",
    "STATUS: SECURE ENCRYPTED NETWORK LINK ESTABLISHED.",
    "RETRIEVING DATA FEEDS FOR SUBJECT: [DIVYANSHU]...",
    `INDEXING CAPABILITIES: ${skillsData.length}/${skillsData.length} TECH SUB-SYSTEMS ONLINE.`,
    "------------------------------------------------------------------",
    "TYPE 'help' FOR A LIST OF DYNAMIC HUD DIAGNOSTIC COMMANDS.",
    "OR CLICK ANY SKILL CARD ABOVE TO RUN DETAILED TELEMETRY TESTS."
  ])
  
  const terminalBottomRef = useRef<HTMLDivElement>(null)
  const clickSound = useRef(new Audio("/clicksound.mp3"))

  // Play micro click sound if needed
  const playClick = () => {
    clickSound.current.currentTime = 0
    clickSound.current.play().catch(() => {})
  }

  // Scroll to bottom of terminal when history updates
  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [terminalHistory])

  // Filter skills globally for Search functionality
  const filteredSkills = skillsData.filter((skill) => {
    return skill.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           skill.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  })

  // Function to inspect a skill and trigger terminal log
  const handleInspectSkill = (skill: Skill) => {
    playClick()
    const logOutput = [
      `> inspect --skill "${skill.name}"`,
      `[DIAGNOSTIC PROCESS STARTING FOR SUB-SYSTEM: ${skill.name.toUpperCase()}]`,
      `------------------------------------------------------------------`,
      `Skill Identity:  ${skill.name}`,
      `Category Group:  ${skill.category.toUpperCase()} DEVELOPMENT`,
      `Competency Lvl:  ${skill.level} (${skill.percentage}% mastery index)`,
      `Sub-Modules:     ${skill.tags.join(', ')}`,
      `Functional Info: ${skill.description}`,
      `STATUS ASSESSMENT: HEALTHY. MODULE FULLY DEPLOYED.`,
      `[DIAGNOSTIC PROCESS COMPLETE]`
    ]
    setTerminalHistory((prev) => [...prev, ...logOutput])
  }

  // Handle Terminal submission
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    playClick()
    const rawInput = terminalInput.trim()
    if (!rawInput) return

    const logInputLine = `DK-HUD // user@portfolio ~ $ ${rawInput}`
    const parts = rawInput.split(/\s+/)
    const cmd = parts[0].toLowerCase()
    let response: string[] = []

    switch (cmd) {
      case 'help':
        response = [
          `Available HUD Diagnostic Commands:`,
          `  help             Show this capabilities panel`,
          `  skills           List all registered technology sub-systems`,
          `  clear            Flush the HUD terminal log memory`,
          `  about            Output subject developer identity diagnostic parameters`,
          `  inspect <name>   Inspect detailed diagnostics for a specific technology module`
        ]
        break
      
      case 'clear':
        setTerminalHistory([])
        setTerminalInput('')
        return

      case 'skills':
        const languages = skillsData.filter(s => s.category === 'languages').map(s => s.name).join(', ')
        const frontend = skillsData.filter(s => s.category === 'frontend').map(s => s.name).join(', ')
        const backend = skillsData.filter(s => s.category === 'backend').map(s => s.name).join(', ')
        const databases = skillsData.filter(s => s.category === 'databases').map(s => s.name).join(', ')
        const coreCs = skillsData.filter(s => s.category === 'core-cs').map(s => s.name).join(', ')
        const devops = skillsData.filter(s => s.category === 'devops').map(s => s.name).join(', ')
        
        response = [
          `Registered Technology Core Modules:`,
          `  LANGUAGES:  ${languages}`,
          `  FRONTEND:   ${frontend}`,
          `  BACKEND:    ${backend}`,
          `  DATABASES:  ${databases}`,
          `  CORE CS:    ${coreCs}`,
          `  DEVOPS:     ${devops}`
        ]
        break

      case 'about':
        response = [
          `[SUBJECT IDENTIFICATION DIAGNOSTIC]`,
          `  Subject Name:  Divyanshu`,
          `  Role Class:    AI & Full Stack Developer / CP Competitive Programmer`,
          `  Specialty:     Modular Web Layouts / Complex API Architectures`,
          `  Current State: Active & Available for Opportunities`,
          `  Environment:   React + TS + Tailwind v4 + Framer Motion`
        ]
        break

      case 'inspect':
        if (parts.length < 2) {
          response = [`ERROR: Missing argument. Syntax: inspect <skill_name>`]
        } else {
          const targetName = parts.slice(1).join(' ').toLowerCase()
          const matched = skillsData.find(s => s.name.toLowerCase() === targetName)
          if (matched) {
            response = [
              `[DIAGNOSTIC PROCESS STARTING FOR SUB-SYSTEM: ${matched.name.toUpperCase()}]`,
              `------------------------------------------------------------------`,
              `Skill Identity:  ${matched.name}`,
              `Category Group:  ${matched.category.toUpperCase()} DEVELOPMENT`,
              `Competency Lvl:  ${matched.level} (${matched.percentage}% mastery index)`,
              `Sub-Modules:     ${matched.tags.join(', ')}`,
              `Functional Info: ${matched.description}`,
              `STATUS ASSESSMENT: HEALTHY. MODULE FULLY DEPLOYED.`,
              `[DIAGNOSTIC PROCESS COMPLETE]`
            ]
          } else {
            response = [`ERROR: Module "${parts.slice(1).join(' ')}" not indexed in database. Type 'skills' for list.`]
          }
        }
        break

      default:
        response = [`COMMAND ERROR: '${cmd}' not recognized. Type 'help' for available command telemetry.`]
        break
    }

    setTerminalHistory((prev) => [...prev, logInputLine, ...response])
    setTerminalInput('')
  }

  const handleRebootTerminal = () => {
    playClick()
    setTerminalHistory([
      "SYSTEM REBOOT INITIATED...",
      "LOADING SYSTEM DRIVERS...",
      "SUCCESS: DK-HUD OS REBOOTED.",
      `INDEXING CAPABILITIES: ${skillsData.length}/${skillsData.length} TECH SUB-SYSTEMS ONLINE.`,
      "------------------------------------------------------------------",
      "TYPE 'help' FOR A LIST OF DYNAMIC HUD DIAGNOSTIC COMMANDS.",
      "OR CLICK ANY SKILL CARD ABOVE TO RUN DETAILED TELEMETRY TESTS."
    ])
  }

  // CP solved metrics data cards
  const cpStats = [
    { platform: 'LeetCode', solved: '600+ Solved', desc: 'Core algorithmic practice and time complexity tuning.', initial: 'LC', color: 'border-[#FFA116]/20 text-[#FFA116] bg-[#FFA116]/5 hover:border-[#FFA116]/40 hover:shadow-[0_0_25px_rgba(255,161,22,0.1)]' },
    { platform: 'CodeChef', solved: '850+ Solved', desc: 'Real-time competitive contest problem decomposition.', initial: 'CC', color: 'border-red-500/20 text-red-500 bg-red-500/5 hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(239,68,68,0.1)]' },
    { platform: 'GeeksforGeeks', solved: '400+ Solved', desc: 'Topic-based DSA concepts and classic library setups.', initial: 'GFG', color: 'border-[#2F8D46]/20 text-[#2F8D46] bg-[#2F8D46]/5 hover:border-[#2F8D46]/40 hover:shadow-[0_0_25px_rgba(47,141,70,0.1)]' }
  ]

  // Render a standard skill card
  const renderSkillCard = (skill: Skill) => {
    const isCoreCS = skill.category === 'core-cs' && !['C++', 'C', 'Python'].includes(skill.name)
    
    return (
      <motion.div
        layout
        key={skill.name}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -6, scale: 1.02 }}
        onClick={() => handleInspectSkill(skill)}
        className={`p-6 rounded-2xl glass-panel border transition-all duration-300 group cursor-pointer ${skill.colorClass} ${skill.bgGlowClass}`}
      >
        {/* Card Top: Logo and Level */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
            {skill.logo}
          </div>
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400 group-hover:text-white transition-colors border border-white/5">
            {skill.level}
          </span>
        </div>

        {/* Card Center: Title & Short Desc */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white font-display mb-1 flex items-center gap-1.5 group-hover:text-neon-cyan transition-colors">
            {skill.name}
          </h3>
          <p className="text-[12px] text-slate-400 leading-relaxed font-light min-h-[36px] line-clamp-2">
            {skill.description}
          </p>
        </div>

        {/* Card Bottom: Interactive Progress bar */}
        <div className="space-y-3 mt-4">
          <div className="flex justify-between items-center text-[10px] font-mono">
            <span className="text-slate-500 uppercase">Proficiency</span>
            <span className="text-slate-300 font-semibold group-hover:text-white transition-colors">{skill.percentage}%</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.percentage}%` }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`h-full rounded-full ${skill.progressBarColor}`}
            />
          </div>
        </div>

        {/* Dynamic subtopic tags or syllabus checklist */}
        {isCoreCS ? (
          <ul className="space-y-1.5 mt-4 pt-4 border-t border-white/5 text-[10px] font-mono text-slate-400 group-hover:text-slate-300 transition-colors">
            {skill.tags.map((tag) => (
              <li key={tag} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_6px_#06b6d4]" />
                <span>{tag}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/5 opacity-80 group-hover:opacity-100 transition-opacity">
            {skill.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 group-hover:text-slate-300 border border-white/[0.02]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    )
  }

  // Pre-filtered arrays for static layout sections
  const languagesList = skillsData.filter(s => s.category === 'languages')
  const frontendList = skillsData.filter(s => s.category === 'frontend')
  const backendList = skillsData.filter(s => s.category === 'backend')
  const databasesList = skillsData.filter(s => s.category === 'databases')
  const coreCsList = skillsData.filter(s => s.category === 'core-cs' && !['C++', 'C', 'Python'].includes(s.name))
  const devopsList = skillsData.filter(s => s.category === 'devops')

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-28 pb-24 select-none">
      
      {/* Background glowing ambient blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-neon-purple/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />

      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <span className="text-[11px] text-neon-cyan font-mono tracking-widest uppercase mb-3 block px-3 py-1 rounded-full border border-neon-cyan/15 bg-neon-cyan/5 inline-block">
          Technical Matrix
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent mb-4">
          Capabilities Dashboard
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full mb-6" />
        <p className="text-slate-400 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
          An overview of my structured capabilities across Competitive Programming, software engineering, databases development, theoretical Computer Science foundations, and AI automation tools.
        </p>
      </motion.div>

      {/* Search Hub */}
      <div className="flex justify-center mb-14 w-full">
        <div className="relative w-full max-w-md group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-neon-cyan transition-colors" />
          <input
            type="text"
            placeholder="Search core capabilities, libraries or tags (e.g. C++, React, DSA)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-12 py-3 rounded-full bg-black/40 border border-white/5 font-sans text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/25 transition-all duration-300"
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
      </div>

      {/* Main Capability Matrix Area */}
      <div className="space-y-24">
        
        {searchTerm ? (
          /* Search results dynamic display overlay */
          <div className="space-y-8 min-h-[300px]">
            <h2 className="text-xl font-bold text-white font-display flex items-center gap-2 border-b border-white/5 pb-3">
              <Search className="w-5 h-5 text-neon-cyan" /> Capabilities Matches for "{searchTerm}"
            </h2>
            {filteredSkills.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredSkills.map(renderSkillCard)}
              </div>
            ) : (
              <div className="text-center py-20 rounded-3xl glass-panel border border-white/5 max-w-md mx-auto">
                <Sparkles className="w-8 h-8 text-slate-600 mx-auto mb-4 animate-pulse" />
                <h3 className="text-lg font-bold text-white font-display mb-1">No matches found</h3>
                <p className="text-xs text-slate-500 px-6">
                  We couldn't locate any capability tags matching "{searchTerm}". Check spelling or search another topic.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-5 text-xs font-mono text-neon-cyan hover:text-white underline cursor-pointer"
                >
                  Reset search filters
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Standard Curated Sectioned View */
          <div className="space-y-24">
            
            {/* 1. COMPETITIVE PROGRAMMING SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2">
                    <Code2 className="w-6 h-6 text-amber-500" /> Competitive Programming Hub
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Analyzing algorithmic efficiency, space-time complexities, and implementing structured logic models.
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/10 bg-amber-500/5 text-[10px] font-mono text-amber-400 font-semibold uppercase tracking-wider">
                  1850+ solved challenges
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Solved Statistics Sub-column */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {cpStats.map((stat) => (
                    <div 
                      key={stat.platform}
                      className={`p-5 rounded-2xl glass-panel border transition-all duration-300 group flex items-center justify-between ${stat.color}`}
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">{stat.platform}</span>
                        <h4 className="text-2xl font-bold font-display text-white">{stat.solved}</h4>
                        <p className="text-[10px] text-slate-400 font-light pr-2 leading-relaxed">{stat.desc}</p>
                      </div>
                      <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/5 font-bold text-sm font-mono flex-shrink-0">
                        {stat.initial}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CP Core Skill Cards Sub-column */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                  {languagesList.map(renderSkillCard)}
                  {skillsData.filter(s => ['Data Structures & Algorithms', 'Complexity Optimization'].includes(s.name)).map(renderSkillCard)}
                </div>
              </div>
            </motion.div>

            {/* 2. FULL STACK DEV SUITE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-12"
            >
              <div className="border-b border-white/5 pb-4">
                <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2">
                  <Layers className="w-6 h-6 text-neon-purple" /> Full Stack Software Development
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Engineering clean, interactive frontends, secure backend API pipelines, and responsive data stores.
                </p>
              </div>

              {/* Frontend sub-grid */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-slate-300 font-display flex items-center gap-2 uppercase tracking-wider">
                  <Globe className="w-4 h-4 text-neon-cyan" /> Client Visual Interfaces & State
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {frontendList.map(renderSkillCard)}
                </div>
              </div>

              {/* Backend sub-grid */}
              <div className="space-y-6 pt-4">
                <h3 className="text-sm font-bold text-slate-300 font-display flex items-center gap-2 uppercase tracking-wider">
                  <Cpu className="w-4 h-4 text-neon-purple" /> Backend Routing, APIs & Databases
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {backendList.map(renderSkillCard)}
                  {databasesList.map(renderSkillCard)}
                </div>
              </div>
            </motion.div>

            {/* 3. CORE COMPUTER SCIENCE FOUNDATIONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="border-b border-white/5 pb-4">
                <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-neon-blue" /> Core Computer Science
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Foundational academic subjects covering operating systems control, relational database design, TCP/IP networks, and design structures.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreCsList.map(renderSkillCard)}
              </div>
            </motion.div>

            {/* 4. DevOps, Tools & Machine Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="border-b border-white/5 pb-4">
                <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2">
                  <BrainCircuit className="w-6 h-6 text-emerald-400" /> Infrastructure & Intelligent Systems
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Orchestrating container networks, codebase version control, and training/implementing ML prompting with RAG.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {devopsList.map(renderSkillCard)}
              </div>
            </motion.div>

          </div>
        )}

      </div>

      {/* Cyberpunk HUD Diagnostic Terminal Widget */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-28 max-w-5xl mx-auto rounded-2xl bg-[#030208]/90 border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group/terminal"
      >
        {/* Decorative Grid Line Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-neon-cyan/40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-neon-purple/40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-neon-purple/40 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-neon-cyan/40 pointer-events-none" />

        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-white/5 border-b border-white/5 font-mono text-[11px] text-slate-400 select-none">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 cursor-pointer" onClick={() => setTerminalHistory([])} title="Clear terminal" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 cursor-pointer" onClick={handleRebootTerminal} title="Reboot terminal" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 cursor-pointer" title="Online" />
            </div>
            <span className="w-px h-3 bg-white/10 mx-2" />
            <div className="flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-neon-cyan" />
              <span className="font-semibold text-white tracking-wide">DK-HUD // TECHNICAL TERMINAL v1.0.4</span>
            </div>
          </div>
          <button 
            type="button"
            onClick={handleRebootTerminal} 
            className="text-[10px] text-slate-500 hover:text-neon-cyan flex items-center gap-1 transition-colors uppercase font-bold"
          >
            Reboot HUD
          </button>
        </div>

        {/* Terminal Logs View */}
        <div className="p-5 h-64 overflow-y-auto font-mono text-[11px] leading-relaxed text-emerald-400 bg-black/75 scrollbar-thin select-text">
          <div className="space-y-1.5">
            {terminalHistory.map((line, idx) => {
              let colorClass = "text-emerald-400/90"
              if (line.startsWith(">") || line.startsWith("DK-HUD //")) {
                colorClass = "text-white font-bold"
              } else if (line.startsWith("ERROR") || line.startsWith("COMMAND ERROR")) {
                colorClass = "text-rose-400"
              } else if (line.startsWith("STATUS ASSESSMENT") || line.startsWith("SUCCESS")) {
                colorClass = "text-emerald-300 font-semibold"
              } else if (line.startsWith("[DIAGNOSTIC") || line.startsWith("[SUBJECT") || line.startsWith("Registered")) {
                colorClass = "text-cyan-300 font-bold"
              }
              return (
                <div key={idx} className={`${colorClass} whitespace-pre-wrap`}>
                  {line}
                </div>
              )
            })}
            <div ref={terminalBottomRef} />
          </div>
        </div>

        {/* Terminal Input Form */}
        <form 
          onSubmit={handleTerminalSubmit}
          className="flex items-center px-5 py-3 bg-black/95 border-t border-white/5 font-mono text-[11px] text-emerald-400"
        >
          <span className="text-white font-bold mr-2 select-none">DK-HUD // user@portfolio ~ $</span>
          <input
            type="text"
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            placeholder="Type 'help' or 'skills'..."
            className="flex-grow bg-transparent border-none outline-none font-mono text-[11px] text-white caret-emerald-400 focus:ring-0 placeholder:text-emerald-900/60"
          />
          <button 
            type="submit" 
            className="text-slate-500 hover:text-emerald-400 font-bold text-[10px] uppercase tracking-wider ml-2 transition-colors cursor-pointer"
          >
            EXECUTE
          </button>
        </form>
      </motion.div>

    </section>
  )
}