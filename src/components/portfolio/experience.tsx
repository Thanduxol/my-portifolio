import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { experience } from '@/data/portfolio'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="experience" className="relative border-b border-hairline py-24">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="My Journey"
          title="Experience"
          description="Every role has shaped how I solve problems today — click a card to see the details."
        />

        <div className="relative pl-8">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-maroon-bright via-hairline to-green-bright" />

          {experience.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.company} className="relative mb-8 last:mb-0">
                <span
                  className={cn(
                    'absolute -left-8 top-6 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2',
                    open
                      ? 'border-maroon-bright bg-maroon-bright'
                      : 'border-hairline bg-charcoal',
                  )}
                />

                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full rounded-2xl border border-hairline bg-charcoal-card p-6 text-left transition-colors hover:border-maroon-bright/40"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-green-bright">
                        {item.period}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-cream">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-cream-dim">
                        {item.company}
                      </p>
                    </div>
                    <ChevronDown
                      size={20}
                      className={cn(
                        'shrink-0 text-cream-dim transition-transform duration-300',
                        open && 'rotate-180 text-maroon-bright',
                      )}
                    />
                  </div>

                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      open
                        ? 'mt-4 grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <ul className="overflow-hidden space-y-2 border-t border-hairline pt-4 text-sm text-cream-dim">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-maroon-bright" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
