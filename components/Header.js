// components/Header.js
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useScrollTrigger,
  Slide,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const StyledAppBar = styled(AppBar)(({ theme, trigger }) => ({
  background: trigger
    ? "rgba(15, 23, 42, 0.9)"
    : "transparent",
  backdropFilter: trigger ? "blur(10px)" : "none",
  boxShadow: trigger ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
  transition: "all 0.3s ease",
}));

const NavLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(2),
  textDecoration: 'none',
  position: "relative",
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: 0,
    left: "50%",
    background: theme.palette.primary.main,
    transition: "all 0.3s ease",
    transform: "translateX(-50%)",
  },
  "&:hover::after": {
    width: "100%",
  },
}));

const LogoLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  cursor: 'pointer',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(2),
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: 0,
    left: "50%",
    background: theme.palette.primary.main,
    transition: "all 0.3s ease",
    transform: "translateX(-50%)",
  },
  "&:hover::after": {
    width: "100%",
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: "Manrope",
  fontWeight: 800,
  background: "#fff",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  cursor: "pointer",
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "100%",
    maxWidth: "300px",
    background: theme.palette.background.default,
    padding: theme.spacing(2),
  },
}));

const navigationLinks = [
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Projects", path: "/projects" },
  { title: "Contact", path: "/contact" },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
        <StyledAppBar elevation={0} trigger={trigger}>
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
              <Link href="/" passHref>
                <LogoLink>
                  <Logo variant="h5">Gaffney Consulting</Logo>
                </LogoLink>
              </Link>

              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {navigationLinks.map((link) => (
                  <Link key={link.title} href={link.path} passHref>
                    <NavLink>{link.title}</NavLink>
                  </Link>
                ))}
              </Box>

              {/* Mobile Menu Icon */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </StyledAppBar>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        <Box sx={{ textAlign: "right", mb: 2 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navigationLinks.map((link) => (
            <Link key={link.title} href={link.path} passHref>
              <ListItem
                button
                onClick={handleDrawerToggle}
                component="a"
              >
                <ListItemText
                  primary={link.title}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                    },
                  }}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </MobileDrawer>
    </>
  );
}