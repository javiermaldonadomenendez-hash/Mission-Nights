import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Ungültige E-Mail-Adresse' }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY

  if (!resendKey) {
    console.warn('RESEND_API_KEY nicht gesetzt. E-Mail:', email)
    return NextResponse.json({ error: 'Nicht konfiguriert' }, { status: 500 })
  }

  const send = (payload: object) =>
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

  // Bestätigungsmail an den Abonnenten
  await send({
    from: 'Mission Nights <newsletter@mission-nights.de>',
    to: [email],
    subject: 'Willkommen bei Mission Nights',
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:40px 24px">
        <p style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#a3a3a3;margin-bottom:24px">MISSION NIGHTS</p>
        <h1 style="font-size:24px;font-weight:800;color:#0a0a0a;margin-bottom:16px;line-height:1.2">Du bist dabei.</h1>
        <p style="font-size:15px;color:#737373;line-height:1.65;margin-bottom:24px">
          Danke für deine Anmeldung. Du bekommst ab jetzt als Erste(r) Informationen zu neuen Events, exklusiven Einblicken und Einladungen.
        </p>
        <p style="font-size:13px;color:#a3a3a3;line-height:1.65">
          Jederzeit abmeldbar. Kein Spam.<br/>
          <a href="https://www.mission-nights.de/datenschutz" style="color:#a3a3a3">Datenschutzerklärung</a>
        </p>
      </div>
    `,
  })

  // Benachrichtigung an info@mission-nights.de
  await send({
    from: 'Mission Nights <newsletter@mission-nights.de>',
    to: ['info@mission-nights.de'],
    subject: `Neue Newsletter-Anmeldung: ${email}`,
    text: `Neue Anmeldung: ${email}`,
  })

  return NextResponse.json({ ok: true })
}
