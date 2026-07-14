import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, 
  Send, 
  MessageSquare, 
  Clock, 
  MapPin, 
  User, 
  Activity, 
  CheckCircle2, 
  Terminal as TerminalIcon,
  CopyCheck
} from 'lucide-react'


export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false)
  
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "DKJ-HUD SECURE MAIL PORTAL ONLINE.",
    "STATUS: AWAITING PAYLOAD PROTOCOLS...",
    "READY FOR INPUT TRANSMISSION."
  ])
  
  const [istTime, setIstTime] = useState('')
  const terminalBottomRef = useRef<HTMLDivElement>(null)
  const clickSound = useRef(new Audio("/clicksound.mp3"))

  const playClick = () => {
    if (localStorage.getItem("soundEnabled") === "false") return
    clickSound.current.currentTime = 0
    clickSound.current.play().catch(() => {})
  }

  const [copiedLink, setCopiedLink] = useState<string | null>(null)
  const CopyEmail = async (e: React.MouseEvent, link: string) => {
    e.stopPropagation()
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(link)
      setCopiedLink(link)
      setTimeout(() => {
        setCopiedLink(null)
      }, 2000)
    } catch (err) {
      console.error("Failed to copy link: ", err)
    }
  }

  // }

  // Update IST Clock in real-time
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }
      const timeStr = new Intl.DateTimeFormat('en-US', options).format(new Date())
      setIstTime(timeStr)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Auto-scroll terminal logs to bottom
  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [terminalLogs])

  // Form handler
  const handleTransmitPayload = async (e: React.FormEvent) => {
    e.preventDefault()
    playClick()

    if (isSubmitting) return

    // Validations
    const errors: string[] = []
    if (!name.trim() || name.length < 2) {
      errors.push("Sender Name must be at least 2 characters.")
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim() || !emailRegex.test(email)) {
      errors.push("A valid Security Email is required.")
    }
    if (!message.trim() || message.length < 10) {
      errors.push("Message Body must be at least 10 characters.")
    }

    if (errors.length > 0) {
      setTerminalLogs((prev) => [
        ...prev,
        `> transmit --payload --failed`,
        `[VALIDATION ERROR] Required payload parameters are missing or invalid:`,
        ...errors.map(err => `  - ${err}`),
        `TRANSMISSION ABORTED.`
      ])
      return
    }

    // Pass validation, trigger actual API call
    setIsSubmitting(true)
    setSubmittedSuccessfully(false)
    setTerminalLogs([
      `> transmit --payload --sender="${name}" --subject="${subject || 'NONE'}"`,
      `[TRANSMISSION INITIATED]`,
      `DK-HUD // CONNECTING TO STRATA ROUTING ENDPOINT...`,
      `STATUS: SECURE HANDSHAKE COMPLETED. EPHEMERAL KEYS EXCHANGED.`,
      `ENCRYPTING PAYLOAD ENVELOPE PROTOCOLS [AES-256-GCM]...`,
      `DISPATCHING CRYPTO PACKET TO REMOTE SERVER...`
    ])

    try {
      const endpoint = '/api/contact'
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message })
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok && (data.success || response.status === 200)) {
        setTerminalLogs(prev => [
          ...prev,
          `SUCCESS: 200 OK. TRANSMISSION RECEIVED BY STRATA GATEWAY.`,
          `[TRANSMISSION TERMINATED]`
        ])
        setSubmittedSuccessfully(true)
        // Reset form fields
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      } else {
        setTerminalLogs(prev => [
          ...prev,
          `[TRANSMISSION FAILED] SERVER RESPONDED WITH ERROR:`,
          `  - ${data.message || response.statusText || 'Unknown error occurred'}`,
          `TRANSMISSION ABORTED.`
        ])
      }
    } catch (error: any) {
      setTerminalLogs(prev => [
        ...prev,
        `[NETWORK ERROR] FAILED TO REACH STRATA GATEWAY:`,
        `  - ${error.message || 'Network request failed'}`,
        `TRANSMISSION ABORTED.`
      ])
    } finally {
      setIsSubmitting(false)
    }
  }

  // Social channels credentials
  const commChannels = [
    {
      name: 'GitHub Profile',
      subtitle: import.meta.env.VITE_GITHUB_URL?.replace('https://', '') || 'github.com/username',
      link: `${import.meta.env.VITE_GITHUB_URL}`,
      icon: (
        <svg className="w-5 h-5 text-[#f05032]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      glowClass: 'hover:border-[#f05032]/50 hover:shadow-[0_0_20px_rgba(240,80,50,0.2)]'
    },
    {
      name: 'LinkedIn Network',
      subtitle: 'Professional Connections',
      link: `${import.meta.env.VITE_LINKEDIN_URL}`,
      icon: (
        <svg className="w-5 h-5 text-neon-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      glowClass: 'hover:border-neon-blue/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]'
    },
    {
      name: 'Secure Node Email',
      subtitle: import.meta.env.VITE_EMAIL || 'Direct Contact',
      link: `mailto:${import.meta.env.VITE_EMAIL}`,
      icon: <Mail className="w-5 h-5 text-neon-cyan" />,
      glowClass: 'hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]'
    }
  ]

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-28 pb-24 select-none">
      
      {/* Glow blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-neon-purple/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />

      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <span className="text-[13px] text-neon-cyan font-mono tracking-wide mb-3 px-4 py-1.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 inline-block">
          Secure Channel
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent mb-4">
          Gateway Portal
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full mb-6" />
        <p className="text-slate-300 text-[15px] font-light max-w-2xl mx-auto leading-[1.6]">
          Open a cryptographically secure message gateway or access direct network links to connect with me.
        </p>
      </motion.div>

      {/* Split grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Column: Comm Nodes Directory */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          
          {/* Timezone telemetry card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-5 md:p-6 rounded-2xl glass-panel border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-4 mb-5">
              <Clock className="w-6 h-6 text-neon-cyan" />
              <div>
                <span className="text-[13px] font-mono text-slate-400 tracking-wide block">Local Node Telemetry</span>
                <span className="text-[16px] font-semibold text-slate-100 font-display">Time & Coordinates</span>
              </div>
            </div>
            
            <div className="space-y-4 font-mono text-[14px] leading-[1.6]">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-300">Time Zone</span>
                <span className="text-slate-100 font-medium">IST (GMT +5:30)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-300">Current Time</span>
                <span className="text-neon-cyan font-bold tabular-nums">{istTime || "Syncing..."}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Lat / Lon</span>
                <span className="text-slate-100 flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-neon-purple" /> 20.5937° N / 78.9629° E
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Channels Directory */}
          <div className="space-y-3">
            <span className="text-[13px] font-mono text-slate-400 tracking-wide block ml-1 mb-2">Secure Routing Directories</span>
            {commChannels.map((channel, idx) => (
              <motion.a
                key={channel.name}
                href={channel.link}
                target="_blank"
                rel="noreferrer"
                onClick={() => { playClick() }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-4 rounded-2xl glass-panel border border-white/10 flex items-center justify-between group transition-all duration-300 ${channel.glowClass} hover:bg-white/[0.03]`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors shadow-inner">
                    {channel.icon}
                  </div>
                  <div className="text-left flex flex-col">
                    <span className="text-[15px] font-semibold text-slate-100 tracking-wide">{channel.name}</span>
                    <span className="text-[13px] font-light text-slate-400 mt-0.5 leading-[1.6]">{channel.subtitle}</span>
                  </div>
                </div>
                <button
                  type="button"
                  title="Copy Link"
                  className="w-10 h-10 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/40 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] active:scale-95 transition-all duration-300 cursor-pointer group-hover:border-white/30"
                >
                  {copiedLink === channel.link ? (
                    <CopyCheck className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
                  ) : (
                    <svg 
                      onClick={(e) => CopyEmail(e, channel.link)} 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-4 h-4"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                  )}
                </button>
              </motion.a>
            ))}
          </div>

          {/* Interactive node visual matrix */}
          <div className="hidden lg:block p-5 rounded-2xl glass-panel border border-white/10 relative overflow-hidden h-36 bg-[#040308]/60">
            <div className="absolute inset-0 bg-grid-pattern bg-size-[20px_20px] opacity-[0.15] animate-grid-move pointer-events-none" />
            <div className="relative z-10 flex flex-col justify-between h-full font-mono text-[13px] text-slate-400 text-left">
              <span className="text-neon-purple tracking-widest font-semibold">NODE SECURITY MATRIX</span>
              <p className="leading-[1.6] text-slate-300 font-light">TLS 1.3 // Diffie-Hellman handshake secure routing enabled. Transmitted messages derived client-side to prevent network packet leaks.</p>
              <div className="flex gap-2 items-center text-[12px] text-neon-cyan animate-pulse font-medium">
                <Activity className="w-4 h-4 text-neon-cyan" /> Node Online // Encrypted
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Encrypted Form & SMTP Logger Terminal */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* The Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 md:p-8 rounded-2xl glass-panel border border-white/10 bg-[#040308]/80 text-left relative overflow-hidden"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-neon-cyan/40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-neon-purple/40 pointer-events-none" />

            <form onSubmit={handleTransmitPayload} className="space-y-6">
              
              {/* Form Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[13px] font-mono text-slate-300 tracking-wide flex items-center gap-2">
                    <User className="w-4 h-4 text-neon-cyan" /> Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Identify yourself..."
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-[15px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-neon-cyan/60 focus:ring-1 focus:ring-neon-cyan/30 transition-all duration-300"
                  />
                </div>
                
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[13px] font-mono text-slate-300 tracking-wide flex items-center gap-2">
                    <Mail className="w-4 h-4 text-neon-cyan" /> Secure Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="secure@example.com"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-[15px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-neon-cyan/60 focus:ring-1 focus:ring-neon-cyan/30 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-[13px] font-mono text-slate-300 tracking-wide flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-neon-purple" /> Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Payload objective..."
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-[15px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-neon-purple/60 focus:ring-1 focus:ring-neon-purple/30 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[13px] font-mono text-slate-300 tracking-wide flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4 text-neon-cyan" /> Message Body
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write message contents here..."
                  disabled={isSubmitting}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-[15px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-neon-cyan/60 focus:ring-1 focus:ring-neon-cyan/30 transition-all duration-300 resize-none leading-[1.6]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl border border-neon-cyan/50 text-white text-[15px] font-mono font-semibold tracking-wide hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-neon-purple/15 to-neon-cyan/15 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <Send className="w-4 h-4 text-neon-cyan group-hover:scale-110 transition-transform" />
                {isSubmitting ? "Transmitting Envelope..." : "Transmit Encrypted Payload"}
              </button>

            </form>
          </motion.div>

          {/* SMTP simulated log terminal screen */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-[#030208]/90 border border-white/10 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative flex flex-col"
          >
            {/* Terminal Top tab bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10 font-mono text-[13px] text-slate-300 select-none">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 cursor-pointer hover:shadow-[0_0_8px_rgba(244,63,94,0.6)] transition-all" onClick={() => setTerminalLogs([])} title="Clear logs" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 hover:shadow-[0_0_8px_rgba(16,185,129,0.6)] transition-all" />
                </div>
                <span className="w-px h-3 bg-white/20 mx-1" />
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4 text-neon-cyan" />
                  <span className="font-semibold text-slate-100 tracking-wide">DK-HUD // SMTP Gateway Logs</span>
                </div>
              </div>
              <span className="text-[12px] text-slate-400">AES-256 Enabled</span>
            </div>

            {/* Terminal logs area */}
            <div className="p-5 h-44 overflow-y-auto font-mono text-[13px] leading-[1.6] text-emerald-400 bg-black/80 scrollbar-thin select-text text-left">
              <div className="space-y-1">
                {terminalLogs.map((line, idx) => {
                  let colorClass = "text-emerald-400/90"
                  if (line.startsWith(">") || line.startsWith("DK-HUD //")) {
                    colorClass = "text-white font-bold"
                  } else if (line.startsWith("[VALIDATION ERROR]") || line.startsWith("  -") || line.startsWith("TRANSMISSION ABORTED")) {
                    colorClass = "text-rose-400"
                  } else if (line.startsWith("SUCCESS") || line.startsWith("STATUS") || line.startsWith("READY")) {
                    colorClass = "text-cyan-300 font-semibold"
                  } else if (line.startsWith("[TRANSMISSION")) {
                    colorClass = "text-yellow-400 font-bold"
                  }
                  return (
                    <div key={idx} className={`${colorClass} whitespace-pre-wrap`}>
                      {line}
                    </div>
                  )
                })}
                <div ref={terminalBottomRef} />
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Success Notification dialog */}
      <AnimatePresence>
        {submittedSuccessfully && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 p-5 rounded-2xl glass-panel border border-emerald-500/30 bg-[#020704]/90 shadow-[0_10px_30px_rgba(16,185,129,0.15)] max-w-sm flex items-start gap-4 text-left cursor-pointer"
            onClick={() => setSubmittedSuccessfully(false)}
          >
            <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white font-display">Transmission Complete</h4>
              <p className="text-xs text-slate-400 leading-normal font-light">
                Secure message payload successfully sent. Acknowledgment logs returned. I will review and reply soon.
              </p>
              <span className="text-[8px] font-mono text-emerald-400 block pt-1">CLICK TO DISMISS</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}