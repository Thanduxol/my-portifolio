import { Github, Languages, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section id="about" className="relative border-b border-hairline py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Who I Am"
          title="About Me"
          description="A quick look at my background — every field below is easy to keep current as my journey grows."
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="glow-maroon relative overflow-hidden rounded-3xl border border-hairline bg-charcoal-card p-3">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.fullName}
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-hairline bg-green-deep px-4 py-3 shadow-xl sm:block">
              <p className="text-xs uppercase tracking-widest text-cream-dim">
                Based in
              </p>
              <p className="text-sm font-semibold text-cream">
                {personalInfo.location}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-cream">
                {personalInfo.fullName}
              </h3>
              <p className="text-sm font-medium text-maroon-bright">
                {personalInfo.title}
              </p>
            </div>

            <p className="leading-relaxed text-cream-dim">{personalInfo.bio}</p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <InfoRow icon={<MapPin size={16} />} label="Location" value={personalInfo.location} />
              <InfoRow icon={<Mail size={16} />} label="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
              <InfoRow icon={<Phone size={16} />} label="Phone" value={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
              <InfoRow
                icon={<Languages size={16} />}
                label="Languages"
                value={personalInfo.languages.join(' & ')}
                iconOverride
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <SocialLink href={personalInfo.linkedin} icon={<Linkedin size={16} />} label="LinkedIn" />
              <SocialLink href={personalInfo.github} icon={<Github size={16} />} label="GitHub" />
              <SocialLink href={personalInfo.cvFile} icon={<Mail size={16} />} label="View CV" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({
  icon,
  label,
  value,
  href,
  iconOverride,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  iconOverride?: boolean
}) {
  const content = (
    <div className="flex items-center gap-3 rounded-xl border border-hairline bg-charcoal-card px-4 py-3 transition-colors hover:border-maroon-bright/40">
      <span
        className={
          iconOverride
            ? 'flex h-8 w-8 items-center justify-center rounded-lg bg-green-deep text-green-bright'
            : 'flex h-8 w-8 items-center justify-center rounded-lg bg-maroon-deep text-maroon-bright'
        }
      >
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-cream-dim">{label}</p>
        <p className="truncate text-sm font-medium text-cream">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    )
  }

  return content
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-hairline bg-charcoal-card px-4 py-2 text-sm font-medium text-cream-dim transition-colors hover:border-green-bright/50 hover:text-cream"
    >
      {icon}
      {label}
    </a>
  )
}
