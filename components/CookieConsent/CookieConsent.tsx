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

            {/* Logo — nur mobile sichtbar */}
            <div className={styles.logo}>MISSION NIGHTS</div>

            <div className={styles.content}>
              <div className={styles.heading}>Datenschutzeinstellungen</div>
              <p className={styles.text}>
                Wir setzen Cookies, um unseren Internetauftritt benutzerfreundlicher
                zu gestalten und pseudonymisiert auszuwerten. Weitere Informationen
                in unserer{' '}
                <Link href="/datenschutz">Datenschutzerklärung</Link>.
              </p>
            </div>

            <div className={styles.buttons}>
              <button className={styles.btnAccept} onClick={acceptAll}>
                ALLES ANNEHMEN
              </button>
              <button className={styles.btnReject} onClick={rejectAll}>
                ALLE ABLEHNEN
              </button>
              <button className={styles.btnCustomize} onClick={() => setShowModal(true)}>
                Anpassen
              </button>
            </div>

            <div className={styles.links}>
              <Link href="/impressum">Impressum</Link>
              <span>|</span>
              <Link href="/datenschutz">Datenschutz</Link>
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
              sind immer aktiv.
            </p>

            <div className={styles.categories}>
              <div className={styles.category}>
                <div className={styles.catInfo}>
                  <div className={styles.catName}>Notwendig</div>
                  <div className={styles.catDesc}>Technisch erforderlich. Können nicht deaktiviert werden.</div>
                </div>
                <span className={styles.alwaysActive}>Immer aktiv</span>
              </div>
              <div className={styles.category}>
                <div className={styles.catInfo}>
                  <div className={styles.catName}>Analyse</div>
                  <div className={styles.catDesc}>Anonymisierte Auswertung zur Verbesserung unseres Angebots.</div>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
                  <span className={styles.toggleSlider} />
                </label>
              </div>
              <div className={styles.category}>
                <div className={styles.catInfo}>
                  <div className={styles.catName}>Marketing</div>
                  <div className={styles.catDesc}>Für relevante Inhalte und Kampagnen.</div>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
                  <span className={styles.toggleSlider} />
                </label>
              </div>
            </div>

            <div className={styles.modalButtons}>
              <button className={styles.modalBtnAccept} onClick={acceptAll}>Alles annehmen</button>
              <button className={styles.modalBtnSave} onClick={saveCustom}>Auswahl speichern</button>
              <button className={styles.modalBtnReject} onClick={rejectAll}>Alles ablehnen</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
