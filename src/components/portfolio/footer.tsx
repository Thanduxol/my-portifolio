import { personalInfo } from '@/data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-charcoal py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center text-sm text-cream-dim sm:flex-row sm:justify-between sm:text-left">
        <p>
          &copy; 2026 {personalInfo.fullName}. Built with care, curiosity, and
          a lot of coffee.
        </p>
        <p className="text-xs uppercase tracking-widest text-cream-dim/70">
          Who I Am → What I Know → My Journey → What I've Built → What I'm
          Learning
        </p>
      </div>
    </footer>
  )
}
