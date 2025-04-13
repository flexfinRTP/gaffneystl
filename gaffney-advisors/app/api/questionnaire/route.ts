import { NextResponse } from 'next/server'
import { sendQuestionnaireAdminEmail, sendQuestionnaireUserEmail } from '@/lib/email/mailjet'
import { z } from 'zod'

const questionnaireSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  // Add other fields as needed
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validationResult = questionnaireSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid form data',
          errors: validationResult.error.errors 
        },
        { status: 400 }
      )
    }

    const { email, ...responses } = validationResult.data

    // Check for required environment variables
    if (!process.env.MAILJET_API_KEY || !process.env.MAILJET_API_SECRET) {
      console.error('Mailjet credentials are missing')
      return NextResponse.json(
        { success: false, message: 'Email service configuration error' },
        { status: 500 }
      )
    }

    if (!process.env.ADMIN_EMAIL) {
      console.error('Admin email is not configured')
      return NextResponse.json(
        { success: false, message: 'Admin email configuration error' },
        { status: 500 }
      )
    }

    // Send admin notification
    await sendQuestionnaireAdminEmail(email, responses)

    // Send user confirmation
    await sendQuestionnaireUserEmail(email)

    return NextResponse.json({
      success: true,
      message: 'Questionnaire submitted successfully'
    })
  } catch (error: any) {
    console.error('Questionnaire submission error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || 'Failed to submit questionnaire',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
} 