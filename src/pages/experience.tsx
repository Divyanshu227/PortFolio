import { motion } from 'framer-motion'

interface Job {
  role: string
  company: string
  period: string
  description: string
  tech: string[]
}

const experiences: Job[] = [
  {
    role: "Lead Full Stack & AI Engineer",
    company: "FutureLabs",
    period: "2024 - Present",
    description: "Architected cutting-edge generative AI workflows, custom agent integrations, and scalable cloud-native web applications with ultra-responsive interactive frontends.",
    tech: ["React", "TypeScript", "Python", "LLMs", "Node.js", "AWS"]
  },
  {
    role: "Senior Frontend Developer",
    company: "CyberNet Systems",
    period: "2022 - 2024",
    description: "Designed immersive interactive dashboards, visual analytics suites, and optimized frontend bundle performance, achieving near-perfect lighthouse scores.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS", "WebGL", "Three.js"]
  },
  {
    role: "Software Engineering Intern",
    company: "Symmetric Solutions",
    period: "2021 - 2022",
    description: "Developed and maintained full-stack internal tooling, API integrations, and robust automated end-to-end testing pipelines.",
    tech: ["React", "Express", "PostgreSQL", "Docker", "Jest"]
  }
]

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-6 py-20 select-none"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold font-display text-center mb-16 bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
        My Experience
      </h2>

      <div className="relative border-l border-white/10 ml-4 md:ml-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="mb-12 last:mb-0 relative pl-8 md:pl-12"
          >
            {/* Timeline node */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyber-bg border-2 border-neon-cyan shadow-[0_0_8px_#06b6d4]" />

            <div className="p-6 rounded-2xl glass-panel hover:border-neon-cyan/30 transition-all duration-300">
              <span className="text-xs font-semibold font-mono text-neon-purple tracking-widest uppercase">
                {exp.period}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {exp.role}
              </h3>
              <h4 className="text-sm font-semibold text-slate-400 mb-4">
                {exp.company}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border border-white/5 bg-white/[0.02] text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
