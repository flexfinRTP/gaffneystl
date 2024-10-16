// components/CTAButton.js
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '10px 30px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  },
}));

export default function CTAButton({ children, href, ...props }) {
  return (
    <StyledButton variant="contained" color="primary" href={href} {...props}>
      {children}
    </StyledButton>
  );
}