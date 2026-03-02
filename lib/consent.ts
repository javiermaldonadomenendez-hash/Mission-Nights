export type ConsentCategory = 'necessary' | 'analytics' | 'marketing'

export interface ConsentData {
  necessary: true
  analytics: boolean
  marketing: boolean
  timestamp: number
}

const CONSENT_KEY = 'cookie_consent_v1'

const listeners = new Set<(data: ConsentData | null) => void>()

export function getConsent(): ConsentData | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    return raw ? (JSON.parse(raw) as ConsentData) : null
  } catch {
    return null
  }
}

export function setConsent(analytics: boolean, marketing: boolean): ConsentData {
  const data: ConsentData = {
    necessary: true,
    analytics,
    marketing,
    timestamp: Date.now(),
  }
  if (typeof window !== 'undefined') {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data))
  }
  listeners.forEach((fn) => fn(data))
  return data
}

export function hasConsent(category: ConsentCategory): boolean {
  if (category === 'necessary') return true
  const consent = getConsent()
  return consent ? consent[category] : false
}

export function subscribeConsent(
  callback: (data: ConsentData | null) => void
): () => void {
  listeners.add(callback)
  return () => listeners.delete(callback)
}
