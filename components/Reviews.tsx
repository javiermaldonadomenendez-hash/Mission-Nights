'use client'

import { motion } from 'framer-motion'
import { TestimonialsColumn, type Testimonial } from '@/components/ui/testimonials-columns-1'

const testimonials: Testimonial[] = [
  {
    text: 'Mission Nights ist das Beste, was mir passieren konnte. Ich habe an einem Abend mehr wertvolle Kontakte geknüpft als in einem ganzen Jahr auf klassischen Netzwerkveranstaltungen.',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    name: 'Samuel',
    role: 'Unternehmer',
  },
  {
    text: 'Die Qualität der Gespräche ist auf einem völlig anderen Level. Man merkt sofort, dass hier Menschen zusammenkommen, die wirklich etwas bewegen wollen. Absolut empfehlenswert.',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    name: 'Nikita',
    role: 'Startup-Gründerin',
  },
  {
    text: 'Ich bin inspiriert nach Hause gegangen — mit neuen Ideen, neuer Energie und echten Verbindungen. Genau das, was ich gebraucht habe.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Kira',
    role: 'Coach & Beraterin',
  },
  {
    text: 'Die Intimität des Formats ist der Schlüssel. Keine anonyme Masse, sondern ein Kreis von Menschen, bei dem man sofort das Gefühl hat: hier passiert etwas Besonderes.',
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
    name: 'Leon',
    role: 'Investor',
  },
  {
    text: 'Als Gründerin bin ich es gewohnt, alleine Entscheidungen zu treffen. Bei Mission Nights habe ich gemerkt, wie viel leichter alles wird, wenn man die richtigen Menschen um sich hat.',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
    name: 'Janina',
    role: 'Gründerin',
  },
  {
    text: 'Was mich am meisten überrascht hat: Man spricht hier offen über Herausforderungen und Zweifel — und bekommt echte Antworten. Eine Community, die trägt.',
    image: 'https://randomuser.me/api/portraits/men/66.jpg',
    name: 'Alex',
    role: 'CEO',
  },
  {
    text: 'Ich bin schon mehrfach dabei gewesen und jedes Mal nehme ich etwas mit. Der Input der anderen Unternehmer hat mein Denken mehr verändert als so manches Buch.',
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
    name: 'Tim',
    role: 'Unternehmer',
  },
  {
    text: 'Selten habe ich einen Abend so bewusst erlebt. Die Atmosphäre, die Menschen, die Gespräche — Mission Nights hat eine eigene Energie, die schwer in Worte zu fassen ist.',
    image: 'https://randomuser.me/api/portraits/men/88.jpg',
    name: 'Jan',
    role: 'Creative Director',
  },
  {
    text: 'Bei Mission Nights spürt man sofort, dass hier Menschen zusammenkommen, die nicht nur reden, sondern wirklich gestalten. Ein Abend, der nachhallt.',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Laura',
    role: 'Brand Strategin',
  },
  {
    text: 'Ich investiere seit Jahren in Start-ups — aber die Netzwerke, die bei Mission Nights entstehen, haben eine Qualität, die man nicht kaufen kann. Einfach außergewöhnlich.',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'Marco',
    role: 'Business Angel',
  },
  {
    text: 'Die Tiefe der Gespräche hat mich überrascht. Statt Small Talk gab es echten Austausch über Visionen und Herausforderungen. Genau das braucht man als Gründerin.',
    image: 'https://randomuser.me/api/portraits/women/31.jpg',
    name: 'Sophie',
    role: 'Product Managerin',
  },
  {
    text: 'Was Mission Nights von anderen Events unterscheidet? Das Gefühl, dass jeder im Raum wirklich präsent ist. Kein Networking-Theater, sondern echte Verbindungen.',
    image: 'https://randomuser.me/api/portraits/women/67.jpg',
    name: 'Lena',
    role: 'Marketing-Leiterin',
  },
]

const firstColumn = testimonials.slice(0, 4)
const secondColumn = testimonials.slice(4, 8)
const thirdColumn = testimonials.slice(8, 12)

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="label">Stimmen</span>
          <h2>Was andere sagen.</h2>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 overflow-hidden" style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          maxHeight: '680px',
        }}>
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={22}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={20}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  )
}
