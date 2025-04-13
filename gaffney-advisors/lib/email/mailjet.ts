import Mailjet from 'node-mailjet';
import { formatCurrency, formatDate } from '@/lib/utils/formatting';

// Initialize Mailjet client
let mailjetClient: any = null;

export function getMailjet(): any {
  if (!mailjetClient) {
    const apiKey = process.env.MAILJET_API_KEY;
    const apiSecret = process.env.MAILJET_API_SECRET;
    
    if (!apiKey || !apiSecret) {
      throw new Error('Mailjet credentials are missing. Please check your environment variables.');
    }
    
    try {
      // Initialize the Mailjet client with the correct syntax for version 6.0.8
      mailjetClient = Mailjet.apiConnect(apiKey, apiSecret);
      console.log('Mailjet client initialized successfully with API key:', apiKey.substring(0, 4) + '...');
    } catch (error) {
      console.error('Failed to initialize Mailjet client:', error);
      throw new Error('Failed to initialize Mailjet client');
    }
  }
  
  return mailjetClient;
}

interface EmailRecipient {
  email: string;
  name: string;
}

/**
 * Send a generic email using Mailjet
 * @param options Email options
 */
export async function sendEmail(options: {
  to: string;
  subject: string;
  templateId: number;
  templateVars: Record<string, any>;
  toName?: string;
}): Promise<any> {
  const { to, subject, templateId, templateVars, toName } = options;
  
  if (!templateId) {
    throw new Error('Template ID is required for sending emails');
  }
  
  let mailjet;
  try {
    mailjet = getMailjet();
  } catch (error) {
    console.error('Error getting Mailjet client:', error);
    throw error;
  }
  
  const senderEmail = process.env.MAILJET_FROM_EMAIL || 'justin@gaffneystl.com';
  const senderName = process.env.MAILJET_FROM_NAME || 'Gaffney Wealth';
  
  try {
    // Log the email send attempt details
    console.log(`Sending email to: ${to}`);
    console.log('Using template ID:', templateId);
    console.log('Template variables:', JSON.stringify(templateVars, null, 2));
    
    // Ensure that all variables are strings for Mailjet
    const formattedVars: Record<string, string> = {};
    Object.entries(templateVars).forEach(([key, value]) => {
      formattedVars[key] = String(value || '');
    });
    
    const payload = {
      Messages: [
        {
          From: {
            Email: senderEmail,
            Name: senderName,
          },
          To: [
            {
              Email: to,
              Name: toName || to.split('@')[0],
            },
          ],
          TemplateID: templateId,
          TemplateLanguage: true,
          Subject: subject,
          Variables: formattedVars,
        },
      ],
    };
    
    console.log('Email payload:', JSON.stringify(payload, null, 2));
    
    const response = await mailjet
      .post("send", { version: 'v3.1' })
      .request(payload);
    
    console.log('Email sent successfully:', JSON.stringify(response.body, null, 2));
    return response.body.Messages[0];
  } catch (error: any) {
    console.error('Failed to send email:', error);
    
    // Enhanced error logging for Mailjet errors
    if (error.statusCode) {
      console.error(`Mailjet status code: ${error.statusCode}`);
    }
    
    if (error.errorMessage) {
      console.error(`Mailjet error message: ${error.errorMessage}`);
    }
    
    if (error.response && error.response.body) {
      console.error('Mailjet API error response:', JSON.stringify(error.response.body, null, 2));
    }
    
    throw error;
  }
}

/**
 * Send a contact form email
 * @param name Sender's name
 * @param email Sender's email
 * @param message Contact message
 */
export async function sendContactFormEmail(
  name: string,
  email: string,
  message: string
): Promise<any> {
  return sendEmail({
    to: process.env.ADMIN_EMAIL || '',
    toName: 'Admin',
    subject: 'New Contact Form Submission',
    templateId: Number(process.env.MAILJET_TEMPLATE_CONTACT_FORM) || 0,
    templateVars: {
      name,
      email,
      message,
      submission_date: formatDate(new Date()),
      company_name: 'Gaffney Wealth Management'
    }
  });
}

/**
 * Send a newsletter confirmation email
 * @param email Recipient's email address
 */
export async function sendNewsletterConfirmationEmail(email: string): Promise<any> {
  return sendEmail({
    to: email,
    subject: 'Welcome to Gaffney Wealth Newsletter',
    templateId: Number(process.env.MAILJET_TEMPLATE_NEWSLETTER_CONFIRMATION) || 0,
    templateVars: {
      email,
      first_name: email.split('@')[0],
      signup_date: formatDate(new Date()),
      company_name: 'Gaffney Wealth Management'
    }
  });
}

/**
 * Send questionnaire responses to admin
 * @param email User's email
 * @param responses Questionnaire responses
 */
export async function sendQuestionnaireAdminEmail(
  email: string,
  responses: Record<string, any>
): Promise<any> {
  return sendEmail({
    to: process.env.ADMIN_EMAIL || '',
    toName: 'Admin',
    subject: 'New Questionnaire Submission',
    templateId: Number(process.env.MAILJET_TEMPLATE_QUESTIONNAIRE_ADMIN) || 0,
    templateVars: {
      email,
      ...responses,
      submission_date: formatDate(new Date()),
      company_name: 'Gaffney Wealth Management'
    }
  });
}

/**
 * Send questionnaire confirmation to user
 * @param email User's email
 */
export async function sendQuestionnaireUserEmail(email: string): Promise<any> {
  return sendEmail({
    to: email,
    subject: 'Thank You for Completing Our Questionnaire',
    templateId: Number(process.env.MAILJET_TEMPLATE_QUESTIONNAIRE_USER) || 0,
    templateVars: {
      email,
      first_name: email.split('@')[0],
      submission_date: formatDate(new Date()),
      company_name: 'Gaffney Wealth Management'
    }
  });
} 