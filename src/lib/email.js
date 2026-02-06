import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev'
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'info@medlabservices1.com'

export async function sendContactEmail({ name, email, phone, message }) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: BUSINESS_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New message from the website contact form</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  })
}

export async function sendAutoReply({ name, email }) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: 'Thank you for contacting M.E.D Lab Services',
    html: `
      <h2>Thank you, ${name}!</h2>
      <p>We received your contact form submission and will get back to you within 24 hours.</p>
      <p>If you need immediate assistance, please call us at <strong>925-476-5082</strong>.</p>
      <br/>
      <p>Best regards,</p>
      <p><strong>M.E.D Lab Services</strong></p>
      <p>3190 Old Tunnel Rd St B, Lafayette, CA 94549</p>
    `,
  })
}
