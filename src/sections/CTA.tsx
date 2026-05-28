import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Sparkles, Terminal } from 'lucide-react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && message) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
        setMessage('')
      }, 3000)
    }
  }

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
              <p className="text-[10px] text-neon-purple mt-0.5">{"$ location: NEW_DELHI_IN // 28.61° N, 77.20° E"}</p>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-6 w-full">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full py-16 rounded-2xl border border-neon-cyan/20 bg-neon-cyan/5 backdrop-blur-lg flex flex-col items-center justify-center gap-3 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center mb-2">
                  <Send className="w-5 h-5 text-neon-cyan" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">Signal Transmitted Successfully</h3>
                <p className="text-xs text-slate-400 max-w-xs">
                  Your communication has been securely routed. I'll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-left">
                {/* Email input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">
                    Your Digital Address (Email)
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-5 py-3.5 rounded-xl border border-white/10 bg-white/2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300"
                  />
                </div>

                {/* Message input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">
                    Your Transmission (Message)
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter details of your project, idea, or query..."
                    className="w-full px-5 py-3.5 rounded-xl border border-white/10 bg-white/2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-neon-purple focus:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-neon-purple to-neon-cyan text-white shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-300 cursor-pointer"
                >
                  <span>Transmit Signal</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </div>

        </div>
      </motion.div>
    </section>
  )
}
