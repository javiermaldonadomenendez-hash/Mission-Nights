'use client'

import { useState, useEffect } from 'react'
import styles from './NewsletterPopup.module.css'

const STORAGE_KEY = 'nl_dismissed'

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return
    const t = setTimeout(() => setVisible(true), 4000)
    return () => clearTimeout(t)
  }, [])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      setError('Etwas hat nicht geklappt. Bitte versuche es erneut.')
    } finally {
      setLoading(false)
    }
  }

  if (!visible) return null

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && dismiss()}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={dismiss} aria-label="Schließen">✕</button>

        {success ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.heading}>Fast geschafft!</h3>
            <p className={styles.sub}>Bitte bestätige deine E-Mail-Adresse. Wir haben dir eine Bestätigung geschickt.</p>
          </div>
        ) : (
          <>
            <span className={styles.eyebrow}>Mission Nights Newsletter</span>
            <h3 className={styles.heading}>Bleib auf dem Laufenden.</h3>
            <p className={styles.sub}>
              Neue Events, exklusive Einblicke und Einladungen — direkt in dein Postfach.
              Kein Spam. Jederzeit abmeldbar.
            </p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                type="email"
                placeholder="deine@email.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <button className={styles.btn} type="submit" disabled={loading}>
                {loading ? '...' : 'Anmelden'}
              </button>
            </form>
            {error && <p className={styles.errorText}>{error}</p>}
            <button className={styles.skipBtn} onClick={dismiss}>
              Kein Interesse
            </button>
          </>
        )}
      </div>
    </div>
  )
}
