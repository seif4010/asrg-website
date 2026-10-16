
import {
  ArrowRight,
  Eye,
  HeartHandshake,
  Sprout,
  Target,
} from 'lucide-react'

const focusAreas = [
  {
    number: '01',
    title: 'Individual Advancement',
    description:
      'Pursue personal and professional excellence, build strong values, and develop the knowledge and influence to make a difference.',
    icon: Sprout,
  },
  {
    number: '02',
    title: 'Social Responsibility',
    description:
      'Use individual success to serve society, strengthen communities, and contribute to collective advancement.',
    icon: HeartHandshake,
  },
]

const statements = [
  {
    title: 'Our Mission',
    icon: Target,
    description:
      'To nurture generations who pursue excellence in their careers, remain grounded in strong values, and utilize their knowledge, influence, and success to benefit society.',
  },
  {
    title: 'Our Vision',
    icon: Eye,
    description:
      'A global network of socially responsible generations whose members continuously advance themselves, strengthen their communities, and contribute to a more compassionate, resilient, and prosperous world.',
  },
]

function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#F7F6ED] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#347C26]">
            About ASRG
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#064D2B] sm:text-4xl lg:text-5xl">
            From individual success to collective advancement.
          </h2>

          <div className="mt-6 h-1.5 w-20 rounded-full bg-[#E6B51A]" />

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Advancing Socially Responsible Generations (ASRG) is an
            empowerment framework focused on helping people live
            purposeful lives, develop professional excellence, and
            translate their success into meaningful social impact.
          </p>
        </div>

        {/* Illustration and mission / vision */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Purpose journey image */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-2/3 w-2/3 rounded-3xl bg-[#E6B51A]/30"
            />

            <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl shadow-xl sm:min-h-[520px]">
              <img
                src="/images/purpose-journey.png"
                alt="A person looking toward the sunrise from a mountain, representing purpose, ambition, and positive impact"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#032E1A]/90 via-[#032E1A]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E6B51A]">
                  The ASRG philosophy
                </p>

                <h3 className="mt-3 max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Look beyond. Lead with purpose.
                </h3>

                <p className="mt-3 max-w-sm leading-7 text-white/85">
                  Your journey can inspire others and help create a
                  stronger future for generations to come.
                </p>
              </div>
            </div>
          </div>

          {/* Mission and vision */}
          <div className="flex flex-col gap-5">
            {statements.map((statement) => {
              const Icon = statement.icon

              return (
                <article
                  key={statement.title}
                  className="flex-1 rounded-2xl border border-[#064D2B]/10 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#064D2B] text-[#E6B51A]">
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-[#064D2B]">
                      {statement.title}
                    </h3>
                  </div>

                  <div className="mt-5 h-1 w-14 rounded-full bg-[#E6B51A]" />

                  <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                    {statement.description}
                  </p>
                </article>
              )
            })}

            {/* Our commitment */}
            <div className="rounded-2xl bg-[#064D2B] p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E6B51A]">
                Our commitment
              </p>

              <p className="mt-3 text-base font-medium leading-8 sm:text-lg">
                To build communities that are purposeful, influential,
                resilient, and committed to creating a better world
                for future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Program goal */}
        <div className="relative mt-14 overflow-hidden rounded-3xl bg-[#064D2B] p-7 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10"
          />

          <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:items-center md:gap-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#E6B51A] text-[#064D2B]">
              <Target size={36} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E6B51A]">
                The goal of ASRG
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-snug text-white sm:text-3xl">
                Success that advances society.
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-8 text-white/85 sm:text-lg">
                Not merely producing successful individuals, but
                producing influential individuals whose success
                generates collective advancement.
              </p>
            </div>
          </div>
        </div>

        {/* Two focus areas */}
        <div className="mt-14">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#347C26]">
              The foundation
            </p>

            <h3 className="mt-3 text-2xl font-bold text-[#064D2B] sm:text-3xl">
              Two complementary responsibilities
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {focusAreas.map((area) => {
              const Icon = area.icon

              return (
                <article
                  key={area.number}
                  className="group rounded-2xl border border-[#064D2B]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#064D2B] text-[#E6B51A] transition group-hover:bg-[#347C26]">
                      <Icon
                        size={26}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-sm font-bold tracking-widest text-[#347C26]">
                      {area.number}
                    </span>
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-[#064D2B] sm:text-2xl">
                    {area.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                    {area.description}
                  </p>
                </article>
              )
            })}
          </div>

          {/* Explore programs */}
          <a
            href="#programs"
            className="mt-8 inline-flex items-center gap-2 font-bold text-[#064D2B] transition hover:text-[#347C26]"
          >
            Explore our programs
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
