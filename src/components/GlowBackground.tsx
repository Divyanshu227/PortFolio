import { motion } from "framer-motion"; 
export default function GlowBackground(){
    const streaks  =Array.from({length:28}, (_,i)=>{
        const colors =[
            'rgba(31, 0, 60, 0.45)', // Neon Purple
            'rgba(0, 34, 89, 0.45)',  // Neon Blue
            'rgba(0, 45, 53, 0.45)',   // Neon Cyan
        ]
        const colorIndex = Math.floor(Math.random() * colors.length);
        return {
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 120 - 10,
      width: Math.random() * 1.5 + 0.8, // extremely fine
      height: Math.random() * 70 + 30, // 30px to 100px
      color: colors[colorIndex],
      duration: Math.random() * 18 + 14,
      delay: Math.random() * -30,
    }
    })

    return(
        <>
        <div className ="fixed inset-0 z-0 w-full h-full bg-[#050212] overflow-hidden select-none pointer-events-none">
            {/* 1. Moving Cyber Grid Overlay - Dimmed to be extremely faint */}
            <div className="absolute inset-0 bg-grid-pattern animate-grid-move opacity-15">
                
      {/* 2. Vertical Ambient Laser Rays/Tracks - Very subtle */}
      <div className="absolute inset-0 flex justify-around pointer-events-none opacity-10">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent blur-[1px]" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-neon-blue to-transparent blur-[1.5px] hidden md:block" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent blur-[1px]" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent blur-[1.5px] hidden lg:block" />
      </div>
            {/* 3. Soft Radial Glows - Faded down to maintain a very dark blackish sky */}
      {/* Deep Purple Glow - Top Left */}
      <div
        className="absolute top-[-20%] left-[-20%] w-[65vw] h-[65vw] rounded-full opacity-15 blur-[140px] bg-neon-purple animate-pulse-slow"
        style={{ animationDelay: '0s' }}
      />

      {/* Glowing Neon Blue Glow - Behind the Robot (Top Right) */}
      <div
        className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full opacity-18 blur-[150px] bg-neon-blue animate-pulse-slow"
        style={{ animationDelay: '2s' }}
      />

      {/* Radiant Cyan Glow - Center / Bottom Right */}
      <div
        className="absolute bottom-[-20%] right-[10%] w-[55vw] h-[55vw] rounded-full opacity-8 blur-[130px] bg-neon-cyan animate-pulse-slow"
        style={{ animationDelay: '4s' }}
      />

      {/* 4. High-tech Vertical Neon Data Streaks */}
      <div className="absolute inset-0 overflow-hidden">
        {streaks.map((streak) => (
          <motion.div
            key={streak.id}
            className="absolute rounded-full"
            style={{
              left: `${streak.x}%`,
              top: `${streak.y}%`,
              width: streak.width,
              height: streak.height,
              background: `linear-gradient(to bottom, transparent 0%, ${streak.color} 50%, transparent 100%)`,
              boxShadow: `0 0 10px ${streak.color}, 0 0 3px ${streak.color}`,
            }}
            animate={{
              y: ['0vh', '-110vh'],
              opacity: [0, 0.75, 0.75, 0],
            }}
            transition={{
              duration: streak.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: streak.delay,
            }}
          />
        ))}
      </div>

      {/* Ambient dark bottom layer - transparent at top, extremely subtle dark bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050212] via-transparent to-transparent opacity-50" />
    </div>
    </div>
    </>
    )
};

