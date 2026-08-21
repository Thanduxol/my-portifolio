import { skillCategories } from '@/data/portfolio'
import { SectionHeading } from './section-heading'

export function Skills() {
  return (
    <section id="skills" className="relative border-b border-hairline bg-charcoal-elevated/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="What I Know"
          title="Skills & Toolkit"
          description="Grouped by focus area — from hands-on development and AI work to systems support and workplace tools."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-hairline bg-charcoal-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maroon-bright/40 hover:shadow-xl hover:shadow-maroon-deep/20"
            >
              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${
                    i % 2 === 0
                      ? 'bg-maroon-deep text-maroon-bright'
                      : 'bg-green-deep text-green-bright'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-semibold text-cream">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-hairline bg-charcoal px-3 py-1.5 text-sm text-cream-dim transition-colors group-hover:border-hairline hover:!border-green-bright/60 hover:!text-cream"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
