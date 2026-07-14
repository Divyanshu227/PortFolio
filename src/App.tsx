import { useState, useEffect, useRef } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import GlowBackground from './components/GlowBackground'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import IntroOverlay from './components/IntroOverlay'
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

        {/* Elegant Cyberpunk Footer */}
        <footer className="w-full max-w-7xl mx-auto px-6 md:px-8 py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 select-none">
          <span className="text-[11px] text-slate-500 font-semibold tracking-widest uppercase">
            © {new Date().getFullYear()} DivyanshuKJ. All Rights Reserved.
          </span>
          <span className="text-[10px] text-slate-600 font-mono tracking-wide">
            engineered with React + TS + Tailwind CSS v4 + Framer Motion
          </span>
        </footer>
      </div>
    </div>
  )
}

export default App
