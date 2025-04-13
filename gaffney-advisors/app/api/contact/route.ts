import { NextResponse } from 'next/server'
import { sendContactFormEmail } from '@/lib/email/mailjet'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    await sendContactFormEmail(name, email, message)

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully'
    })
  } catch (error: any) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
} 