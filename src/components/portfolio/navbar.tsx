import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, personalInfo } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-hairline bg-charcoal/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-cream"
          onClick={() => setOpen(false)}
        >
          Thandu<span className="text-maroon-bright">xolo</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-cream-dim transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={personalInfo.cvFile}
            download
            className="inline-flex items-center gap-2 rounded-full bg-maroon-bright px-5 py-2.5 text-sm font-semibold text-cream shadow-lg shadow-maroon-deep/40 transition-transform hover:-translate-y-0.5 hover:bg-maroon"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-hairline p-2 text-cream lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-hairline bg-charcoal/95 px-5 pb-6 pt-2 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-cream-dim transition-colors hover:bg-charcoal-elevated hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={personalInfo.cvFile}
            download
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-maroon-bright px-5 py-2.5 text-sm font-semibold text-cream"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      ) : null}
    </header>
  )
}
