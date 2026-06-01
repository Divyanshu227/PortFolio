import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlowBackground from './components/GlowBackground'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Skills from './pages/skills'
import Experience from './pages/experience'
import Contact from './pages/contact'

function App() {
  const clicksound = useRef(new Audio("/clicksound.mp3"))

  useEffect(() => {
    const handleclick = () => {
      clicksound.current.currentTime = 0
      clicksound.current.play().catch(() => {})
    }
    document.addEventListener("click", handleclick)
    return () => {
      document.removeEventListener("click", handleclick)
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="relative min-h-screen font-sans selection:bg-neon-cyan/30 selection:text-white overflow-x-hidden antialiased">
        {/* Custom Robotic HUD Cursor */}
        <CustomCursor />

        {/* 1. Dynamic Cyberpunk Glow & Particle Canvas */}
        <GlowBackground />

        {/* 2. Elevated Content Layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Floating glassmorphic header */}
          <Navbar />

          {/* Main layout sections / Pages */}
          <main className="w-full flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
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
    </BrowserRouter>
  )
}

export default App
