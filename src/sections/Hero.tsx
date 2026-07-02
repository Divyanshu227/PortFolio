import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import developerImg from '../assets/outdoor.png'
import leetcodeLogo from '../assets/leetcodeLogo.png'
import codechefLogo from '../assets/codechefLogo.png'
import gfgLogo from '../assets/gfgLogo.png'

export default function Hero() {
  return (
    <section id="home" className="relative max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-16 md:py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 overflow-hidden select-none">
      
      {/* Left Column: Copywriting and CTAs */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex-1 flex flex-col items-start text-left max-w-2xl"
      >
        {/* Opportunity Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neon-purple/20 bg-neon-purple/5 backdrop-blur-md mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide text-purple-200">
            Available for opportunities
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight font-display mb-6 text-white">
          Building Digital Experiences <br />
          <span className="text-white">with </span>
          <span className="text-gradient-purple-blue font-extrabold">
            Code & Creativity
          </span>
        </h1>

        {/* Hero Description */}
        <p className="text-[15px] sm:text-[17px] text-slate-400 leading-relaxed font-light mb-8 max-w-xl">
          I'm <span className="text-slate-200 font-medium">Divyanshu</span>, a passionate developer who loves building modern, scalable, and intelligent web applications that merge high technical fidelity with gorgeous aesthetics.
        </p>

        {/* Hero Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          {/* View My Work Button */}
          <Link
            to="/projects"
            className="group relative flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-neon-purple to-neon-blue text-white overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>

          {/* Download Resume Button */}
          <a
          target='_blank'
            href="https://www.dropbox.com/scl/fi/ojd7ya96eooq8zl2bm7h5/DivyanshuKumarJha__Resume.pdf?rlkey=en7n259xy624g8a5c1u4i93vg&st=a3ts9zqt&dl=0"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-slate-300 border border-white/10 glass-panel hover:border-white/20 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Download Resume</span>
            <Download className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 group-hover:text-white transition-all" />
          </a>
        </div>

        {/* Coding Profiles Row */}
        <div className="mt-10 flex flex-wrap items-center gap-5 text-sm font-sans text-slate-400">
          <span className="font-mono uppercase tracking-widest text-[11px] text-slate-500 font-bold">Coding Profiles:</span>
          <div className="flex flex-wrap items-center gap-4">
            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/Divyanshu_KJ/"
              target="_blank"
              rel="noreferrer"
              title="LeetCode Profile"
              className="px-5 py-2.5 rounded-2xl bg-black border border-[#FFA116]/25 hover:border-[#FFA116] text-slate-300 hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer hover:shadow-[0_0_20px_rgba(255,161,22,0.3)]"
            >
              <img src={leetcodeLogo} alt="LeetCode" className="h-6 object-contain" />
            </a>

            {/* CodeChef */}
            <a
              href="https://www.codechef.com/users/divyanshu_4495"
              target="_blank"
              rel="noreferrer"
              title="CodeChef Profile"
              className="px-5 py-2.5 rounded-2xl bg-white border border-[#5B4636]/35 hover:border-[#967d6c] text-slate-300 hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer hover:shadow-[0_0_20px_rgba(150,125,108,0.3)]"
            >
              <img src={codechefLogo} alt="CodeChef" className="h-6 object-contain" />
            </a>

            {/* GeeksforGeeks */}
            <a
              href="https://www.geeksforgeeks.org/user/divyanshuk1twv/"
              target="_blank"
              rel="noreferrer"
              title="GeeksforGeeks Profile"
              className="px-5 py-2.5 rounded-2xl bg-white border border-[#2F8D46]/25 hover:border-[#2F8D46] text-slate-300 hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer hover:shadow-[0_0_20px_rgba(47,141,70,0.3)]"
            >
              <img src={gfgLogo} alt="GeeksforGeeks" className="h-6 object-contain" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Cyber Robot Profile Hologram */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="flex-1 flex items-center justify-center relative w-full max-w-[450px] lg:max-w-none"
      >
        {/* Holographic Glowing Base Elements */}
        <div className="relative flex items-center justify-center w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">
          
          {/* Pulsating Blue Glow Circle - Backing Halo */}
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-neon-blue/30 scale-95"
          />

          {/* Solid Glowing Dual-Color Gradient Circle Boundary */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-[92%] h-[92%] rounded-full bg-gradient-to-tr from-neon-purple via-neon-blue to-neon-cyan p-[2px] shadow-[0_0_40px_rgba(59,130,246,0.45),0_0_80px_rgba(168,85,247,0.3),inset_0_0_20px_rgba(6,182,212,0.15)] flex items-center justify-center"
          >
            {/* Inner content clip (black base) */}
            <div className="w-full h-full rounded-full bg-[#000000] flex items-center justify-center overflow-hidden relative">
              
              {/* The Developer Image Asset */}
              <motion.img
                src={developerImg}
                alt="Divyanshu - AI & Full Stack Developer"
                className="w-[102%] h-[102%] object-cover select-none pointer-events-none animate-float"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />

              {/* Glowing cyan scanner line overlays */}
              <motion.div 
                animate={{
                  top: ['-20%', '120%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent shadow-[0_0_15px_#06b6d4]"
              />
            </div>
          </motion.div>

          {/* Interactive visual ornaments */}
          <div className="absolute top-2 left-6 w-3 h-3 bg-neon-cyan rounded-full shadow-[0_0_8px_#06b6d4]" />
          <div className="absolute bottom-6 right-6 w-2.5 h-2.5 bg-neon-purple rounded-full shadow-[0_0_8px_#a855f7]" />
        </div>
      </motion.div>

    </section>
  )
}
