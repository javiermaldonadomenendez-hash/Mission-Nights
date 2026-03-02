'use client'

import { useEffect } from 'react'

export default function ScrollRevealInit() {
  useEffect(() => {
    // Reveal hero immediately
    document.querySelectorAll('.hero .reveal').forEach(el =>
      el.classList.add('in')
    )

    // Set up IntersectionObserver for all other .reveal elements
    const revealEls = document.querySelectorAll('.reveal:not(.in)')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )

    revealEls.forEach((el) => obs.observe(el))

    return () => obs.disconnect()
  }, [])

  return null
}
