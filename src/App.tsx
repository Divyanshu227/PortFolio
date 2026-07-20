import { useState, useEffect, useRef } from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Terminal, ChevronRight } from 'lucide-react'
import { Icon } from '@iconify/react'
import GlowBackground from './components/GlowBackground'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import IntroOverlay from './components/IntroOverlay'
import Global3DBackground from './components/Global3DBackground'
import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/projects'
import Experience from './pages/experience'
import Contact from './pages/contact'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  const clicksound = useRef(new Audio("/clicksound.mp3"))

  useEffect(() => {
    const handleclick = () => {
      if (localStorage.getItem("soundEnabled") === "false") return
      clicksound.current.currentTime = 0
      clicksound.current.play().catch(() => {})
    }
    document.addEventListener("click", handleclick)
    return () => {
      document.removeEventListener("click", handleclick)
    }
  }, [])

  return (
    <div className="relative min-h-screen font-sans selection:bg-neon-cyan/30 selection:text-white overflow-x-hidden antialiased">
      {/* Cinematic Intro Video Overlay */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            key="intro-video-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-[9999]"
          >
            <IntroOverlay onComplete={() => setShowIntro(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Robotic HUD Cursor */}
      <CustomCursor />

      {/* 1. Dynamic Cyberpunk Glow & Particle Canvas */}
      <GlowBackground />
      
      {/* 1.5 Global 3D Particle Field */}
      <Global3DBackground />

      {/* 2. Elevated Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Floating glassmorphic header */}
        <Navbar />

        {/* Main layout sections */}
        <main className="w-full flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Expanded Cyberpunk Footer */}
        <footer className="w-full mt-auto relative z-10 bg-black/40 border-t border-white/10 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
              
              {/* Brand & Telemetry */}
              <div className="col-span-1 md:col-span-2 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-6 h-6 text-neon-cyan" />
                  <span className="text-xl font-display font-bold text-slate-100 tracking-wide">
                    DK<span className="text-neon-cyan">_</span>HUD
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-[1.6] max-w-sm">
                  Full-stack engineering & security-focused application development. Building the digital infrastructure of tomorrow.
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-mono text-slate-500 tracking-wide">SYSTEM ONLINE // SECURE NODE</span>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-200 tracking-wide uppercase">Directory</h3>
                <ul className="space-y-3 text-sm text-slate-400 font-medium">
                  {['Projects', 'Skills', 'Experience', 'About'].map((item) => (
                    <li key={item}>
                      <Link 
                        to={`/${item.toLowerCase()}`} 
                        className="hover:text-neon-cyan transition-colors flex items-center gap-1.5 group w-fit"
                      >
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-neon-cyan" />
                        <span>{item}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Connections */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-200 tracking-wide uppercase">Network</h3>
                <div className="flex flex-wrap gap-3">
                  <a href={import.meta.env.VITE_GITHUB_URL || "https://github.com"} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-slate-300 hover:text-white transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <Icon icon="simple-icons:github" className="w-4 h-4" />
                  </a>
                  <a href={import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com"} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-neon-blue/50 hover:bg-neon-blue/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] text-slate-300 hover:text-neon-blue transition-all hover:scale-105">
                    <Icon icon="simple-icons:linkedin" className="w-4 h-4" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/50 hover:bg-sky-400/10 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] text-slate-300 hover:text-sky-400 transition-all hover:scale-105">
                    <Icon icon="simple-icons:x" className="w-4 h-4" />
                  </a>
                  <Link to="/contact" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/50 hover:bg-neon-cyan/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] text-slate-300 hover:text-neon-cyan transition-all hover:scale-105">
                    <Mail className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 select-none">
              <span className="text-[13px] text-slate-500 font-semibold tracking-wide">
                © {new Date().getFullYear()} DivyanshuKJ. All Rights Reserved.
              </span>
              <div className="flex items-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
                <span className="text-[12px] text-slate-500 font-mono tracking-wide">
                  Engineered with React + TS + Tailwind CSS + Framer Motion
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
