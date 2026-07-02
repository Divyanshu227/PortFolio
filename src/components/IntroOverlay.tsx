import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX, Play } from 'lucide-react'

interface IntroOverlayProps {
  onComplete: () => void
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const [isMuted, setIsMuted] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [showPrompt, setShowPrompt] = useState(() => {
    if (typeof document !== 'undefined') {
      return !document.fullscreenElement
    }
    return true
  })
  const videoRef = useRef<HTMLVideoElement>(null)

  // Disable scrolling while the intro video is active
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Programmatically trigger unmuted play, fallback to muted if blocked by browser
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false
      setIsMuted(false)

      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay with audio was blocked by browser. Falling back to muted autoplay:", error)
          if (videoRef.current) {
            videoRef.current.muted = true
            setIsMuted(true)
            videoRef.current.play().catch((err) => {
              console.error("Muted fallback play failed:", err)
            })
          }
        })
      }
    }
  }

  useEffect(() => {
    if (!showPrompt) {
      playVideo()
    }
  }, [showPrompt])

  const startImmersiveFeed = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen()
      }
    } catch (err) {
      console.warn("Fullscreen request denied:", err)
    }
    setShowPrompt(false)
  }

  const startDefaultFeed = () => {
    setShowPrompt(false)
  }

  // Safely trigger audio playing
  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted
      videoRef.current.muted = newMuted
      setIsMuted(newMuted)
    }
  }

  // Handle skip action
  const handleSkip = () => {
    onComplete()
  }

  // Auto skip if video fails or errors
  const handleVideoError = () => {
    console.error("Intro video failed to load or play.")
    handleSkip()
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden select-none">
      {/* Background glow effects for immersive feel */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-neon-cyan/5 blur-[150px] pointer-events-none z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-neon-purple/5 blur-[150px] pointer-events-none z-10" />

      {/* Futuristic corner HUD lines */}
      <div className="absolute inset-6 border border-white/5 pointer-events-none z-20">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan/50" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-purple/50" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-purple/50" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan/50" />
      </div>

      {/* Cyberpunk Status Telemetry top-left */}
      <div className="absolute top-8 left-8 z-30 font-mono text-[9px] text-slate-500 uppercase tracking-widest hidden md:block">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          <span>CYBER_SYS_DEVICES // INTRO_ACTIVE</span>
        </div>
        <div className="text-slate-600 mt-1">RATE: 60FPS // BUFFER: OK</div>
      </div>

      {/* The Cinematic Video Element */}
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/cxvvisl8/video/upload/v1782989605/portfoliointrovideo_rjrcn2.mp4"
        playsInline
        onEnded={handleSkip}
        onError={handleVideoError}
        onPlay={() => setHasStarted(true)}
        className="w-full h-full object-cover transition-opacity duration-1000 z-0"
      />

      {/* Interactive Controls Overlay */}
      <div className="absolute inset-0 z-30 flex flex-col justify-between p-8 pointer-events-none">
        {/* Top Controls: Mute and Skip */}
        <div className="flex items-center justify-end gap-4 w-full pointer-events-auto mt-2">
          {/* Mute/Unmute Cyber Button */}
          <button
            type="button"
            onClick={toggleMute}
            className="flex items-center gap-2 px-4 py-2 bg-black/45 hover:bg-neon-purple/15 border border-neon-purple/40 hover:border-neon-purple text-neon-purple hover:text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer"
          >
            {isMuted ? (
              <>
                <span>Unmute Audio</span>
                <VolumeX className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>Mute Audio</span>
                <Volume2 className="w-3.5 h-3.5" />
              </>
            )}
          </button>

          {/* Skip Intro Cyber Button */}
          <button
            type="button"
            onClick={handleSkip}
            className="flex items-center gap-2 px-5 py-2 bg-black/45 hover:bg-neon-cyan/15 border border-neon-cyan/40 hover:border-neon-cyan text-neon-cyan hover:text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer group"
          >
            <span>Skip System</span>
            <span className="text-[8px] text-slate-500 group-hover:text-neon-cyan transition-colors">▶▶</span>
          </button>
        </div>

        {/* Bottom Interactive HUD Overlay indicator */}
        <div className="w-full flex justify-between items-end font-mono text-[9px] text-slate-500 uppercase tracking-wider">
          <div className="hidden sm:block">
            <span>SYS_LOC // CLOUDINARY_MEDIA_GATEWAY</span>
          </div>
          <div className="flex items-center gap-2">
            {!hasStarted && (
              <div className="flex items-center gap-1.5 text-neon-cyan animate-pulse">
                <Play className="w-3 h-3" />
                <span>ESTABLISHING FEED...</span>
              </div>
            )}
            {hasStarted && (
              <span className="text-emerald-400 font-semibold animate-pulse">● LIVE BROADCAST</span>
            )}
          </div>
        </div>
      </div>

      {/* Holographic Fullscreen calibration prompt */}
      {showPrompt && (
        <div className="absolute inset-0 z-50 bg-black/95 flex items-center justify-center p-6 backdrop-blur-md">
          <div className="relative max-w-md w-full p-8 rounded-3xl glass-panel border border-white/10 bg-[#030208]/90 shadow-[0_0_50px_rgba(6,182,212,0.15)] text-center space-y-6">
            {/* Hologram details */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan/50 rounded-tl-xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-purple/50 rounded-tr-xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-purple/50 rounded-bl-xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan/50 rounded-br-xl pointer-events-none" />

            <div className="w-16 h-16 mx-auto rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan animate-pulse">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
              </svg>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] text-neon-cyan font-mono tracking-widest uppercase block">
                Visual Calibration
              </span>
              <h2 className="text-2xl font-bold font-display text-white tracking-tight">
                SYSTEM SETUP
              </h2>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                This digital portfolio utilizes spatial audio, micro-animations, and full-viewport layout telemetry. For the ultimate cinematic experience, please launch in fullscreen.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                type="button"
                onClick={startImmersiveFeed}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-neon-purple to-neon-cyan hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Launch Fullscreen Feed
              </button>
              <button
                type="button"
                onClick={startDefaultFeed}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer"
              >
                Launch Default Feed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
