import { Award, BadgeCheck, FileText } from 'lucide-react'
import { certificates, education } from '@/data/portfolio'
import { SectionHeading } from './section-heading'

export function Certificates() {
  const featured = certificates.filter((c) => c.featured)
  const rest = certificates.filter((c) => !c.featured)

  return (
    <section id="certificates" className="relative border-b border-hairline py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="What I've Learned"
          title="Certificates & Learning Vault"
          description="A growing gallery of completed courses and specializations — verifiable, and always expanding."
        />

        <div className="grid gap-6">
          {featured.map((cert) => (
            <div
              key={cert.title}
              className="glow-green rounded-3xl border border-hairline bg-charcoal-card p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-deep text-green-bright">
                    <Award size={26} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-green-bright">
                      Featured specialization
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-cream">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-cream-dim">{cert.issuer}</p>

                    {cert.courses ? (
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {cert.courses.map((course) => (
                          <li
                            key={course}
                            className="flex items-center gap-2 text-sm text-cream-dim"
                          >
                            <BadgeCheck size={15} className="shrink-0 text-green-bright" />
                            {course}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>

                <div className="flex shrink-0 flex-col gap-2 sm:flex-row lg:flex-col">
                  {cert.file ? (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-green-bright px-5 py-2.5 text-sm font-semibold text-charcoal transition-transform hover:-translate-y-0.5"
                    >
                      <FileText size={16} />
                      View Certificate
                    </a>
                  ) : null}
                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-cream-dim hover:text-cream"
                    >
                      Verify
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col justify-between rounded-2xl border border-hairline bg-charcoal-card p-6 transition-all hover:-translate-y-1 hover:border-maroon-bright/40"
            >
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-maroon-deep text-maroon-bright">
                  <Award size={20} />
                </span>
                <h4 className="mt-4 font-semibold text-cream">{cert.title}</h4>
                <p className="text-sm text-cream-dim">{cert.issuer}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {cert.file ? (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-charcoal px-4 py-2 text-xs font-semibold text-cream transition-colors hover:bg-maroon-deep"
                  >
                    <FileText size={14} />
                    View Certificate
                  </a>
                ) : (
                  <span className="rounded-full bg-charcoal px-4 py-2 text-xs font-medium text-cream-dim">
                    Certificate pending upload
                  </span>
                )}
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2 text-xs font-medium text-cream-dim hover:text-cream"
                  >
                    Verify
                  </a>
                ) : null}
              </div>
            </div>
          ))}

          <AddCertificatePlaceholder />
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-xl font-bold text-cream">Education</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((item) => (
              <div
                key={item.school}
                className="rounded-2xl border border-hairline bg-charcoal-card p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-green-bright">
                  {item.period}
                </p>
                <h4 className="mt-1 font-semibold text-cream">{item.school}</h4>
                <p className="text-sm text-cream-dim">{item.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AddCertificatePlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-hairline p-6 text-center text-cream-dim">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-dashed border-hairline text-lg">
        +
      </span>
      <p className="text-sm font-medium">Add New Certificate or Course</p>
      <p className="text-xs">
        Add an entry to the certificates list in the content file to grow this
        gallery.
      </p>
    </div>
  )
}
