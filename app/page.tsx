import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { ContactStrip } from '@/components/ContactStrip'
import { Beliefs } from '@/components/Beliefs'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'
import { Team } from '@/components/Team'
import { Foundation } from '@/components/Foundation'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ContactStrip />
      <Beliefs />
      <Services />
      <Testimonials />
      <Team />
      <Foundation />
      <ContactSection />
      <Footer />
    </>
  )
}
