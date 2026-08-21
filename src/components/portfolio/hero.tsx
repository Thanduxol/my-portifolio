import { ArrowRight, Download, Mail } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import { BackgroundShapes } from './background-shapes'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-hairline"
    >
      <BackgroundShapes />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-24 text-center">
        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-hairline bg-charcoal-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-green-bright">
          Welcome to my portfolio
        </span>

        <h1
          className="animate-fade-up text-4xl font-extrabold tracking-tight text-cream sm:text-6xl md:text-7xl"
          style={{ animationDelay: '0.05s' }}
        >
          {personalInfo.fullName}
        </h1>

        <p
          className="animate-fade-up text-gradient text-lg font-semibold sm:text-2xl"
          style={{ animationDelay: '0.1s' }}
        >
          {personalInfo.title}
        </p>

        <p
          className="animate-fade-up max-w-2xl text-balance text-base leading-relaxed text-cream-dim sm:text-lg"
          style={{ animationDelay: '0.15s' }}
        >
          {personalInfo.tagline}
        </p>

        <div
          className="animate-fade-up mt-4 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: '0.2s' }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-maroon-bright px-6 py-3 text-sm font-semibold text-cream shadow-lg shadow-maroon-deep/40 transition-transform hover:-translate-y-0.5 hover:bg-maroon"
          >
            View My Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#certificates"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-charcoal-card px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 hover:border-green-bright/50"
          >
            View Certificates
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-charcoal-card px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 hover:border-green-bright/50"
          >
            <Mail size={16} />
            Contact Me
          </a>
          <a
            href={personalInfo.cvFile}
            download
            className="inline-flex items-center gap-2 rounded-full border border-green-bright/40 bg-green-deep/40 px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 hover:bg-green-deep"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
