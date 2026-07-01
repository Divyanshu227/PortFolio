import { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function GlowBackground() {
  const stars = useMemo(
    () =>
      [
        { left: '5%', top: '12%', size: 1, delay: 0 },
        { left: '11%', top: '22%', size: 2, delay: 1.2 },
        { left: '16%', top: '7%', size: 1, delay: 0.6 },
        { left: '24%', top: '18%', size: 1.5, delay: 1.8 },
        { left: '33%', top: '10%', size: 1, delay: 0.9 },
        { left: '42%', top: '20%', size: 2, delay: 2.1 },
        { left: '49%', top: '13%', size: 1, delay: 1.5 },
        { left: '57%', top: '26%', size: 1.5, delay: 0.3 },
        { left: '63%', top: '16%', size: 1, delay: 1.7 },
        { left: '71%', top: '9%', size: 2, delay: 0.8 },
        { left: '77%', top: '21%', size: 1, delay: 1.4 },
        { left: '83%', top: '14%', size: 1.5, delay: 2.4 },
        { left: '89%', top: '11%', size: 1, delay: 0.5 },
        { left: '94%', top: '24%', size: 2, delay: 1.1 },
      ],
    [],
  )

  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden select-none pointer-events-none bg-[#000105] glow-background-root">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(142,58,255,0.28)_0%,rgba(43,40,114,0.16)_22%,transparent_48%),radial-gradient(circle_at_76%_28%,rgba(74,115,255,0.24)_0%,transparent_38%),radial-gradient(circle_at_26%_22%,rgba(109,40,217,0.14)_0%,transparent_40%),linear-gradient(180deg,#02020a_0%,#03020d_34%,#020208_58%,#000000_100%)] glow-background-gradient" />

      <div className="absolute inset-0 opacity-[0.18] mix-blend-screen bg-grid-pattern animate-grid-move mask-[radial-gradient(circle_at_center,black_40%,transparent_85%)] glow-background-grid" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_42%,rgba(0,0,0,0.7)_100%)] glow-background-vignette" />

      <div className="absolute inset-x-0 top-0 h-[58vh] glow-background-radial-blurs">
        <div className="absolute left-[8%] top-[18%] h-[34vw] w-[34vw] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.24)_0%,rgba(168,85,247,0.14)_18%,rgba(59,130,246,0.08)_38%,transparent_72%)] blur-[110px]" />
        <div className="absolute right-[8%] top-[4%] h-[42vw] w-[42vw] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.28)_0%,rgba(59,130,246,0.12)_18%,rgba(168,85,247,0.08)_40%,transparent_70%)] blur-[120px]" />
        <div className="absolute right-[12%] top-[11%] h-[20vw] w-[20vw] rounded-full border border-white/10 shadow-[0_0_80px_rgba(168,85,247,0.32),0_0_140px_rgba(59,130,246,0.22)]" />
        <div className="absolute right-[15%] top-[14%] h-[14vw] w-[14vw] rounded-full border border-white/8 shadow-[0_0_40px_rgba(168,85,247,0.45)]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[78vh] opacity-70 glow-background-grid-lines">
        <div className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-transparent via-white/18 to-transparent" style={{ left: '18%' }} />
        <div className="absolute top-0 h-full w-px bg-linear-to-b from-transparent via-white/10 to-transparent" style={{ left: '42%' }} />
        <div className="absolute top-0 h-full w-px bg-linear-to-b from-transparent via-white/16 to-transparent" style={{ left: '70%' }} />
      </div>

      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <motion.span
            key={`${star.left}-${star.top}-${index}`}
            className="absolute rounded-full bg-white glow-background-star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              boxShadow: '0 0 8px rgba(255,255,255,0.55), 0 0 18px rgba(168,85,247,0.18)',
            }}
            animate={{ opacity: [0.2, 0.95, 0.2], scale: [0.9, 1.25, 0.9] }}
            transition={{
              duration: 3.2 + index * 0.12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-linear-to-t from-black via-black/85 to-transparent glow-background-bottom-fade" />
    </div>
  )
}
