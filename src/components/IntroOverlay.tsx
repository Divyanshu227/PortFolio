import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX, Play } from 'lucide-react'

interface IntroOverlayProps {
  onComplete: () => void
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Disable scrolling while the intro video is active
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

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
        autoPlay
        muted
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
    </div>
  )
}
