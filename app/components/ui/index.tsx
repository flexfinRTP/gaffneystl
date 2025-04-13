import React, { ReactNode } from 'react'
import { Box, Button, Card, Typography, useTheme, SxProps, Theme, TextField, Grid, Container } from '@mui/material'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import { useForm, SubmitHandler, FieldValues, Control, UseFormReturn, DefaultValues } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ErrorBoundary } from './error-boundary'

const MotionBox = motion.create(Box)
// ... existing code ... 