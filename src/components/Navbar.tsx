import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, Menu, X, Sun, Moon, Maximize2, Minimize2, Volume2, VolumeX } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return saved
    }
    return 'dark'
  })
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('soundEnabled')
      if (saved === 'false') return false
    }
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('soundEnabled', soundEnabled.toString())
  }, [soundEnabled])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen()
        }
      }
    } catch (err) {
      console.error("Fullscreen toggle failed:", err)
    }
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className="sticky top-0 z-50 w-full px-4 md:px-8 py-4 select-none">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl md:rounded-full glass-panel glass-panel-hover transition-all duration-500 shadow-[0_8px_32px_0_rgba(3,2,8,0.5)]">
        {/* Left Section: Logo & Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Stylized geometric logo */}
          <div className="relative cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple to-neon-cyan rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-10 h-10 bg-cyber-bg border border-white/10 rounded-lg flex items-center justify-center font-bold text-xl overflow-hidden">
              <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent font-extrabold font-display">
                DK
              </span>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-neon-cyan rounded-tl-sm shadow-[0_0_8px_#06b6d4]" />
            </div>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[17px] font-bold tracking-wide text-white leading-tight">
              DivyanshuKJ
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
              AI & Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Center Section: Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative text-[14px] font-medium transition-colors duration-300 px-1 py-1 ${isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavDot"
                      className="absolute bottom-[-6px] left-[50%] -translate-x-[50%] w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right Section: Socials & Let's Talk CTA */}
        <div className="hidden md:flex items-center gap-5">
          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={`${import.meta.env.VITE_GITHUB_URL}`}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-neon-cyan transition-colors duration-300"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href={`${import.meta.env.VITE_LINKEDIN_URL}`}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-neon-purple transition-colors duration-300"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
          <div className="w-px h-5 bg-white/10" />

          {/* Theme Toggler */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full border border-white/10 hover:border-neon-cyan/50 hover:bg-white/5 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
            title="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4 text-neon-purple" /> : <Sun className="w-4 h-4 text-neon-cyan" />}
          </button>

          <div className="w-px h-5 bg-white/10" />

          {/* Sound Toggler */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-full border border-white/10 hover:border-neon-cyan/50 hover:bg-white/5 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
            title="Toggle Sound"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-neon-cyan" /> : <VolumeX className="w-4 h-4 text-neon-purple" />}
          </button>

          <div className="w-px h-5 bg-white/10" />

          {/* Fullscreen Toggler */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full border border-white/10 hover:border-neon-cyan/50 hover:bg-white/5 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 text-neon-purple" /> : <Maximize2 className="w-4 h-4 text-neon-cyan" />}
          </button>

          <div className="w-px h-5 bg-white/10" />

          {/* Glowing Let's Talk Button */}
          <Link
            to="/contact"
            className="group relative flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-full border border-white/10 glass-panel overflow-hidden transition-all duration-300 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <span className="relative z-10 text-slate-200 group-hover:text-slate-100 transition-colors">
              Let's Talk
            </span>
            <Send className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        {/* Mobile Menu Icon (Tablet / Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-slate-200 hover:bg-white/5 rounded-lg transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute left-4 right-4 mt-2 p-6 rounded-2xl glass-panel lg:hidden shadow-[0_8px_32px_0_rgba(3,2,8,0.7)] flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-[15px] font-semibold tracking-wide py-2 border-b border-white/5 text-left ${isActive ? 'text-neon-cyan' : 'text-slate-400 hover:text-slate-200'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-4 items-center">
              <a href={`${import.meta.env.VITE_GITHUB_URL}`} className="text-slate-400 hover:text-slate-200">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href={`${import.meta.env.VITE_LINKEDIN_URL}`} className="text-slate-400 hover:text-slate-200">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1.5 rounded-full border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                title="Toggle Theme"
              >
                {theme === 'light' ? <Moon className="w-4 h-4 text-neon-purple" /> : <Sun className="w-4 h-4 text-neon-cyan" />}
              </button>

              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-1.5 rounded-full border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                title="Toggle Sound"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-neon-cyan" /> : <VolumeX className="w-4 h-4 text-neon-purple" />}
              </button>

              <button
                onClick={toggleFullscreen}
                className="p-1.5 rounded-full border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                title="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4 text-neon-purple" /> : <Maximize2 className="w-4 h-4 text-neon-cyan" />}
              </button>
            </div>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-full border border-white/15 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20"
            >
              <span>Let's Talk</span>
              <Send className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
