import { Sprout } from 'lucide-react'
import { currentlyLearning, learningMessage } from '@/data/portfolio'
import { SectionHeading } from './section-heading'

export function Learning() {
  return (
    <section id="learning" className="relative border-b border-hairline bg-charcoal-elevated/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="What I'm Learning Next"
          title="Currently Learning"
          description={learningMessage}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {currentlyLearning.map((item) => (
            <div
              key={item.title}
              className="group flex items-start gap-4 rounded-2xl border border-hairline bg-charcoal-card p-5 transition-all hover:-translate-y-1 hover:border-green-bright/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-deep text-green-bright transition-transform group-hover:scale-110">
                <Sprout size={18} />
              </span>
              <div>
                <h4 className="font-semibold text-cream">{item.title}</h4>
                <p className="mt-1 text-sm text-cream-dim">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
