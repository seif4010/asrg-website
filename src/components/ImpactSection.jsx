
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Globe2,
  HeartHandshake,
  Sprout,
  UsersRound,
} from 'lucide-react'

const impactAreas = [
  {
    number: '01',
    title: 'Personal Growth',
    description:
      'Encourage individuals to discover their purpose, strengthen their values, develop their abilities, and pursue excellence in their personal and professional lives.',
    icon: Sprout,
  },
  {
    number: '02',
    title: 'Guidance & Opportunity',
    description:
      'Help people identify meaningful pathways forward by connecting their ambitions with guidance, resources, and opportunities for development.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Community Engagement',
    description:
      'Encourage active participation, collaboration, and shared responsibility so that individuals can contribute to the well-being of their communities.',
    icon: UsersRound,
  },
  {
    number: '04',
    title: 'Social Responsibility',
    description:
      'Inspire people to use their knowledge, influence, and achievements to benefit others and support positive social change.',
    icon: HeartHandshake,
  },
]

const outcomes = [
  'Individuals committed to personal and professional excellence',
  'A stronger connection between personal success and social good',
  'Greater participation in community development',
  'Generations guided by responsible leadership and shared purpose',
]

function ImpactSection() {
  return (
    <section
      id="impact"
      className="scroll-mt-20 bg-[#064D2B] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Introduction */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#E6B51A]">
              <Globe2 size={18} aria-hidden="true" />
              Making a difference
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Our Impact
            </h2>

            <div className="mt-6 h-1.5 w-20 rounded-full bg-[#E6B51A]" />
          </div>

          <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Discover how individual progress can contribute to stronger
            communities and lasting social impact. ASRG brings together
            purposeful personal growth, access to guidance and opportunity,
            and meaningful engagement to encourage people to look beyond
            individual achievement and consider how their success can
            benefit others.
          </p>
        </div>

        {/* Impact areas */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactAreas.map((area) => {
            const Icon = area.icon

            return (
              <article
                key={area.number}
                className="group rounded-2xl border border-white/15 bg-white/[0.06] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E6B51A]/60 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6B51A] text-[#064D2B] transition group-hover:scale-105">
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="text-sm font-bold tracking-widest text-white/45">
                    {area.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/75">
                  {area.description}
                </p>
              </article>
            )
          })}
        </div>

        {/* Intended outcomes */}
        <div className="mt-14 grid gap-8 rounded-3xl bg-[#F7F6ED] p-7 text-[#183322] sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-12">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#347C26]">
              <CheckCircle2 size={18} aria-hidden="true" />
              The change we work toward
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-tight text-[#064D2B] sm:text-3xl">
              Success that benefits more than one person.
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              ASRG aims to foster a culture in which personal achievement
              and collective progress reinforce one another. The focus
              is not only on what individuals accomplish, but also on how
              they apply their abilities, influence, and resources to
              contribute to the greater good.
            </p>

            <a
              href="#programs"
              className="mt-6 inline-flex items-center gap-2 font-bold text-[#064D2B] transition hover:text-[#347C26]"
            >
              Explore our program pillars
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          <ul className="space-y-4">
            {outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={21}
                  className="mt-1 shrink-0 text-[#347C26]"
                  aria-hidden="true"
                />

                <span className="leading-7 text-gray-700">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ImpactSection
