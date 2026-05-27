import { Code2, FolderKanban, Home, Mail, Menu, Sparkles, X } from "lucide-react"
import { useState } from "react"
import logo from "../assets/images/logo.png"
import GradientText from "@/components/ui/gradient-text"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', icon: Home, href: '#home' },
    { label: 'Projects', icon: FolderKanban, href: '#projects' },
    { label: 'Skills', icon: Sparkles, href: '#skills' },
    { label: 'Contact', icon: Mail, href: '#contact' },
  ]

  return (
    <>
      <nav className="fixed inset-x-0 top-4 z-50 px-4">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-zinc-950/75 px-4 py-3 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="flex items-center gap-3 shrink-0">
              <img src={logo} alt="Divyanshu logo" className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 p-1.5" />

              <div className="leading-tight">
                <div className="text-lg font-semibold tracking-wide text-white md:text-xl">
                  <GradientText colors={['#7C3AED', '#FFFFFF', '#38BDF8']} animationSpeed={10} pauseOnHover>
                    Divyanshu
                  </GradientText>
                </div>
                <div className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">
                  Developer portfolio
                </div>
              </div>
            </a>

            <div className="hidden items-center gap-2 md:flex">
              {navItems.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/8 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                <Mail className="h-4 w-4" />
                Let's talk
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/75 transition hover:bg-white/8 hover:text-white"
                aria-label="GitHub"
              >
                <Code2 className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-md transition md:hidden ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'
          }`}
        >
          <div className="absolute right-4 top-4 w-[min(92vw,20rem)] rounded-3xl border border-white/10 bg-zinc-950/95 p-4 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-sm font-semibold tracking-wide text-white">Navigation</span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              {navItems.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4 text-cyan-300" />
                  <span className="font-medium">{label}</span>
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <Mail className="h-4 w-4" />
              Let's talk
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}