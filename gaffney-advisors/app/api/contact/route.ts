import { NextResponse } from 'next/server'
import Mailjet from 'node-mailjet'

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY || '',
  apiSecret: process.env.MAILJET_API_SECRET || '',
})

export async function POST(request: Request) {
  try {
    const { name, email, message, phone } = await request.json()

    // Send email to admin using template
    const result = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_FROM_EMAIL,
            Name: process.env.MAILJET_FROM_NAME,
          },
          To: [
            {
              Email: process.env.ADMIN_EMAIL,
              Name: 'Admin',
            },
          ],
          TemplateID: parseInt(process.env.MAILJET_TEMPLATE_CONTACT_FORM || '0'),
          TemplateLanguage: true,
          TemplateErrorDeliver: true,
          TemplateErrorReporting: {
            Email: process.env.ADMIN_EMAIL,
            Name: 'Template Error Reporting',
          },
          Subject: 'New Contact Form Submission',
          Variables: {
            name,
            email,
            phone: phone || 'Not provided',
            message,
            submissionDate: new Date().toLocaleDateString(),
            companyName: 'Gaffney Wealth Management',
          },
        },
      ],
    })

    console.log('Mailjet send result:', JSON.stringify(result.body, null, 2))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending contact form:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
} 