'use client'

import { useState } from 'react'
import styles from './BrandCheck.module.css'

const QUESTIONS = [
  {
    q: 'Was ist deine größte Marken-Herausforderung?',
    options: ['Kein klarer Fokus', 'Austauschbarer Auftritt', 'Zu wenig Anfragen', 'Ungenutztes Potenzial'],
  },
  {
    q: 'Wie lange bist du schon am Markt?',
    options: ['Noch ganz neu', '1–3 Jahre', '3–10 Jahre', 'Über 10 Jahre'],
  },
  {
    q: 'Was ist dein nächstes Ziel?',
    options: ['Mehr Sichtbarkeit', 'Bessere Anfragen', 'Klarer Auftritt', 'Wachstum skalieren'],
  },
]

export default function BrandCheck() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const isQuizDone = step >= QUESTIONS.length

  const next = () => {
    if (!selected) return
    setAnswers((prev) => [...prev, selected])
    setSelected(null)
    setStep((s) => s + 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/brand-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, answers }),
      })
      if (!res.ok) throw new Error()
      setDone(true)
    } catch {
      setError('Etwas hat nicht geklappt. Versuche es erneut.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.card}>
          {done ? (
            <div className={styles.successState}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>Wir melden uns!</h3>
              <p className={styles.successSub}>
                Du hörst innerhalb von 24 Stunden von uns — mit ehrlichem Feedback zu deinem Markenauftritt.
              </p>
            </div>
          ) : !isQuizDone ? (
            <>
              <div className={styles.progress}>
                <span className={styles.progressLabel}>{step + 1} / {QUESTIONS.length}</span>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }} />
                </div>
              </div>
              <p className={styles.question}>{QUESTIONS[step].q}</p>
              <div className={styles.options}>
                {QUESTIONS[step].options.map((opt) => (
                  <button
                    key={opt}
                    className={`${styles.option} ${selected === opt ? styles.optionSelected : ''}`}
                    onClick={() => setSelected(opt)}
                    type="button"
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <button
                className={styles.nextBtn}
                onClick={next}
                disabled={!selected}
                type="button"
              >
                {step < QUESTIONS.length - 1 ? 'Weiter →' : 'Zum Ergebnis →'}
              </button>
            </>
          ) : (
            <>
              <div className={styles.formHeader}>
                <span className={styles.formEyebrow}>Fast geschafft</span>
                <p className={styles.formTitle}>Wo sollen wir dein persönliches Feedback hinschicken?</p>
              </div>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fields}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Dein Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                  />
                  <input
                    className={styles.input}
                    type="email"
                    placeholder="deine@email.de"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                {error && <p className={styles.errorText}>{error}</p>}
                <button className={styles.submitBtn} type="submit" disabled={loading}>
                  {loading ? 'Wird gesendet...' : 'Kostenlose Analyse anfordern'}
                </button>
                <p className={styles.disclaimer}>
                  Kein Spam. Kein Verkaufsgespr&auml;ch. Nur ehrliches Feedback.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
