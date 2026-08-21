import { useState } from 'react'
import { ExternalLink, Github, Sparkles } from 'lucide-react'
import { projects, type Project } from '@/data/portfolio'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

export function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative border-b border-hairline bg-charcoal-elevated/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="What I've Built"
          title="Featured Project"
          description="A closer look at my flagship build — a full case study, from problem to outcome."
        />

        {featured ? <FeaturedProjectCard project={featured} /> : null}

        {rest.length > 0 ? (
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {rest.map((project) => (
              <div
                key={project.slug}
                className="rounded-2xl border border-hairline bg-charcoal-card p-6 transition-all hover:-translate-y-1 hover:border-green-bright/40"
              >
                <h3 className="text-lg font-bold text-cream">{project.title}</h3>
                <p className="mt-2 text-sm text-cream-dim">{project.description}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

function FeaturedProjectCard({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState(project.tabs[0]?.key)
  const active = project.tabs.find((t) => t.key === activeTab)

  return (
    <div className="glow-maroon overflow-hidden rounded-3xl border border-hairline bg-charcoal-card">
      <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-green-bright/40 bg-green-deep/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-green-bright">
            <Sparkles size={14} />
            Flagship build
          </span>

          <h3 className="text-2xl font-extrabold text-cream sm:text-3xl">
            {project.title}
          </h3>

          <p className="leading-relaxed text-cream-dim">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-hairline bg-charcoal px-3 py-1.5 text-xs font-medium text-cream-dim"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-maroon-bright px-5 py-2.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 hover:bg-maroon"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-charcoal px-5 py-2.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 hover:border-green-bright/50"
              >
                <Github size={16} />
                View GitHub Repository
              </a>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col rounded-2xl border border-hairline bg-charcoal p-5">
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  'rounded-full px-3 py-1.5 text-xs font-semibold transition-colors',
                  activeTab === tab.key
                    ? 'bg-green-bright text-charcoal'
                    : 'bg-charcoal-card text-cream-dim hover:text-cream',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-cream-dim">
            {active?.content}
          </p>
        </div>
      </div>
    </div>
  )
}
