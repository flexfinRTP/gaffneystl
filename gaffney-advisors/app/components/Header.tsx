'use client'

import { useState, useEffect } from 'react'
import { AppBar as MuiAppBar } from '@mui/material'
import {
  Toolbar,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/gaffney311/', icon: '/icons/linkedin.svg' },
  { name: 'Twitter', href: 'https://x.com/gaffney311', icon: '/icons/twitter.svg' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleOpenMenu = () => setMobileMenuOpen(true)
  const handleCloseMenu = () => setMobileMenuOpen(false)

  return (
    <MuiAppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(203, 213, 224, 0.3)' : 'none',
        transition: 'all 0.3s ease-in-out',
        py: 1,
        top: 0,
        zIndex: 1300,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            height: { xs: 64, md: 80 },
            transition: 'height 0.3s ease-in-out',
          }}
        >
          {/* Logo */}
          <Link href="/" passHref>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mr: { xs: 2, md: 4 },
                gap: 2
              }}
            >
              <Image
                src="/gwm.png"
                alt="Gaffney Wealth Management"
                width={260}
                height={220}
                priority
              />
            </Box>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <Box sx={{ display: 'flex', gap: 4, pl: 6 }}>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      sx={{
                        color: scrolled ? theme.palette.text.primary : 'white',
                        fontSize: '1rem',
                        fontWeight: 500,
                        transition: 'color 0.2s ease-in-out',
                        '&:hover': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                ))}
              </Box>

              {/* Social Links */}
              <Box sx={{ display: 'flex', gap: 2, ml: 'auto' }}>
                {socialLinks.map((link) => (
                  <IconButton
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: scrolled ? theme.palette.text.primary : 'white',
                      '&:hover': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={24}
                      height={24}
                      style={{
                        filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                      }}
                    />
                  </IconButton>
                ))}
              </Box>

              {/* CTA Buttons */}
              <Box sx={{ display: 'flex', gap: 2, ml: 3 }}>
                {/* <Link href="/disclosures" passHref>
                  <Button
                    variant="outlined"
                    size="medium"
                    sx={{
                      borderColor: scrolled ? theme.palette.primary.main : 'white',
                      color: scrolled ? theme.palette.primary.main : 'white',
                      borderWidth: 2,
                      px: 3,
                      height: 40,
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        backgroundColor: 'rgba(78, 93, 148, 0.1)',
                        borderWidth: 2,
                      },
                    }}
                  >
                    Disclosures
                  </Button>
                </Link> */}
                <Link href="/contact" passHref>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    backgroundColor: theme.palette.primary.light,
                    color: 'white',
                    px: 3,
                    height: 40,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Schedule a Call
                </Button>
                </Link>
              </Box>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenMenu}
              sx={{
                ml: 'auto',
                color: scrolled ? theme.palette.text.primary : 'white',
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Mobile Menu */}
          <Menu
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={mobileMenuOpen}
            onClose={handleCloseMenu}
            sx={{
              '& .MuiPaper-root': {
                width: '100%',
                maxWidth: '320px',
                mt: 2,
              },
            }}
          >
            {navigation.map((item) => (
              <MenuItem
                key={item.name}
                onClick={handleCloseMenu}
                component={Link}
                href={item.href}
              >
                <Typography>{item.name}</Typography>
              </MenuItem>
            ))}
            <MenuItem
              onClick={handleCloseMenu}
              component={Link}
              href="/disclosures"
            >
              <Typography>Disclosures</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </MuiAppBar>
  )
} 