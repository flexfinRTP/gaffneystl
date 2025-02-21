import { IconButton } from '@mui/material'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Twitter from '@mui/icons-material/Twitter'

export default function SocialIcons() {
  return (
    <div>
      <IconButton aria-label="GitHub" href="https://github.com/flexfinrtp" target="_blank" rel="noopener noreferrer">
        <GitHub />
      </IconButton>
      <IconButton aria-label="LinkedIn" href="https://linkedin.com/in/gaffney311" target="_blank" rel="noopener noreferrer">
        <LinkedIn />
      </IconButton>
      <IconButton aria-label="Twitter" href="https://twitter.com/gaffney311" target="_blank" rel="noopener noreferrer">
        <Twitter />
      </IconButton>
    </div>
  )
}