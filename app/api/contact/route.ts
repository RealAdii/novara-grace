import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/contactSchema'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid data', issues: parsed.error.issues }, { status: 400 })
    }

    const { name, phone, childAge, concern, message } = parsed.data

    await resend.emails.send({
      from: process.env.RESEND_FROM ?? 'onboarding@resend.dev',
      to: 'thenovaragracefoundation@gmail.com',
      subject: `New enquiry from ${name} — ${concern}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2c2c2a;">
          <div style="background: #1E6B5B; padding: 2rem; margin-bottom: 2rem;">
            <h1 style="color: white; font-size: 1.2rem; margin: 0; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase;">New Enquiry</h1>
            <p style="color: rgba(255,255,255,0.7); font-size: 0.8rem; margin: 0.5rem 0 0; letter-spacing: 0.1em; text-transform: uppercase;">Novara Grace</p>
          </div>
          <div style="padding: 0 1rem;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 0.75rem 0; border-bottom: 1px solid #e8f4f1; color: #9B5B6E; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; width: 140px;">Name</td>
                <td style="padding: 0.75rem 0; border-bottom: 1px solid #e8f4f1; font-size: 0.92rem;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 0.75rem 0; border-bottom: 1px solid #e8f4f1; color: #9B5B6E; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase;">Phone</td>
                <td style="padding: 0.75rem 0; border-bottom: 1px solid #e8f4f1; font-size: 0.92rem;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 0.75rem 0; border-bottom: 1px solid #e8f4f1; color: #9B5B6E; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase;">Child's Age</td>
                <td style="padding: 0.75rem 0; border-bottom: 1px solid #e8f4f1; font-size: 0.92rem;">${childAge}</td>
              </tr>
              <tr>
                <td style="padding: 0.75rem 0; border-bottom: 1px solid #e8f4f1; color: #9B5B6E; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase;">Concern</td>
                <td style="padding: 0.75rem 0; border-bottom: 1px solid #e8f4f1; font-size: 0.92rem;">${concern}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 0.75rem 0; color: #9B5B6E; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; vertical-align: top;">Message</td>
                <td style="padding: 0.75rem 0; font-size: 0.92rem; line-height: 1.7;">${message.replace(/\n/g, '<br/>')}</td>
              </tr>
              ` : ''}
            </table>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
