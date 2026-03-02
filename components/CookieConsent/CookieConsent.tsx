'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getConsent, setConsent } from '@/lib/consent'
import styles from './CookieConsent.module.css'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    if (!getConsent()) setVisible(true)
  }, [])

  if (!visible) return null

  const acceptAll = () => {
    setConsent(true, true)
    setVisible(false)
    setShowModal(false)
  }

  const rejectAll = () => {
    setConsent(false, false)
    setVisible(false)
    setShowModal(false)
  }

  const saveCustom = () => {
    setConsent(analytics, marketing)
    setVisible(false)
    setShowModal(false)
  }

  return (
    <>
      {/* ── Banner ── */}
      {!showModal && (
        <div className={styles.banner}>
          <div className={styles.inner}>
            <div className={styles.content}>
              <div className={styles.heading}>Datenschutzeinstellungen</div>
              <p className={styles.text}>
                Wir setzen Cookies, um unseren Internetauftritt benutzerfreundlicher
                zu gestalten, optimal auf Ihre Bedürfnisse anzupassen und
                pseudonymisiert auszuwerten. Weitere Informationen finden Sie in
                unserer{' '}
                <Link href="/datenschutz">Datenschutzerklärung</Link>.
              </p>
              <div className={styles.links}>
                <Link href="/impressum">Impressum</Link>
                <Link href="/datenschutz">Datenschutz</Link>
              </div>
            </div>

            <div className={styles.buttons}>
              <button className={styles.btnReject} onClick={rejectAll}>
                ALLE ABLEHNEN
              </button>
              <button className={styles.btnCustomize} onClick={() => setShowModal(true)}>
                ANPASSEN
              </button>
              <button className={styles.btnAccept} onClick={acceptAll}>
                ALLES ANNEHMEN
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Anpassen Modal ── */}
      {showModal && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className={styles.modal}>
            <div className={styles.modalHeading}>Datenschutzeinstellungen</div>
            <p className={styles.modalSubtext}>
              Wählen Sie, welche Cookies Sie zulassen möchten. Notwendige Cookies
              sind immer aktiv, da sie für den Betrieb der Website erforderlich sind.
            </p>

            <div className={styles.categories}>
              {/* Notwendig – immer aktiv */}
              <div className={styles.category}>
                <div className={styles.catInfo}>
                  <div className={styles.catName}>Notwendig</div>
                  <div className={styles.catDesc}>
                    Technisch erforderlich für den Betrieb der Website.
                    Können nicht deaktiviert werden.
                  </div>
                </div>
                <span className={styles.alwaysActive}>Immer aktiv</span>
              </div>

              {/* Analyse */}
              <div className={styles.category}>
                <div className={styles.catInfo}>
                  <div className={styles.catName}>Analyse</div>
                  <div className={styles.catDesc}>
                    Anonymisierte Auswertung der Website-Nutzung zur Verbesserung
                    unseres Angebots.
                  </div>
                </div>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                  />
                  <span className={styles.toggleSlider} />
                </label>
              </div>

              {/* Marketing */}
              <div className={styles.category}>
                <div className={styles.catInfo}>
                  <div className={styles.catName}>Marketing</div>
                  <div className={styles.catDesc}>
                    Werden verwendet, um relevante Inhalte und Kampagnen
                    anzuzeigen.
                  </div>
                </div>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                  />
                  <span className={styles.toggleSlider} />
                </label>
              </div>
            </div>

            <div className={styles.modalButtons}>
              <button className={styles.modalBtnReject} onClick={rejectAll}>
                Alles ablehnen
              </button>
              <button className={styles.modalBtnSave} onClick={saveCustom}>
                Auswahl speichern
              </button>
              <button className={styles.modalBtnAccept} onClick={acceptAll}>
                Alles annehmen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
