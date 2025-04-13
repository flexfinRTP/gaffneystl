'use client'

import { useState, useEffect } from 'react'
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  Typography, 
  Box,
  useTheme
} from '@mui/material'
import { CalendarMonth as CalendarIcon } from '@mui/icons-material'

export default function LegalDisclaimerModal() {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    // Check if modal has been shown in this session
    const hasSeenModal = sessionStorage.getItem('hasSeenLegalModal')
    if (!hasSeenModal) {
      setOpen(true)
      sessionStorage.setItem('hasSeenLegalModal', 'true')
    }
  }, [])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          color: theme.palette.common.white,
        }
      }}
    >
      <DialogTitle>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <CalendarIcon sx={{ fontSize: 28 }} />
          <Typography variant="h5" component="div">
            Coming 2026
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mb: 2, color: theme.palette.common.white }}>
          Welcome to Gaffney Wealth's demonstration website.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: theme.palette.common.white }}>
          We are not yet operational to provide financial advisory services.
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.grey[200] }}>
          Important Notice: All content and information presented on this website is for educational and demonstration purposes only. Nothing on this website should be construed as financial advice, investment recommendations, or an offer to buy or sell securities. The information provided is not intended to be, and should not be relied upon as, financial, investment, tax, or legal advice.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button 
          onClick={handleClose}
          variant="contained"
          sx={{
            bgcolor: theme.palette.common.white,
            color: theme.palette.primary.main,
            '&:hover': {
              bgcolor: theme.palette.grey[100],
            }
          }}
        >
          I Understand
        </Button>
      </DialogActions>
    </Dialog>
  )
} 