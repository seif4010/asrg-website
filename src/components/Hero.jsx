import {
  ArrowDown,
  ArrowRight,
  Compass,
  HeartHandshake,
  Sprout,
} from 'lucide-react'

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#064D2B]"
    >
      {/* Full hero background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center md:bg-[center_45%]"
        style={{
          backgroundImage: "url('/images/asrg-hero.png')",
        }}
        role="img"
        aria-label="A large tree illuminated by golden sunlight, symbolizing growth and community"
      />

      {/* Dark green overlay: keeps text readable */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(4, 48, 27, 0.96) 0%, rgba(6, 77, 43, 0.86) 42%, rgba(6, 77, 43, 0.48) 75%, rgba(6, 77, 43, 0.25) 100%)',
        }}
      />

      {/* Blend the image into the green brand color */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(6, 77, 43, 0.12) 0%, rgba(6, 77, 43, 0.08) 55%, rgba(6, 77, 43, 0.82) 100%)',
        }}
      />

      {/* Hero content */}
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center px-5 py-20 sm:px-8 sm:py-24 lg:min-h-[720px] lg:grid-cols-12 lg:px-12">
        <div className="relative z-10 lg:col-span-9 xl:col-span-8">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/25 bg-[#064D2B]/40 px-4 py-2 backdrop-blur-sm">
                <Sprout size={18} className="text-[#E6B51A]" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white sm:text-sm">
                    Purpose · Growth · Community
                  </span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Building purposeful lives.
            <span className="mt-3 block text-[#E6B51A]">
              Creating lasting impact.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            ASRG brings individual advancement and social responsibility
            together to help people grow, connect with their communities,
            and contribute to meaningful change.
          </p>

          {/* Calls to action */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E6B51A] px-7 py-4 font-bold text-[#183322] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-yellow-300"
            >
                Discover ASRG
                <ArrowRight size={18} aria-hidden="true" />
              </a>

           <a
            href="#programs"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/15"
          >
            <Compass size={18} aria-hidden="true" />
            Explore Our Programs
          </a>
          </div>

          {/* Key themes */}
         <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/25 pt-6 text-sm text-white/90">
            <span className="flex items-center gap-2">
              <Sprout size={18} className="text-[#E6B51A]" aria-hidden="true" />
              Individual advancement
            </span>

            <span className="flex items-center gap-2">
              <HeartHandshake size={18} className="text-[#E6B51A]" aria-hidden="true" />
              Social responsibility
            </span>
          </div>
        </div>
      </div>

      {/* Bottom gradient: fades into the next ivory section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-36 sm:h-44"
        style={{
          background:
            'linear-gradient(to bottom, rgba(247, 246, 237, 0) 0%, rgba(247, 246, 237, 0.35) 45%, #F7F6ED 100%)',
        }}
      />
    </section>
  )
}

export default Hero
