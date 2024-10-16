import Link from 'next/link'
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function Header() {
  const theme = useTheme()

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
            River Consulting
          </Typography>
          <Box>
          <Button color="inherit" sx={{ ml: 2 }}>
              <Link href="about">About</Link>
            </Button>
            <Button color="inherit" sx={{ ml: 2 }}>
              <Link href="services">Services</Link>
            </Button>
            <Button color="inherit" sx={{ ml: 2 }}>
              <Link href="projects">Expertise</Link>
            </Button>
            <Button color="primary" variant="contained" sx={{ ml: 2 }}>
              <Link href="contact">Contact</Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}