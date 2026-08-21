import { useState } from 'react'
import { Download, Github, Linkedin, Mail, Send } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import { BackgroundShapes } from './background-shapes'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  )

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <BackgroundShapes />

      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-charcoal-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-maroon-bright">
          Let's Connect
        </span>

        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-cream sm:text-5xl">
          Let's Build Something Great
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-cream-dim">
          I'm always open to conversations about software development, AI, and
          new opportunities. Whether you have a project in mind, a role to
          discuss, or just want to talk technology — my inbox is open.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-maroon-bright px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 hover:bg-maroon"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-charcoal-card px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 hover:border-green-bright/50"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-charcoal-card px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 hover:border-green-bright/50"
          >
            <Github size={16} />
            GitHub
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

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={(e) => {
            e.preventDefault()
            setStatus('sending')
            const form = e.currentTarget
            const data = new FormData(form)
            fetch('/__forms.html', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams(
                data as unknown as Record<string, string>,
              ).toString(),
            })
              .then(() => {
                setStatus('sent')
                form.reset()
              })
              .catch(() => setStatus('error'))
          }}
          className="mx-auto mt-14 grid max-w-xl gap-4 rounded-3xl border border-hairline bg-charcoal-card p-6 text-left sm:p-8"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-cream-dim">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-hairline bg-charcoal px-4 py-2.5 text-sm text-cream outline-none transition-colors focus:border-maroon-bright"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-cream-dim">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-hairline bg-charcoal px-4 py-2.5 text-sm text-cream outline-none transition-colors focus:border-maroon-bright"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-cream-dim">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              className="w-full rounded-xl border border-hairline bg-charcoal px-4 py-2.5 text-sm text-cream outline-none transition-colors focus:border-maroon-bright"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-cream-dim">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me a bit about what you have in mind..."
              className="w-full resize-none rounded-xl border border-hairline bg-charcoal px-4 py-2.5 text-sm text-cream outline-none transition-colors focus:border-maroon-bright"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-green-bright px-6 py-3 text-sm font-semibold text-charcoal transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            <Send size={16} />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'sent' ? (
            <p className="text-center text-sm font-medium text-green-bright">
              Thanks for reaching out — I'll reply as soon as I can.
            </p>
          ) : null}
          {status === 'error' ? (
            <p className="text-center text-sm font-medium text-maroon-bright">
              Something went wrong. Please try emailing me directly.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
