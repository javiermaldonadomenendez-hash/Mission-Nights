import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Blogs from '@/components/ui/blogs'

export const metadata: Metadata = {
  title: 'Blog – Wissen & Impulse',
  description: 'Artikel zu Unternehmertum, Netzwerk und persönlichem Wachstum von Mission Nights.',
}

export default function BlogPage() {
  return (
    <>
      <Nav alwaysScrolled />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <Blogs />
      </main>
      <Footer />
    </>
  )
}
