import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div
      className={cn(
        'mb-12 flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-maroon-bright">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <span className="h-1 w-16 rounded-full section-heading-line" />
      {description ? (
        <p
          className={cn(
            'max-w-2xl text-base text-cream-dim sm:text-lg',
            align === 'center' ? 'mx-auto' : '',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
