
import { useState } from 'react'
import {
  ArrowRight,
  Compass,
  House,
  Menu,
  Sprout,
  UsersRound,
  X,
} from 'lucide-react'

const links = [
  { label: 'Home', href: '#home', icon: House },
  { label: 'About ASRG', href: '#about', icon: Compass },
  { label: 'Our Programs', href: '#programs', icon: Sprout },
  { label: 'Our Impact', href: '#impact', icon: UsersRound },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#064D2B]/10 bg-[#F7F6ED]/95 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="ASRG home"
        >
          <img
            src="/images/asrg-tree-emblem.png"
            alt="ASRG tree emblem"
            className="h-12 w-12 shrink-0 object-contain"
          />

          <span className="leading-tight">
            <span className="block text-xl font-extrabold tracking-wide text-[#064D2B]">
              ASRG
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">
              Advancing Socially Responsible Generations
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const Icon = link.icon

            return (
              <a
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-[#347C26]"
              >
                <Icon
                  size={16}
                  strokeWidth={1.8}
                  className="text-[#347C26]"
                  aria-hidden="true"
                />
                {link.label}
              </a>
            )
          })}

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#064D2B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#347C26]"
          >
            Get Involved
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#064D2B]/15 text-[#064D2B] transition hover:bg-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile links */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#064D2B]/10 px-5 pb-5 pt-3 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 font-medium text-gray-700 transition hover:bg-white hover:text-[#064D2B]"
                >
                  <Icon size={18} className="text-[#347C26]" aria-hidden="true" />
                  {link.label}
                </a>
              )
            })}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#064D2B] px-5 py-3 font-semibold text-white transition hover:bg-[#347C26]"
            >
              Get Involved
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
