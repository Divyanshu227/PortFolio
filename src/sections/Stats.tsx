import { motion } from 'framer-motion'
import { FolderGit2, Network, Cpu, Atom } from 'lucide-react'

interface StatItem {
  icon: React.ReactNode
  value: string
  label: string
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      icon: <FolderGit2 className="w-5 h-5 text-neon-purple drop-shadow-[0_0_6px_rgba(168,85,247,0.7)]" />,
      value: '10+',
      label: 'Projects Completed',
    },
    {
      icon: <Network className="w-5 h-5 text-neon-purple drop-shadow-[0_0_6px_rgba(168,85,247,0.7)]" />,
      value: '2+',
      label: 'Years of Experience',
    },
    {
      icon: <Cpu className="w-5 h-5 text-neon-purple drop-shadow-[0_0_6px_rgba(168,85,247,0.7)]" />,
      value: '2000+',
      label: 'Problems Solved',
    },
    {
      icon: <Atom className="w-5 h-5 text-neon-purple drop-shadow-[0_0_6px_rgba(168,85,247,0.7)]" />,
      value: '100%',
      label: 'Passion for Code',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full grid grid-cols-2 lg:grid-cols-4 gap-y-8 py-7 md:py-6 rounded-2xl glass-panel relative overflow-hidden"
      >
        {/* Soft grid highlights */}
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-white/5 via-transparent to-transparent hidden lg:block" />
        <div className="absolute top-0 left-2/3 w-[1px] h-full bg-gradient-to-b from-white/5 via-transparent to-transparent hidden lg:block" />

        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex items-center justify-center gap-4 px-6 ${
              index !== stats.length - 1 ? 'lg:border-r border-white/5' : ''
            } ${index % 2 === 0 ? 'border-r border-white/5 lg:border-r-0' : ''}`}
          >
            {/* Pulsating background ring for icon */}
            <div className="relative w-10 h-10 rounded-xl bg-neon-purple/5 border border-neon-purple/10 flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 rounded-xl bg-neon-purple/10 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-[4px]" />
              {stat.icon}
            </div>

            {/* Stat info */}
            <div className="flex flex-col text-left">
              <span className="text-xl md:text-2xl font-extrabold text-slate-100 tracking-tight leading-none font-display">
                {stat.value}
              </span>
              
              <span className="text-[10px] md:text-xs text-slate-400 font-medium tracking-wide uppercase mt-1">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
