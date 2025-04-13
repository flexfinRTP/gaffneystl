'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  Alert,
} from '@mui/material'

const questionnaireSchema = z.object({
  personalInfo: z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    age: z.string().min(1, 'Age is required'),
  }),
  financialInfo: z.object({
    currentIncome: z.string().min(1, 'Current income is required'),
    retirementAge: z.string().min(1, 'Retirement age is required'),
    currentSavings: z.string().min(1, 'Current savings is required'),
    monthlyContribution: z.string().min(1, 'Monthly contribution is required'),
    riskTolerance: z.enum(['conservative', 'moderate', 'aggressive']),
  }),
  investmentPreferences: z.object({
    investmentGoals: z.string().min(1, 'Investment goals are required'),
    preferredInvestments: z.array(z.string()).min(1, 'Select at least one investment type'),
    digitalAssetInterest: z.enum(['yes', 'no', 'maybe']),
  }),
})

type QuestionnaireData = z.infer<typeof questionnaireSchema>

const steps = ['Personal Information', 'Financial Information', 'Investment Preferences']

export default function RetirementQuestionnaire() {
  const [activeStep, setActiveStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const { register, handleSubmit, formState: { errors }, watch } = useForm<QuestionnaireData>({
    resolver: zodResolver(questionnaireSchema),
    defaultValues: {
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
      },
      financialInfo: {
        currentIncome: '',
        retirementAge: '',
        currentSavings: '',
        monthlyContribution: '',
        riskTolerance: 'moderate',
      },
      investmentPreferences: {
        investmentGoals: '',
        preferredInvestments: [],
        digitalAssetInterest: 'maybe',
      },
    },
  })

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  const onSubmit = async (data: QuestionnaireData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      // Structure the data to match the API expectations
      const formData = {
        email: data.personalInfo.email,
        firstName: data.personalInfo.firstName,
        lastName: data.personalInfo.lastName,
        // Add other fields as needed
        ...data
      };

      const response = await fetch('/api/questionnaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit questionnaire');
      }
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for submitting your questionnaire! We will review your responses and get back to you shortly.'
        });
        setActiveStep(steps.length);
      } else {
        throw new Error(result.message || 'Failed to submit questionnaire');
      }
    } catch (error) {
      console.error('Error submitting questionnaire:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An error occurred while submitting the questionnaire. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('personalInfo.firstName')}
                  fullWidth
                  label="First Name"
                  error={!!errors.personalInfo?.firstName}
                  helperText={errors.personalInfo?.firstName?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('personalInfo.lastName')}
                  fullWidth
                  label="Last Name"
                  error={!!errors.personalInfo?.lastName}
                  helperText={errors.personalInfo?.lastName?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('personalInfo.email')}
                  fullWidth
                  label="Email"
                  type="email"
                  error={!!errors.personalInfo?.email}
                  helperText={errors.personalInfo?.email?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('personalInfo.phone')}
                  fullWidth
                  label="Phone (optional)"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('personalInfo.age')}
                  fullWidth
                  label="Age"
                  type="number"
                  error={!!errors.personalInfo?.age}
                  helperText={errors.personalInfo?.age?.message}
                />
              </Grid>
            </Grid>
          </Box>
        )
      case 1:
        return (
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('financialInfo.currentIncome')}
                  fullWidth
                  label="Current Annual Income"
                  type="number"
                  error={!!errors.financialInfo?.currentIncome}
                  helperText={errors.financialInfo?.currentIncome?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('financialInfo.retirementAge')}
                  fullWidth
                  label="Desired Retirement Age"
                  type="number"
                  error={!!errors.financialInfo?.retirementAge}
                  helperText={errors.financialInfo?.retirementAge?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('financialInfo.currentSavings')}
                  fullWidth
                  label="Current Retirement Savings"
                  type="number"
                  error={!!errors.financialInfo?.currentSavings}
                  helperText={errors.financialInfo?.currentSavings?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('financialInfo.monthlyContribution')}
                  fullWidth
                  label="Monthly Retirement Contribution"
                  type="number"
                  error={!!errors.financialInfo?.monthlyContribution}
                  helperText={errors.financialInfo?.monthlyContribution?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Risk Tolerance</FormLabel>
                  <RadioGroup
                    {...register('financialInfo.riskTolerance')}
                    row
                  >
                    <FormControlLabel
                      value="conservative"
                      control={<Radio />}
                      label="Conservative"
                    />
                    <FormControlLabel
                      value="moderate"
                      control={<Radio />}
                      label="Moderate"
                    />
                    <FormControlLabel
                      value="aggressive"
                      control={<Radio />}
                      label="Aggressive"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        )
      case 2:
        return (
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  {...register('investmentPreferences.investmentGoals')}
                  fullWidth
                  multiline
                  rows={4}
                  label="What are your primary investment goals?"
                  error={!!errors.investmentPreferences?.investmentGoals}
                  helperText={errors.investmentPreferences?.investmentGoals?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Preferred Investment Types</InputLabel>
                  <Select
                    {...register('investmentPreferences.preferredInvestments')}
                    multiple
                    value={watch('investmentPreferences.preferredInvestments')}
                    error={!!errors.investmentPreferences?.preferredInvestments}
                  >
                    <MenuItem value="stocks">Stocks</MenuItem>
                    <MenuItem value="bonds">Bonds</MenuItem>
                    <MenuItem value="mutualFunds">Mutual Funds</MenuItem>
                    <MenuItem value="etfs">ETFs</MenuItem>
                    <MenuItem value="realEstate">Real Estate</MenuItem>
                    <MenuItem value="digitalAssets">Digital Assets</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Interest in Digital Assets</FormLabel>
                  <RadioGroup
                    {...register('investmentPreferences.digitalAssetInterest')}
                    row
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                    <FormControlLabel
                      value="maybe"
                      control={<Radio />}
                      label="Maybe"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        )
      default:
        return null
    }
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Retirement Planning Questionnaire
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Take our 3-minute questionnaire to receive a complimentary retirement financial plan and tax strategy.
        </Typography>

        {submitStatus.type && (
          <Alert 
            severity={submitStatus.type} 
            sx={{ mb: 3 }}
          >
            {submitStatus.message}
          </Alert>
        )}

        <Stepper activeStep={activeStep} sx={{ mt: 4, mb: 6 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Thank you for completing the questionnaire!
            </Typography>
            <Typography variant="body1" paragraph>
              We'll review your information and send your personalized retirement plan within 24-48 hours.
            </Typography>
          </Box>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            {renderStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
              {activeStep > 0 && (
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>
              )}
              {activeStep < steps.length - 1 ? (
                <Button variant="contained" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              )}
            </Box>
          </form>
        )}
      </Paper>
    </Container>
  )
} 