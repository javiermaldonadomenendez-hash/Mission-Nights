import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Das Prinzip der richtigen Menschen',
  description:
    'Warum die richtigen Menschen in deinem Umfeld wichtiger sind als jede Strategie — und was die Wissenschaft dazu sagt.',
}

async function getPost() {
  const filePath = path.join(process.cwd(), 'blog', 'das-prinzip-der-richtigen-menschen.md')
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const processed = await remark().use(remarkHtml).process(content)
  return { frontmatter: data, html: processed.toString() }
}

export default async function DasPrinzipDerRichtigenMenschen() {
  const { html } = await getPost()

  return (
    <>
      <Nav alwaysScrolled />
      <main style={{ paddingTop: 'var(--nav-h)' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: 'clamp(280px, 45vw, 520px)', background: 'var(--gray-900)', overflow: 'hidden' }}>
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            alt="Das Prinzip der richtigen Menschen"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center center', opacity: 0.5 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(32px,5vw,72px)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
              <span style={{ fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', display: 'block', marginBottom: '16px' }}>
                #UNTERNEHMERTUM
              </span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)', fontWeight: 400, letterSpacing: '-0.035em', lineHeight: 1.1, color: 'var(--white)', marginBottom: '16px' }}>
                Das Prinzip der richtigen Menschen: Warum dein Umfeld wichtiger ist als jede Strategie
              </h1>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
                6. April 2026 · 9 min Lesezeit
              </p>
            </div>
          </div>
        </div>

        {/* Artikel */}
        <article style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(48px,7vw,96px) clamp(24px,6vw,80px)' }}>

          <Link
            href="/blog"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--gray-500)', marginBottom: '48px', transition: 'color 0.2s' }}
            className="hover:text-black"
          >
            <ArrowLeft size={16} />
            Alle Artikel
          </Link>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* CTA */}
          <div style={{ marginTop: '64px', padding: 'clamp(32px,5vw,52px)', background: 'var(--gray-900)', color: 'var(--white)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '16px' }}>
              Mission Nights
            </span>
            <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 400, letterSpacing: '-0.03em', marginBottom: '12px' }}>
              Sitz an den richtigen Tischen.
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.45)', marginBottom: '28px', lineHeight: 1.65 }}>
              Kleine Runde. Echte Gespräche. Bleibende Verbindungen.
            </p>
            <a href="/#event" className="btn btn-light btn-md">
              Zum nächsten Event
            </a>
          </div>

          <div style={{ marginTop: '48px' }}>
            <Link
              href="/blog"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--gray-500)', transition: 'color 0.2s' }}
              className="hover:text-black"
            >
              <ArrowLeft size={16} />
              Alle Artikel
            </Link>
          </div>

        </article>
      </main>
      <Footer />
    </>
  )
}
