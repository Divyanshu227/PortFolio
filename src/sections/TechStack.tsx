import { motion } from 'framer-motion'

interface TechItem {
  name: string
  color: string
  logo: React.ReactNode
}

export default function TechStack() {
  const techs: TechItem[] = [
    {
      name: 'React',
      color: 'text-cyan-400',
      logo: (
        <svg className="w-5 h-5 animate-[spin_10s_linear_infinite]" viewBox="0 0 256 222">
          <path fill="#00D8FF" d="M128 99.4a23 23 0 1 0 0 43.2 23 23 0 1 0 0-43.2zm119-14.7c-5.4-8.8-19.1-17-37.4-22.7 8.2-18.4 12-32.9 10.3-40.4-2.8-12.7-14.1-19.4-27-15.6-11.8 3.5-25.5 13.9-38.3 28a176.6 176.6 0 0 0-56.6-9.2 176.6 176.6 0 0 0-56.6 9.2c-12.8-14-26.5-24.5-38.3-28-12.9-3.8-24.2 2.9-27 15.6-1.7 7.5 2.1 22 10.3 40.4-18.3 5.7-32 13.9-37.4 22.7-7.9 13-.3 28.4 15 31.8 7.3 1.6 16.8 1.4 27.2-.6-1.8 9.3-2.6 18.2-2.3 26.2a99.4 99.4 0 0 0 5.4 28.5c-7.3 8.3-13.6 17-18.5 25.4-8.5 14.5-9 26.9-1.2 31.8 4 2.5 8.7 3.5 13.9 3.5a30.4 30.4 0 0 0 13.4-3.2c16-8.9 28.7-27 37.8-49a174 174 0 0 0 54.4 8.7c18.5 0 36.8-3 54.4-8.7 9 22 21.8 40 37.8 49a30.4 30.4 0 0 0 13.4 3.2c5.2 0 10-.9 14-3.5 7.7-5 7.2-17.3-1.3-31.8-4.9-8.4-11.2-17.1-18.5-25.4a99.4 99.4 0 0 0 5.4-28.5c.3-8-.5-17-2.3-26.2 10.4 2 20 2.2 27.2.6 15.3-3.4 22.9-18.8 15-31.8zm-225.2 30c-11-2.4-15.6-10.4-11-18 3.8-6.1 13.6-12.3 27-16.7 5 11 11.2 22.7 18.5 34.3a123 123 0 0 1-34.5.4zm36.8-59.5c-6.2-14-9-24.6-7.8-29.6 1.2-5.4 7-8.1 13-6.3 8.2 2.4 19.3 11 30.3 22.8a192.5 192.5 0 0 1-35.5 13.1zm12.5 70.3a86.6 86.6 0 0 1-4.7-24.8c-.3-6.7.4-14.2 1.8-22a160 160 0 0 1 45.4 21.7 158 158 0 0 1-42.5 25.1zm41.6-96.2a159.2 159.2 0 0 1 48.6-8.3c17.2 0 33.7 2.8 48.6 8.3a159.2 159.2 0 0 1-42.6 23.3 159.2 159.2 0 0 1-54.6-23.3zm21.4 56.4a142 142 0 0 0-41-19.6c11.7-8.5 24.3-15.2 37.4-20 6 7.4 12.3 15.5 18.7 24.2a144 144 0 0 0-15.1 15.4zm23.6-41c10-3.6 20.6-5.8 31.4-6.6a144 144 0 0 0-18.7 32 142.3 142.3 0 0 0-12.7-25.4zm38.7 87a158.4 158.4 0 0 1-43 0 159.6 159.6 0 0 1 21.5-35.3 159.6 159.6 0 0 1 21.5 35.3zm12.7-61.6c10.8.8 21.4 3 31.4 6.6a142.3 142.3 0 0 0-12.7 25.4 144 144 0 0 0-18.7-32zm20.8 16.4c13 4.8 25.7 11.5 37.4 20a144 144 0 0 0-15.1-15.4c6.4-8.7 12.7-16.8 18.7-24.2zm23 20c24 10.4 38.6 18.6 42.4 24.9 1.2 5-1.6 11-7.8 13-11 3.5-22-.9-30.3-6.2a192.5 192.5 0 0 1-4.3-31.7zm12.3 15a158 158 0 0 1-42.5-25.1 160 160 0 0 1 45.4-21.7c1.4 7.8 2.1 15.3 1.8 22a86.6 86.6 0 0 1-4.7 24.8zm-15.3 43.6c-7.3-11.6-13.5-23.3-18.5-34.3 13.4 4.4 23.2 10.6 27 16.7 4.6 7.6 0 15.6-11 18a123 123 0 0 1-34.5-.4zM128 158.7a87 87 0 0 1-52.6-17.7 159 159 0 0 1 105.2 0A87 87 0 0 1 128 158.7zm71 45.8c-10 5.6-21.4 8.7-31.5 10-4.6.6-8-.6-9-4-1.2-5 1.5-15.6 7.7-29.6a192.5 192.5 0 0 1 32.8 23.6zm-17-38.3a144.5 144.5 0 0 0-41 19.6 144 144 0 0 0-15-15.4c6.3-8.7 12.6-16.8 18.6-24.2a142 142 0 0 0 37.4 20zm-49.8 41.5a142.3 142.3 0 0 0-12.7-25.4 144 144 0 0 0-18.7 32c10.8-.8 21.4-3 31.4-6.6zm-28.7-18c-6-7.4-12.3-15.5-18.7-24.2a144 144 0 0 0-15.1 15.4c11.7 8.5 24.3 15.2 37.4 20a142 142 0 0 0-3.6-11.2zm-28.8 8.6a144 144 0 0 0-18.7-32 142.3 142.3 0 0 0-12.7 25.4c10 3.6 20.6 5.8 31.4 6.6zm-22.3 12.3c-1-3.4 2.4-4.6 7-4 10.1 1.3 21.5 4.4 31.5 10a192.5 192.5 0 0 1 32.8-23.6c6.2 14 8.9 24.6 7.7 29.6-1 3.4-4.4 4.6-9 4z"/>
        </svg>
      ),
    },
    {
      name: 'Next.js',
      color: 'text-slate-100',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="64" fill="black"/>
          <circle cx="64" cy="64" r="62.5" stroke="white" strokeWidth="3" strokeOpacity="0.1"/>
          <path d="M96 95L58 48H48V80H54V55L88 97C91 94.2 93.6 91.2 96 88V95Z" fill="white"/>
          <rect x="79" y="48" width="6" height="32" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      color: 'text-blue-400',
      logo: (
        <svg className="w-5 h-5 rounded" viewBox="0 0 256 256" fill="none">
          <rect width="256" height="256" fill="#3178C6" rx="8" />
          <path d="M140.06 179.91c0 8.01 2.37 13.9 7.12 17.65 4.74 3.75 11.2 5.63 19.38 5.63 8.35 0 14.86-2 19.53-6 4.67-4.01 7.01-9.97 7.01-17.88 0-6.85-1.95-12.06-5.86-15.63-3.9-3.57-10.42-7.14-19.53-10.71-12.03-4.75-20.9-9.52-26.62-14.3-5.72-4.79-8.58-11.83-8.58-21.1 0-9.8 3.51-17.52 10.53-23.16 7.02-5.63 16.54-8.45 28.57-8.45 10.39 0 19.14 2.27 26.24 6.82 7.1 4.54 11.2 11.08 12.3 19.61h-17.15c-1.04-4.6-3.21-8.08-6.5-10.44-3.29-2.35-7.92-3.53-13.88-3.53-7.58 0-13.25 1.7-17 5.1-3.75 3.4-5.63 8.16-5.63 14.28 0 5.49 1.7 9.87 5.1 13.14 3.4 3.26 9.4 6.53 18 9.8 12.63 4.75 21.94 9.6 27.93 14.54 6 4.95 9 12.19 9 21.72 0 10.39-3.72 18.72-11.16 24.97-7.44 6.25-17.8 9.38-31.08 9.38-11.8 0-21.36-2.58-28.69-7.75-7.32-5.17-11.45-12.67-12.38-22.5h17.91zm-78.3-54.85h-29.6v-15.11h76.35v15.11h-29.6v101.44h-17.15v-101.44z" fill="#FFF"/>
        </svg>
      ),
    },
    {
      name: 'Node.js',
      color: 'text-emerald-400',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 256 288" fill="none">
          <path d="M128 0L24.8 59.6v119.2L128 238.4l103.2-59.6V59.6L128 0z" fill="#339933" />
          <path d="M128 21.7L43.6 70.4v97.6L128 216.7l84.4-48.7V70.4L128 21.7z" fill="#43853D" />
          <path d="M128 50v138.4l60-34.6V84.6L128 50z" fill="#339933" />
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      color: 'text-green-500',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 256 560" fill="none">
          <path d="M136.6 0C132.8 0 71.9 143.3 71.9 253.9c0 98.7 41.5 159.2 64.7 186.2l3.4 3.9V0h-3.4z" fill="#499D4A"/>
          <path d="M136.6 0v444l3.4-3.9c23.2-27 64.7-87.5 64.7-186.2C204.7 143.3 140.4 0 136.6 0z" fill="#589636"/>
          <path d="M136.6 444c-22.1 0-77.5-62.8-77.5-190.1 0-96.1 46.4-203.2 74-245.5L136.6 0v444z" fill="#41B847"/>
          <path d="M136.6 444v116c0 10.6 3.4 12.3 3.4 12.3v-128.3L136.6 444z" fill="#3F3E3F"/>
          <path d="M136.6 444l-3.4.3v128c0 0 3.4-1.7 3.4-12.3V444z" fill="#10AA50"/>
        </svg>
      ),
    },
    {
      name: 'Tailwind',
      color: 'text-cyan-400',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 256 154" fill="none">
          <path d="M128 0C90.2 0 66.8 18.9 57.8 56.8c13.4-18.9 29-25.6 46.8-20 10.1 3.2 17.3 10.5 25.3 18.7 13 13.4 28 28.9 62.1 28.9 37.8 0 61.2-18.9 70.2-56.8-13.4 18.9-29 25.6-46.8 20-10.1-3.2-17.3-10.5-25.3-18.7C177 15.6 162 0 128 0zM57.8 84.4C20 84.4 7.8 103.3 0 141.2c13.4-18.9 29-25.6 46.8-20 10.1 3.2 17.3 10.5 25.3 18.7 13 13.4 28 28.9 62.1 28.9 37.8 0 61.2-18.9 70.2-56.8-13.4 18.9-29 25.6-46.8 20-10.1-3.2-17.3-10.5-25.3-18.7-13-13.4-28-28.9-62.1-28.9z" fill="#06B6D4"/>
        </svg>
      ),
    },
    {
      name: 'Python',
      color: 'text-yellow-500',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 256 256" fill="none">
          <path d="M126.9 0c-26.6 0-51.5 2-63.5 5.8-24 7.6-25.4 21.6-25.4 39.8v29.4h89.8V80H42.7C21.7 80 0 91.5 0 126.9c0 37.4 17 48.7 39.8 48.7h18.3v-25.8c0-26.6 21.8-48.4 48.4-48.4h63.2c26.6 0 48.4-21.8 48.4-48.4V24.5C218 5.7 186.2 0 126.9 0z" fill="#3776AB"/>
          <path d="M129.1 256c26.6 0 51.5-2 63.5-5.8 24-7.6 25.4-21.6 25.4-39.8v-29.4H128.2v-5H213.3c21 0 42.7-11.5 42.7-46.9 0-37.4-17-48.7-39.8-48.7H198v25.8c0 26.6-21.8 48.4-48.4 48.4h-63.2c-26.6 0-48.4 21.8-48.4 48.4v28.2c0 18.8 31.8 24.5 91.1 24.5z" fill="#FFE873"/>
          <circle cx="82.4" cy="27.8" r="7.8" fill="#FFF"/>
          <circle cx="174" cy="227.8" r="7.8" fill="#111"/>
        </svg>
      ),
    },
    {
      name: 'Git',
      color: 'text-orange-500',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 256 256" fill="none">
          <path d="M250.2 121.2L134.8 5.8c-7.7-7.7-20.2-7.7-27.9 0L87 25.7l30 30c8.8-3 18.7-.3 25.3 6.3 6.6 6.6 9.3 16.5 6.3 25.3l30 30c8.8-3 18.7-.3 25.3 6.3 9.2 9.2 9.2 24.2 0 33.4-9.2 9.2-24.2 9.2-33.4 0-6.6-6.6-9.3-16.5-6.3-25.3l-30-30v49.8c3 3 5 7.1 5 11.6 0 9.2-7.5 16.7-16.7 16.7s-16.7-7.5-16.7-16.7c0-4.5 2-8.6 5-11.6V98.1c-3-3-5-7.1-5-11.6 0-4.5 2-8.6 5-11.6l-30-30L5.8 121.2c-7.7 7.7-7.7 20.2 0 27.9l115.4 115.4c7.7 7.7 20.2 7.7 27.9 0l101.1-101.1c7.7-7.8 7.7-20.3 0-28z" fill="#F05032" />
        </svg>
      ),
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 select-none overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full flex items-center justify-between px-6 md:px-8 py-5 rounded-2xl glass-panel relative overflow-hidden"
      >
        {/* Visual glow overlay inside card */}
        <div className="absolute top-0 right-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />

        {/* Content wrapper */}
        <div className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-4 overflow-hidden">
          {/* Label Header */}
          <div className="flex-shrink-0 flex items-center justify-start md:border-r border-white/10 md:pr-8 h-8">
            <span className="text-[11px] font-bold tracking-[0.25em] text-neon-purple/90 font-display">
              TECH STACK
            </span>
          </div>

          {/* Scrolling / Flex Tech list */}
          <div className="flex-grow flex items-center justify-between w-full md:w-auto overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex items-center gap-6 sm:gap-8 md:gap-10 py-1 px-2 mx-auto md:mx-0">
              {techs.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex items-center gap-2 group cursor-pointer flex-shrink-0"
                >
                  <div className="relative p-1 rounded-lg group-hover:bg-white/5 transition-colors duration-300">
                    {tech.logo}
                  </div>
                  <span className="text-[13px] font-semibold text-slate-300 group-hover:text-slate-100 transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Muted End Action */}
          <div className="flex-shrink-0 flex items-center md:pl-6 md:border-l border-white/10">
            <a
              href="#skills"
              className="text-xs font-semibold text-slate-400 hover:text-neon-cyan flex items-center gap-1 transition-colors duration-300 group"
            >
              <span>and more...</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
