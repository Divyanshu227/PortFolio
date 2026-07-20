import { motion } from 'framer-motion'
import { Send, Sparkles, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 md:px-8 py-16 select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full rounded-3xl glass-panel relative overflow-hidden p-8 md:p-12 lg:p-16 shadow-[0_20px_50px_rgba(3,2,8,0.7)]"
      >
        {/* Glow ambient background inside the card */}
        <div className="absolute top-[-50%] right-[-20%] w-[60%] h-[100%] rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-50%] left-[-20%] w-[60%] h-[100%] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Direct Hook */}
          <div className="lg:col-span-6 text-left flex flex-col items-start">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 backdrop-blur-md mb-6">
              <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
              <span className="text-[10px] font-bold tracking-wider text-cyan-200 uppercase">
                Let's Collaborate
              </span>
            </div>

            {/* Display Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight font-display mb-4 text-slate-100">
              Ready to co-create the <br />
              <span className="text-gradient-purple-blue">next digital frontier?</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-[15px] text-slate-400 leading-relaxed font-light mb-8 max-w-lg">
              Whether you want to build a highly intelligent AI application, scale a cloud-native platform, or just talk tech, let's establish a connection and make it happen.
            </p>

            {/* Terminal status box */}
            <div className="w-full max-w-md rounded-xl border border-white/5 bg-black/40 p-4 font-mono text-xs text-slate-500">
              <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-2">
                <Terminal className="w-3.5 h-3.5 text-neon-cyan" />
                <span>transmission_terminal.sh</span>
              </div>
              <p className="text-[10px] text-slate-400">{"$ status: READY_FOR_SIGNAL"}</p>
              <p className="text-[10px] text-neon-purple mt-0.5">{"$ routing: SECURE_NODE"}</p>
            </div>
          </div>

          {/* Right Column: Redirect to Secure Node */}
          <div className="lg:col-span-6 w-full flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full p-8 md:p-10 rounded-2xl border border-neon-cyan/20 bg-black/40 backdrop-blur-lg flex flex-col items-center justify-center gap-5 text-center shadow-[0_0_30px_rgba(6,182,212,0.1)]"
            >
              <div className="w-16 h-16 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center mb-2">
                <Send className="w-7 h-7 text-neon-cyan" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 font-display">Establish Secure Connection</h3>
              <p className="text-sm text-slate-400 max-w-sm mb-2">
                Route your communication through the secure gateway portal to ensure end-to-end encryption.
              </p>
              
              <Link to="/contact" className="w-full block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-neon-purple to-neon-cyan text-white shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-300 cursor-pointer"
                >
                  <span>Open Gateway Portal</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  )
}
