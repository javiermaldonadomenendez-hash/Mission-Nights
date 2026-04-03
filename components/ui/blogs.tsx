import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export type BlogArticle = {
  category: string
  description: string
  image: string
  publishDate: string
  readMoreLink: string
  title: string
  comingSoon?: boolean
}

const articlesData: BlogArticle[] = [
  {
    category: 'PERSÖNLICHKEIT',
    description:
      'Warum Willenskraft überschätzt wird — und welche wissenschaftlich belegten Systeme dich wirklich weiterbringen.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80',
    publishDate: '2. April 2026',
    readMoreLink: '/blog/disziplin-in-routinen',
    title: 'Warum Disziplin allein nicht reicht',
  },
  {
    category: 'NETZWERK',
    description:
      'Wie du auf Events echte Verbindungen knüpfst, die über den Abend hinaus halten.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80',
    publishDate: 'Demnächst',
    readMoreLink: '#',
    title: 'Networking neu gedacht',
    comingSoon: true,
  },
  {
    category: 'UNTERNEHMERTUM',
    description:
      'Warum die richtigen Menschen in deinem Umfeld wichtiger sind als jede Strategie.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
    publishDate: 'Demnächst',
    readMoreLink: '#',
    title: 'Das Prinzip der richtigen Menschen',
    comingSoon: true,
  },
]

export default function Blogs() {
  return (
    <section className="bg-white px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <p className="label mb-4">Wissen & Impulse</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400, letterSpacing: '-0.035em', lineHeight: 1.08 }}>
            Blog Artikel
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articlesData.map((article, index) => (
            <div
              key={index}
              style={{
                border: '1px solid var(--gray-200)',
                background: 'var(--white)',
                transition: 'box-shadow 0.22s',
                opacity: article.comingSoon ? 0.55 : 1,
              }}
              className={article.comingSoon ? 'pointer-events-none' : 'cursor-pointer hover:shadow-md'}
            >
              <div className="p-0">
                <div className="relative mb-4 sm:mb-6">
                  <Image
                    alt={article.title}
                    className="w-full object-cover"
                    style={{ height: '240px', display: 'block' }}
                    height={640}
                    src={article.image}
                    width={1200}
                  />
                  <p
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      background: 'var(--white)',
                      color: 'var(--black)',
                      fontSize: '0.625rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      padding: '4px 10px',
                    }}
                  >
                    #{article.category}
                  </p>
                  {article.comingSoon && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(255,255,255,0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>
                        Demnächst
                      </span>
                    </div>
                  )}
                </div>

                <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                  <h3
                    style={{
                      marginBottom: '8px',
                      fontWeight: 400,
                      fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.3,
                      color: 'var(--black)',
                    }}
                  >
                    {article.title}
                  </h3>
                  <p style={{ marginBottom: '24px', color: 'var(--gray-500)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                    {article.description}
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    {!article.comingSoon ? (
                      <Link
                        className="group relative flex items-center overflow-hidden font-medium text-xs sm:text-sm"
                        href={article.readMoreLink}
                        style={{ color: 'var(--black)' }}
                      >
                        <span
                          style={{
                            marginRight: '10px',
                            display: 'inline-flex',
                            padding: '8px',
                            border: '1px solid var(--gray-200)',
                            overflow: 'hidden',
                            position: 'relative',
                            transition: 'background 0.3s, color 0.3s',
                          }}
                          className="group-hover:bg-black group-hover:text-white"
                        >
                          <ArrowRight className="h-3 w-3 transition-all duration-500 group-hover:translate-x-8 group-hover:opacity-0" />
                          <ArrowRight
                            className="absolute h-3 w-3 transition-all duration-500"
                            style={{ top: '50%', left: '-16px', transform: 'translateY(-50%)' }}
                          />
                        </span>
                        Weiterlesen
                      </Link>
                    ) : (
                      <span style={{ fontSize: '0.75rem', color: 'var(--gray-400)' }}>—</span>
                    )}

                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.6875rem', color: 'var(--gray-400)' }}>
                      {article.publishDate}
                      <span style={{ width: '32px', borderTop: '1px solid var(--gray-300)' }} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
