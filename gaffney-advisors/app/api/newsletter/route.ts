import { NextResponse } from 'next/server'
import Mailjet from 'node-mailjet'

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY || '',
  apiSecret: process.env.MAILJET_API_SECRET || '',
})

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    try {
      // Try to create contact
      await mailjet
        .post('contact')
        .request({
          Email: email,
          IsExcludedFromCampaigns: false,
        })
    } catch (error: any) {
      // If contact already exists, that's fine - we'll continue
      if (error.statusCode !== 400 || !error.ErrorMessage.includes('already exists')) {
        throw error
      }
    }

    // Add contact to list
    await mailjet
      .post('listrecipient')
      .request({
        ContactAlt: email,
        ListID: process.env.MAILJET_LIST_ID,
        IsUnsubscribed: false,
      })

    // Send confirmation email to user
    const result = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_FROM_EMAIL,
            Name: process.env.MAILJET_FROM_NAME,
          },
          To: [
            {
              Email: email,
              Name: email.split('@')[0],
            },
          ],
          TemplateID: parseInt(process.env.MAILJET_TEMPLATE_NEWSLETTER_CONFIRMATION || '0'),
          TemplateLanguage: true,
          TemplateErrorDeliver: true,
          TemplateErrorReporting: {
            Email: process.env.ADMIN_EMAIL,
            Name: 'Template Error Reporting',
          },
          Subject: 'Gaffney Wealth - Thanks for Subscribing!',
          Variables: {
            firstName: email.split('@')[0],
            email: email,
            signupDate: new Date().toLocaleDateString(),
            companyName: 'Gaffney Wealth Management',
          },
        },
      ],
    })

    console.log('Mailjet send result:', JSON.stringify(result.body, null, 2))

    return NextResponse.json(
      { message: 'Successfully subscribed' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
} 