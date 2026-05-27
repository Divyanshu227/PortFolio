import { Menu, X } from "lucide-react"
import { useState } from "react"
import logo from "../assets/images/logo.png"
import GradientText from "@/components/ui/gradient-text"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-linear-gradient-to-r from-purple-950 to bg-zinc-950/90 backdrop-blur-lg">
        <div className="flex items-center justify-between px-6 py-4">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10"
            />

            <div className="text-xl font-bold text-white">
              <GradientText colors={['#5227FF', '#FF9FFC', '#B497CF']} animationSpeed={8}>
                <span className="block">Divyanshu</span>
              </GradientText>
              <span className="text-cyan-400 text-sm font-medium">— Developer</span>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <Menu
            className="h-6 w-6 cursor-pointer text-white md:hidden"
            onClick={() => setIsOpen(true)}
          />

          {/* Desktop Menu */}
          <ul className="hidden gap-8 text-white md:flex">
            <li className="cursor-pointer hover:text-cyan-400">
              Home
            </li>

            <li className="cursor-pointer hover:text-cyan-400">
              Projects
            </li>

            <li className="cursor-pointer hover:text-cyan-400">
              Skills
            </li>

            <li className="cursor-pointer hover:text-cyan-400">
              Contact
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-8 bg-black/90 text-2xl font-bold text-white backdrop-blur-xl ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <X
            className="absolute top-4 right-4 h-6 w-6 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />

          <li>Home</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}