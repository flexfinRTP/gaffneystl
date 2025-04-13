import { NextResponse } from 'next/server'
import Mailjet from 'node-mailjet'

// Initialize Mailjet client
const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY || '',
  apiSecret: process.env.MAILJET_API_SECRET || '',
})

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Send email to admin using template
    const adminResult = await mailjet.post('send', { version: 'v3.1' }).request({
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
          TemplateID: parseInt(process.env.MAILJET_TEMPLATE_QUESTIONNAIRE_ADMIN || '0'),
          TemplateLanguage: true,
          TemplateErrorDeliver: true,
          TemplateErrorReporting: {
            Email: process.env.ADMIN_EMAIL,
            Name: 'Template Error Reporting',
          },
          Subject: 'New Retirement Questionnaire Submission',
          Variables: {
            firstName: data.personalInfo.firstName,
            lastName: data.personalInfo.lastName,
            email: data.personalInfo.email,
            phone: data.personalInfo.phone || 'Not provided',
            age: data.personalInfo.age,
            currentIncome: data.financialInfo.currentIncome,
            retirementAge: data.financialInfo.retirementAge,
            currentSavings: data.financialInfo.currentSavings,
            monthlyContribution: data.financialInfo.monthlyContribution,
            riskTolerance: data.financialInfo.riskTolerance,
            investmentGoals: data.investmentPreferences.investmentGoals,
            preferredInvestments: data.investmentPreferences.preferredInvestments.join(', '),
            digitalAssetInterest: data.investmentPreferences.digitalAssetInterest,
            submissionDate: new Date().toLocaleDateString(),
            companyName: 'Gaffney Wealth Management',
          },
        },
      ],
    })

    // Send confirmation email to user using template
    const userResult = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_FROM_EMAIL,
            Name: process.env.MAILJET_FROM_NAME,
          },
          To: [
            {
              Email: data.personalInfo.email,
              Name: `${data.personalInfo.firstName} ${data.personalInfo.lastName}`,
            },
          ],
          TemplateID: parseInt(process.env.MAILJET_TEMPLATE_QUESTIONNAIRE_USER || '0'),
          TemplateLanguage: true,
          TemplateErrorDeliver: true,
          TemplateErrorReporting: {
            Email: process.env.ADMIN_EMAIL,
            Name: 'Template Error Reporting',
          },
          Subject: 'Thank You for Completing Our Retirement Questionnaire',
          Variables: {
            firstName: data.personalInfo.firstName,
            lastName: data.personalInfo.lastName,
            email: data.personalInfo.email,
            submissionDate: new Date().toLocaleDateString(),
            companyName: 'Gaffney Wealth Management',
          },
        },
      ],
    })

    console.log('Mailjet admin send result:', JSON.stringify(adminResult.body, null, 2))
    console.log('Mailjet user send result:', JSON.stringify(userResult.body, null, 2))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing questionnaire:', error)
    return NextResponse.json(
      { error: 'Failed to process questionnaire' },
      { status: 500 }
    )
  }
} 