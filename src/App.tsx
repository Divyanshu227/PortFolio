import GlowBackground from './components/GlowBackground'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TechStack from './sections/TechStack'
import FeaturedProjects from './sections/FeaturedProjects'
import Stats from './sections/Stats'
import CTA from './sections/CTA'

function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-neon-cyan/30 selection:text-white overflow-x-hidden antialiased">
      {/* Custom Robotic HUD Cursor */}
      <CustomCursor />

      {/* 1. Dynamic Cyberpunk Glow & Particle Canvas */}
      <GlowBackground />

      {/* 2. Elevated Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Floating glassmorphic header */}
        <Navbar />

        {/* Main layout sections */}
        <main className="w-full flex-grow">
          {/* Hero Section featuring the floating AI Illustration profile */}
          <Hero />

          {/* Brand Tech Stack Row */}
          <TechStack />

          {/* Grid of Interactive Showcase Cards */}
          <FeaturedProjects />

          {/* Bottom Stats Dashboard Dashboard */}
          <Stats />

          {/* Contact/CTA Transmission Signal Box */}
          <CTA />
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
