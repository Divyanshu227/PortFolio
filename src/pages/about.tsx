import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-6 py-20 text-center select-none"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold font-display mb-6 bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
        About Me
      </h2>
      <p className="text-[15px] sm:text-[17px] text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
        I'm a passionate AI & Full Stack Developer who loves to engineer sleek, high-performance web applications and design intelligent systems. Let's build something exceptional.
      </p>
      <div className="grid md:grid-cols-2 gap-6 text-left">
        <div className="p-6 rounded-2xl glass-panel hover:border-neon-purple/50 transition-colors duration-300">
          <h3 className="text-lg font-bold text-white mb-2">My Philosophy</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            I believe code is not just instructions for computers, but a medium of expression. Visual aesthetics and seamless performance should always coexist.
          </p>
        </div>
        <div className="p-6 rounded-2xl glass-panel hover:border-neon-cyan/50 transition-colors duration-300">
          <h3 className="text-lg font-bold text-white mb-2">My Focus</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Deeply interested in full-stack ecosystems, modern frontend visual architecture, interactive graphics, and generative AI agent workflows.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
