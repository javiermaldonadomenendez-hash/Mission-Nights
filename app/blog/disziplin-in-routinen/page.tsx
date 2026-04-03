import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Warum Disziplin allein nicht reicht',
  description:
    'Aktuelle Erkenntnisse aus Neurowissenschaft und Verhaltenspsychologie — wie du Routinen aufbaust, die wirklich halten.',
}

export default function DisziplinInRoutinen() {
  return (
    <>
      <Nav alwaysScrolled />
      <main style={{ paddingTop: 'var(--nav-h)' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: 'clamp(280px, 45vw, 520px)', background: 'var(--gray-900)', overflow: 'hidden' }}>
          <Image
            src="https://assets.mission-nights.de/kunden/mission-nights/images/blogbild1.png"
            alt="Disziplin und Routinen"
            fill
            priority
            style={{ objectFit: 'cover', opacity: 0.45 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.65))' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(32px,5vw,72px)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
              <span style={{ fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', display: 'block', marginBottom: '16px' }}>
                #PERSÖNLICHKEIT
              </span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)', fontWeight: 400, letterSpacing: '-0.035em', lineHeight: 1.1, color: 'var(--white)', marginBottom: '16px' }}>
                Warum Disziplin allein nicht reicht — und wie du Routinen aufbaust, die wirklich halten
              </h1>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
                2. April 2026 · 8 min Lesezeit
              </p>
            </div>
          </div>
        </div>

        {/* Artikel */}
        <article style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(48px,7vw,96px) clamp(24px,6vw,80px)' }}>

          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--gray-500)', marginBottom: '48px', transition: 'color 0.2s' }}
            className="hover:text-black">
            <ArrowLeft size={16} />
            Alle Artikel
          </Link>

          <p style={{ fontSize: 'clamp(1.0625rem, 1.8vw, 1.1875rem)', color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: '20px', fontStyle: 'italic' }}>
            Aktuelle Erkenntnisse aus Neurowissenschaft und Verhaltenspsychologie
          </p>

          <p style={p}>
            Die meisten Menschen starten mit Feuer. Neues Jahr, neuer Trainingsplan, neues Journal. Zwei Wochen später: Stille. Keine Einträge mehr, keine Workouts, keine Veränderung. Und dann kommt der Gedanke, der alles sabotiert: <em>Ich bin einfach nicht diszipliniert genug.</em>
          </p>
          <p style={p}>
            Aber was, wenn das Problem nie deine Disziplin war — sondern dein System?
          </p>

          <h2 style={h2}>Dein Gehirn will keine Disziplin. Es will Effizienz.</h2>
          <p style={p}>
            Rund 40–45 Prozent unserer täglichen Handlungen laufen nicht bewusst ab. Sie sind automatisierte Muster — Gewohnheiten, die unser Gehirn abspielt, ohne dass wir aktiv darüber nachdenken müssen. Dieses Prinzip heißt in der Forschung <em>Automatizität</em>, und es wird gesteuert von einer tiefliegenden Hirnstruktur: den Basalganglien.
          </p>
          <p style={p}>
            Wenn du ein neues Verhalten zum ersten Mal ausführst, ist dein präfrontaler Kortex hochaktiv — das ist der Teil deines Gehirns, der für bewusste Entscheidungen zuständig ist. Das kostet Energie. Viel Energie. Aber je öfter du dasselbe Verhalten im selben Kontext wiederholst, desto stärker verschiebt sich die Aktivität von der bewussten Steuerung in die Basalganglien. Der Prozess wird automatisch. Und genau das ist der Moment, in dem eine Routine keine Disziplin mehr braucht.
          </p>
          <p style={p}>
            Neurowissenschaftler beschreiben diesen Vorgang wie einen Waldweg: Am Anfang ist da nur Unterholz. Jede Wiederholung schlägt den Pfad ein Stück breiter. Irgendwann ist es eine befestigte Straße — und du läufst sie, ohne darüber nachzudenken.
          </p>

          <h2 style={h2}>Der 21-Tage-Mythos ist genau das: ein Mythos</h2>
          <p style={p}>
            Einer der hartnäckigsten Irrtümer in der Persönlichkeitsentwicklung ist die Behauptung, eine neue Gewohnheit sei in 21 Tagen etabliert. Diese Zahl stammt aus den Beobachtungen eines plastischen Chirurgen in den 1960er Jahren — seine Patienten brauchten im Schnitt drei Wochen, um sich an ihr neues Aussehen zu gewöhnen. Mit Routinenaufbau hatte das nichts zu tun.
          </p>
          <p style={p}>
            Was sagt die aktuelle Forschung? Eine vielzitierte Studie aus dem <em>European Journal of Social Psychology</em> zeigte, dass es im Durchschnitt 66 Tage dauert, bis ein neues Verhalten automatisch abläuft — wobei die Spanne von 18 bis 254 Tagen reichte. Neuere Untersuchungen der <em>University of South Australia</em> bestätigen: Gesundheitsbezogene Gewohnheiten können sogar bis zu 335 Tage brauchen.
          </p>
          <p style={p}>
            Die Botschaft ist klar: Plane mit 10 Wochen als realistischem Minimum. Aber — und das ist die gute Nachricht — es wird jede Woche ein Stück leichter.
          </p>

          <h2 style={h2}>Der Habit Loop: Auslöser, Routine, Belohnung</h2>
          <p style={p}>Jede Gewohnheit folgt einem neurologischen Dreiklang, den Forscher am MIT erstmals beschrieben haben:</p>
          <div style={{ borderLeft: '2px solid var(--gray-200)', paddingLeft: '24px', margin: '24px 0' }}>
            <p style={{ ...p, marginBottom: '12px' }}><strong>Cue</strong> — Ein Auslöser, der das Verhalten startet. Das kann eine Uhrzeit sein, ein Ort, eine Emotion oder eine vorhergehende Handlung.</p>
            <p style={{ ...p, marginBottom: '12px' }}><strong>Routine</strong> — Das eigentliche Verhalten. Das, was du tust.</p>
            <p style={{ ...p, marginBottom: 0 }}><strong>Reward</strong> — Die Belohnung, die dein Gehirn registriert. Dopamin wird ausgeschüttet, und dein Gehirn merkt sich: Das war es wert.</p>
          </div>
          <p style={p}>
            Wenn du diesen Loop bewusst gestaltest, brauchst du keine heroische Willenskraft. Du brauchst ein klares Signal, eine einfache Handlung und ein befriedigendes Ergebnis.
          </p>

          <h2 style={h2}>Fünf Strategien, die wissenschaftlich funktionieren</h2>

          <h3 style={h3}>1. Starte lächerlich klein</h3>
          <p style={p}>
            Die größte Falle: Zu viel auf einmal. Statt „eine Stunde Sport" starte mit zehn Minuten. Statt „jeden Tag journalen" starte mit drei Sätzen. Die Forschung zeigt konsistent, dass einfache Handlungen wie ein Glas Wasser trinken schneller automatisiert werden als komplexe Routinen wie ein 50-Minuten-Workout.
          </p>
          <p style={p}>
            Dein Ziel in den ersten Wochen ist nicht Transformation. Dein Ziel ist, die neuronale Verbindung aufzubauen. Die Intensität kommt später.
          </p>

          <h3 style={h3}>2. Nutze Habit Stacking</h3>
          <p style={p}>
            Koppele neue Gewohnheiten an bestehende. Die Forschung der <em>British Psychological Society</em> zeigt: Menschen, die neue Routinen an existierende Abläufe knüpfen, haben eine um 64 Prozent höhere Erfolgsrate als solche, die versuchen, isolierte Gewohnheiten zu etablieren.
          </p>
          <p style={p}>Die Formel ist simpel: <em>Nach [bestehendem Verhalten] mache ich [neues Verhalten].</em></p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['Nach dem Aufstehen trinke ich ein Glas Wasser.', 'Nach dem Hinsetzen am Schreibtisch schreibe ich drei Prioritäten auf.', 'Nach dem Abendessen gehe ich zehn Minuten spazieren.'].map((item) => (
              <li key={item} style={{ fontSize: '1rem', color: 'var(--gray-600)', lineHeight: 1.7, paddingLeft: '20px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--gray-400)' }}>–</span>
                {item}
              </li>
            ))}
          </ul>

          <h3 style={h3}>3. Blocke feste Zeiten — verlass dich nie auf „irgendwann"</h3>
          <p style={p}>
            Eine Studie mit 300 Führungskräften aus dem Jahr 2025 ergab: Wer feste Zeitblöcke für neue Gewohnheiten einplant, hält sie 3,2-mal häufiger durch als jemand, der sie „irgendwo im Tag unterbringt". 78 Prozent der erfolgreichen Routinen-Aufbauer gaben an, ihre wichtigsten Gewohnheiten vor 9 Uhr morgens abzuschließen.
          </p>
          <p style={p}>Das ist keine Frage von Disziplin. Das ist Architektur.</p>

          <h3 style={h3}>4. Gestalte deine Umgebung</h3>
          <p style={p}>
            Dein Umfeld ist stärker als dein Wille. Wenn die Sporttasche gepackt neben der Tür steht, sinkt die Hürde. Wenn das Handy nachts in einem anderen Raum liegt, steigt die Schlafqualität. Umweltdesign — in der Forschung als <em>Environmental Design</em> bezeichnet — ist einer der zuverlässigsten Hebel für nachhaltige Verhaltensänderung.
          </p>
          <p style={p}>Mach das erwünschte Verhalten sichtbar und einfach. Mach das unerwünschte Verhalten unsichtbar und umständlich.</p>

          <h3 style={h3}>5. Plane den Rückfall — bevor er passiert</h3>
          <p style={p}>
            Ein verpasster Tag ist kein Scheitern. Die Forschung zeigt: Gelegentliches Aussetzen stört den Gewohnheitsaufbau kaum. Entscheidend ist, was danach passiert. Eine Studie im <em>Journal of Personality and Social Psychology</em> (2025) fand heraus, dass Menschen mit einem klaren Erholungsprotokoll nach einem Aussetzer zu 82 Prozent häufiger ihre Routine wieder aufnahmen als Menschen ohne einen solchen Plan.
          </p>
          <p style={p}>
            Die zwei wichtigsten Regeln nach einem Aussetzer: Sofort bei der nächsten Gelegenheit wieder einsteigen — nicht auf einen „perfekten Neustart" warten. Und die Erwartungen kurzzeitig senken, statt aufzugeben.
          </p>

          <h2 style={h2}>Warum Disziplin überschätzt wird</h2>
          <p style={p}>
            Die klassische Theorie der <em>Ego Depletion</em> — populär gemacht durch den Psychologen Roy Baumeister — besagt, dass Selbstkontrolle eine begrenzte Ressource ist, vergleichbar mit einem Muskel, der ermüdet. Neuere Forschung hat diese Idee verfeinert: Es geht weniger darum, dass die Energie tatsächlich aufgebraucht wird, sondern dass der Körper sie präventiv konserviert.
          </p>
          <p style={p}>
            Besonders spannend ist die Arbeit von Veronika Job, Carol Dweck und Gregory Walton. Ihre Studien zeigen: Menschen, die Willenskraft als unbegrenzte Ressource betrachten, erleben deutlich weniger Leistungsabfall nach anstrengenden Selbstkontrollaufgaben. Die Überzeugung über die eigene Willenskraft beeinflusst also direkt, wie viel davon tatsächlich zur Verfügung steht.
          </p>
          <p style={p}>
            Die praktische Konsequenz: Statt auf Willenskraft zu setzen, baue Systeme, die Willenskraft überflüssig machen. Jede Gewohnheit, die automatisch läuft, ist eine Entscheidung weniger, die du am Tag treffen musst — und damit mehr Kapazität für die Dinge, die wirklich deine volle Aufmerksamkeit brauchen.
          </p>

          <h2 style={h2}>Der systembasierte Ansatz schlägt den zielbasierten</h2>
          <p style={p}>
            Eine aktuelle Mini-Review-Studie fasst es so zusammen: Systemorientierte Ansätze sind bei der Gewohnheitsbildung konsequent effektiver als rein zielorientierte Strategien. Ziele geben die Richtung vor — aber Systeme bestimmen, ob du dort ankommst.
          </p>
          <p style={p}>
            Der Unterschied? Ein Ziel sagt: „Ich will fitter werden." Ein System sagt: „Jeden Dienstag und Donnerstag um 7 Uhr gehe ich ins Gym. Montag, Mittwoch, Freitag laufe ich 20 Minuten. Am Sonntag ist Pause."
          </p>
          <p style={p}>
            Führungskräfte, die ihre Routinen über mehrere Lebensbereiche hinweg vernetzen — Bewegung, Lernen, Beziehungen, Beruf — berichten über 47 Prozent höhere Lebenszufriedenheit und 39 Prozent bessere Work-Life-Integration.
          </p>

          {/* Fazit */}
          <div style={{ borderTop: '1px solid var(--gray-200)', marginTop: '48px', paddingTop: '40px' }}>
            <h2 style={{ ...h2, marginTop: 0 }}>Die Essenz</h2>
            <p style={p}>Routinen aufzubauen ist keine Frage des Charakters. Es ist Handwerk. Neurologie. Architektur.</p>
            <p style={p}>
              Starte klein. Koppele Neues an Bestehendes. Blocke feste Zeiten. Gestalte deine Umgebung. Plane den Rückfall. Und vor allem: Gib dir die 10 Wochen, die dein Gehirn braucht, um aus bewusster Anstrengung mühelose Automatik zu machen.
            </p>
            <p style={{ ...p, fontWeight: 500, color: 'var(--black)', marginBottom: 0 }}>
              Disziplin bringt dich ins Spiel. Aber Systeme halten dich drin.
            </p>
          </div>

          {/* CTA */}
          <div style={{ marginTop: '64px', padding: 'clamp(32px,5vw,52px)', background: 'var(--gray-900)', color: 'var(--white)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '16px' }}>
              Mission Nights
            </span>
            <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 400, letterSpacing: '-0.03em', marginBottom: '12px' }}>
              Tausch dich mit Menschen aus, die ähnlich denken.
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.45)', marginBottom: '28px', lineHeight: 1.65 }}>
              Beim nächsten Mission Nights Event treffen Theorie und Praxis aufeinander.
            </p>
            <a href="/#event" className="btn btn-light btn-md">
              Zum nächsten Event
            </a>
          </div>

          <div style={{ marginTop: '48px' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--gray-500)', transition: 'color 0.2s' }}
              className="hover:text-black">
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

const p: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--gray-600)',
  lineHeight: 1.8,
  marginBottom: '20px',
}

const h2: React.CSSProperties = {
  fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
  fontWeight: 500,
  letterSpacing: '-0.025em',
  color: 'var(--black)',
  marginTop: '48px',
  marginBottom: '16px',
}

const h3: React.CSSProperties = {
  fontSize: '1.0625rem',
  fontWeight: 600,
  letterSpacing: '-0.01em',
  color: 'var(--black)',
  marginTop: '32px',
  marginBottom: '12px',
}
