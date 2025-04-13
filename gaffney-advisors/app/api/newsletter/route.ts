import { NextResponse } from 'next/server'
import { sendNewsletterConfirmationEmail } from '@/lib/email/mailjet'
import { getMailjet } from '@/lib/email/mailjet'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      )
    }

    const listId = process.env.MAILJET_LIST_ID
    if (!listId) {
      throw new Error('Mailjet list ID is not configured')
    }

    // Get the centralized Mailjet client
    const mailjet = getMailjet()

    // Add contact to Mailjet list
    await mailjet
      .post('contactslist', { version: 'v3' })
      .id(listId)
      .action('managecontact')
      .request({
        Email: email,
        Action: 'addnoforce',
      })

    // Send confirmation email
    await sendNewsletterConfirmationEmail(email)

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    })
  } catch (error: any) {
    console.error('Newsletter subscription error:', error)
    
    // Enhanced error logging
    if (error.statusCode) {
      console.error(`Mailjet status code: ${error.statusCode}`)
    }
    
    if (error.errorMessage) {
      console.error(`Mailjet error message: ${error.errorMessage}`)
    }
    
    if (error.response && error.response.body) {
      console.error('Mailjet API error response:', JSON.stringify(error.response.body, null, 2))
    }

    return NextResponse.json(
      { success: false, message: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
} 