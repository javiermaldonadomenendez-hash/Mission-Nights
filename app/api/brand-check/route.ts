import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, answers } = await req.json()

  if (!name || !email || !answers) {
    return NextResponse.json({ error: 'Fehlende Felder' }, { status: 400 })
  }

  const apiKey = process.env.MAILCHIMP_API_KEY
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
  const server = process.env.MAILCHIMP_SERVER
  const resendKey = process.env.RESEND_API_KEY

  // Mailchimp: Kontakt als Lead einschreiben mit Tag "brand-check"
  if (apiKey && audienceId && server) {
    const url = `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`
    await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: { FNAME: name.split(' ')[0], LNAME: name.split(' ').slice(1).join(' ') },
        tags: ['brand-check'],
      }),
    }).catch(() => {})
  }

  // Resend: Benachrichtigungs-E-Mail an info@mission-nights.de
  if (resendKey) {
    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      ``,
      `Antworten:`,
      `1. Marken-Herausforderung: ${answers[0] ?? '–'}`,
      `2. Marktdauer: ${answers[1] ?? '–'}`,
      `3. Nächstes Ziel: ${answers[2] ?? '–'}`,
    ].join('\n')

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Brand Check <onboarding@resend.dev>',
        to: ['info@mission-nights.de'],
        subject: `Neuer Brand-Check Lead: ${name}`,
        text: body,
      }),
    }).catch(() => {})
  } else {
    // Fallback: Ausgabe in Server-Logs
    console.log('Brand-Check Lead:', { name, email, answers })
  }

  return NextResponse.json({ ok: true })
}
