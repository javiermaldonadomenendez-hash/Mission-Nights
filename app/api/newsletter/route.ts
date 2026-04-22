import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Ungültige E-Mail-Adresse' }, { status: 400 })
  }

  const apiKey = process.env.MAILCHIMP_API_KEY
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
  const server = process.env.MAILCHIMP_SERVER // z.B. "us21"

  if (!apiKey || !audienceId || !server) {
    // Mailchimp noch nicht konfiguriert — Erfolg simulieren für UI-Tests
    console.warn('Mailchimp env vars nicht gesetzt. E-Mail:', email)
    return NextResponse.json({ ok: true })
  }

  const url = `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`

  const mcRes = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'pending', // Double-Opt-In
    }),
  })

  if (!mcRes.ok) {
    const data = await mcRes.json()
    // Bereits angemeldet → als Erfolg behandeln
    if (data.title === 'Member Exists') {
      return NextResponse.json({ ok: true })
    }
    return NextResponse.json({ error: 'Mailchimp-Fehler' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
