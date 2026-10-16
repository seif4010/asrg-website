
import {
  ArrowUpRight,
  Compass,
  Sprout,
  UsersRound,
} from 'lucide-react'

const pillars = [
  {
    number: '01',
    title: 'Purposeful Life Program',
    description:
      'A pathway focused on helping individuals clarify their purpose, strengthen their capabilities, and work toward meaningful personal growth.',
    tags: ['Purpose', 'Personal growth'],
    icon: Sprout,
  },
  {
    number: '02',
    title: 'Guidance & Opportunity Engine',
    description:
      'A framework for connecting people with useful guidance, resources, and opportunities that support their next steps.',
    tags: ['Guidance', 'Opportunity'],
    icon: Compass,
  },
  {
    number: '03',
    title: 'Engagement System',
    description:
      'An approach to encouraging participation, building connections, and translating individual progress into community contribution.',
    tags: ['Participation', 'Community'],
    icon: UsersRound,
  },
]

function PillarsSection() {
  return (
    <section
      id="programs"
      className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#347C26]">
            <Compass size={17} aria-hidden="true" />
            How we create impact
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#064D2B] sm:text-4xl lg:text-5xl">
            Three pillars. One shared purpose.
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Our approach connects purposeful personal growth with guidance,
            opportunity, and meaningful engagement.
          </p>

          <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-[#E6B51A]" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon

            return (
              <article
                key={pillar.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-[#F7F6ED] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#347C26]/30 hover:shadow-xl sm:p-8"
              >
                <div className="absolute right-0 top-0 h-1.5 w-24 bg-[#E6B51A] transition-all duration-300 group-hover:w-full" />

                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#064D2B] text-[#E6B51A] transition group-hover:bg-[#347C26]">
                    <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
                  </span>

                  <span className="text-sm font-bold tracking-widest text-[#347C26]/70">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold leading-snug text-[#064D2B]">
                  {pillar.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
                  {pillar.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#064D2B]/10 bg-white px-3 py-1.5 text-xs font-semibold text-[#064D2B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#impact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#064D2B] transition hover:text-[#347C26]"
                >
                  See our impact
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PillarsSection
