import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

interface Ripple {
  id: number
  x: number
  y: number
}

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  const [ripples, setRipples] = useState<Ripple[]>([])

  // Fast-tracking variables for instant-feedback inner reticle
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Fluid physics-based springs for outer atmospheric lagging rings
  const springConfig = { damping: 28, stiffness: 180, mass: 0.6 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Fast tracking spring config for inner reticle to ensure it feels responsive
  const fastSpringConfig = { damping: 15, stiffness: 600, mass: 0.1 }
  const fastX = useSpring(mouseX, fastSpringConfig)
  const fastY = useSpring(mouseY, fastSpringConfig)

  useEffect(() => {
    // Check if device supports fine hover cursor pointer
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    setIsMobile(!mediaQuery.matches)

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaChange)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicked(true)
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      }
      setRipples((prev) => [...prev, newRipple])
    }

    const handleMouseUp = () => {
      setIsClicked(false)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('interactive') ||
        target.closest('.interactive')

      setIsHovered(!!isInteractive)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY, isVisible])

  if (isMobile) return null

  return (
    <>
      {/* Click concentric shockwaves */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0.1, opacity: 0.8 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((r) => r.id !== ripple.id))
            }}
            className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400 bg-cyan-500/5 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 48,
              height: 48,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main Cursor Element */}
      <div
        className="fixed inset-0 z-50 pointer-events-none mix-blend-screen transition-opacity duration-300"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {/* Outer Circular HUD Ring - lagging behind fluidly with soft spring */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          {/* Animated Background Ring */}
          <motion.div
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.3 : 1,
            }}
            transition={{
              rotate: { repeat: Infinity, duration: isHovered ? 5 : 15, ease: 'linear' },
              scale: { duration: 0.25, ease: 'easeOut' },
            }}
            className={`w-12 h-12 rounded-full border border-dashed flex items-center justify-center transition-colors duration-300 ${
              isHovered ? 'border-purple-400/50 bg-purple-500/5 shadow-[0_0_15px_rgba(168,85,247,0.15)]' : 'border-cyan-400/25 bg-cyan-500/[0.01]'
            }`}
          />
        </motion.div>

        {/* Inner Futuristic Cursor Arrow - tracks mouse instantly with stiff spring */}
        <motion.div
          style={{ x: fastX, y: fastY }}
          className="absolute pointer-events-none"
        >
          <motion.svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            animate={{
              scale: isClicked ? 0.85 : isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.15 }}
            className={`drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-colors duration-300 ${
              isHovered ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]' : 'text-cyan-400'
            }`}
            style={{ originX: 0, originY: 0 }}
          >
            {/* Outer futuristic angled boundary */}
            <path
              d="M0 0 L24 10 L13 13 L5 24 Z"
              fill={isHovered ? 'rgba(168, 85, 247, 0.15)' : 'rgba(6, 182, 212, 0.12)'}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="miter"
              strokeMiterlimit="3"
            />
            {/* Sharp inner cyber accents */}
            <path
              d="M2.5 2.5 L12 5 L10 10 L3 12 Z"
              fill="currentColor"
              opacity="0.8"
            />
            {/* Inner glowing laser needle core */}
            <path
              d="M1 1 L11 11"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Tech details cross line dots */}
            <circle cx="13" cy="13" r="1.5" fill="currentColor" />
            <path
              d="M13 13 L19 19"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2 2"
              opacity="0.6"
            />
          </motion.svg>
        </motion.div>
      </div>
    </>
  )
}
