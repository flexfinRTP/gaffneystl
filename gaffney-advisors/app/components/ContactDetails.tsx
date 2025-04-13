'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Link,
  Divider,
} from '@mui/material'
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  LinkedIn,
  Facebook,
} from '@mui/icons-material'

export default function ContactDetails() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F7FAFC' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily: 'Playfair Display',
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            color: '#1A202C',
            mb: 6,
            textAlign: 'center',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(to right, #4E5D94, #2D3748)',
              borderRadius: '2px',
            }
          }}
        >
          Visit Our Office
        </Typography>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: 'white',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'rgba(0, 0, 0, 0.08)',
              }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontFamily: 'Playfair Display',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: '#1A202C',
                  mb: 4,
                }}
              >
                Contact Information
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <LocationOn sx={{ color: '#4E5D94', mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" sx={{ mb: 1, color: '#1A202C' }}>
                      Address
                    </Typography>
                    <Typography sx={{ color: '#4A5568', lineHeight: 1.6 }}>
                      8000 Maryland Ave
                      <br />
                      Suite 1111
                      <br />
                      Clayton, MO 63105
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Phone sx={{ color: '#4E5D94', mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" sx={{ mb: 1, color: '#1A202C' }}>
                      Phone
                    </Typography>
                    <Link
                      // href="tel:+13147254018"
                      sx={{
                        color: '#4A5568',
                        textDecoration: 'none',
                        '&:hover': { color: '#4E5D94' }
                      }}
                    >
                      TBA
                    </Link>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Email sx={{ color: '#4E5D94', mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" sx={{ mb: 1, color: '#1A202C' }}>
                      Email
                    </Typography>
                    <Link
                      href="mailto:justin@gaffneystl.com"
                      sx={{
                        color: '#4A5568',
                        textDecoration: 'none',
                        '&:hover': { color: '#4E5D94' }
                      }}
                    >
                      justin@gaffneystl.com
                    </Link>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <AccessTime sx={{ color: '#4E5D94', mt: 0.5 }} />
                  <Box>
                    <Typography variant="h6" sx={{ mb: 1, color: '#1A202C' }}>
                      Business Hours
                    </Typography>
                    <Typography sx={{ color: '#4A5568', lineHeight: 1.6 }}>
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box>
                  <Typography variant="h6" sx={{ mb: 2, color: '#1A202C' }}>
                    Connect With Us
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Link
                      href="https://www.linkedin.com/in/gaffney311/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#4E5D94',
                        '&:hover': { color: '#3D4B7D' }
                      }}
                    >
                      <LinkedIn fontSize="large" />
                    </Link>
                    {/* <Link
                      href="https://facebook.com/gaffneyadvisors"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#4E5D94',
                        '&:hover': { color: '#3D4B7D' }
                      }}
                    >
                      <Facebook fontSize="large" />
                    </Link> */}
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Map */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                height: '100%',
                minHeight: '500px',
                backgroundColor: 'white',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'rgba(0, 0, 0, 0.08)',
                overflow: 'hidden',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.8943244183137!2d-90.34046792374092!3d38.64871997171707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8cb5c5b280a85%3A0x9c3d1785f254b3a9!2s8000%20Maryland%20Ave%20%231111%2C%20Clayton%2C%20MO%2063105!5e0!3m2!1sen!2sus!4v1681424237684!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 