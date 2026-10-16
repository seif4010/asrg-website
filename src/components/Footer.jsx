import { ArrowUpRight, Sprout } from 'lucide-react'

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4z" />
    </svg>
  )
}

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: InstagramIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: FacebookIcon,
  },
  {
    label: 'X',
    href: 'https://x.com/',
    icon: null,
  },
]

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About ASRG', href: '#about' },
  { label: 'Our Programs', href: '#programs' },
  { label: 'Our Impact', href: '#impact' },
]

function Footer() {
  return (
    <footer className="bg-[#032E1A] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-12">

        {/* Brand */}
        <div className="lg:col-span-2">
          <a
            href="#home"
            aria-label="ASRG home"
            className="inline-flex items-center gap-3"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6B51A] text-[#064D2B]">
              <Sprout size={28} strokeWidth={2} aria-hidden="true" />
            </span>

            <span>
              <span className="block text-2xl font-extrabold tracking-wide">
                ASRG
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                Community Impact
              </span>
            </span>
          </a>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
            Advancing Socially Responsible Generations — connecting
            personal growth with social responsibility to help build
            a more compassionate, resilient, and prosperous world.
          </p>

          {/* Social media */}
          <div className="mt-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#E6B51A]">
              Connect with us
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ASRG on ${social.label}`}
                    title={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition duration-300 hover:-translate-y-1 hover:border-[#E6B51A] hover:bg-[#E6B51A] hover:text-[#032E1A]"
                  >
                    {Icon ? (
                      <Icon size={20} aria-hidden="true" />
                    ) : (
                      <span
                        className="text-xl font-bold"
                        aria-hidden="true"
                      >
                        𝕏
                      </span>
                    )}
                  </a>
                )
              })}
            </div>

            <p className="mt-3 text-xs text-white/45">
              Replace the social links with ASRG's official profiles before publishing.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-[#E6B51A]">
            Explore
          </h2>

          <ul className="mt-5 space-y-4">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight
                    size={14}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get involved */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-[#E6B51A]">
            Get Involved
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/70">
            Be part of a generation that values growth, purpose, and
            responsibility. Explore the ASRG approach and discover how
            individual progress can contribute to collective advancement.
          </p>

          <a
            href="#about"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#E6B51A] px-5 py-3 text-sm font-bold text-[#032E1A] transition hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Discover ASRG
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/55 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>
            © {new Date().getFullYear()} ASRG. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
