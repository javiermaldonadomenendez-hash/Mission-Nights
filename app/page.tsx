import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import NextEvent from '@/components/NextEvent'
import Experience from '@/components/Experience'
import Gallery from '@/components/Gallery'
import VisionDinner from '@/components/VisionDinner'
import Philosophy from '@/components/Philosophy'
import Reviews from '@/components/Reviews'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Nav />
      <Hero />
      <About />
      <NextEvent />
      <Experience />
      <Gallery />
      <Philosophy />
      <VisionDinner />
      <Reviews />
      <CTA />
      <Footer />
    </>
  )
}
