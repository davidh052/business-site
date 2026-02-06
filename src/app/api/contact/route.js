import { NextResponse } from 'next/server'
import { sendContactEmail, sendAutoReply } from '@/lib/email'
import { validateContactForm } from '@/lib/validation'
import { checkRateLimit } from '@/lib/rate-limit'

export async function POST(request) {
  // Rate limiting
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const { allowed } = checkRateLimit(ip)

  if (!allowed) {
    return NextResponse.json(
      { message: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  // Parse and validate
  const body = await request.json()
  const { name, email, phone, message } = body

  const error = validateContactForm({ name, email, message })
  if (error) {
    return NextResponse.json({ message: error }, { status: 400 })
  }

  // Send emails
  try {
    await sendContactEmail({ name, email, phone, message })
    await sendAutoReply({ name, email })

    return NextResponse.json({ message: 'Message sent successfully' })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    )
  }
}
