import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Experience } from '@/components/portfolio/experience'
import { Projects } from '@/components/portfolio/projects'
import { Certificates } from '@/components/portfolio/certificates'
import { Learning } from '@/components/portfolio/learning'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'

export const Route = createFileRoute('/')({
  component: PortfolioPage,
})

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
