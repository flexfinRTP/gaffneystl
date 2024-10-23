// components/Header.js
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: trigger ? "rgba(26, 26, 46, 0.9)" : "transparent",
        transition: "background-color 0.3s ease",
        boxShadow: trigger ? 1 : "none",
      }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href="/">
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, cursor: 'pointer', color: theme.palette.primary.main }}
            >
              Gaffney Consulting
            </Typography>
          </Link>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Button color="inherit" sx={{ ml: 2 }}>
              <Link href="/about">About</Link>
            </Button>
            <Button color="inherit" sx={{ ml: 2 }}>
              <Link href="/services">Services</Link>
            </Button>
            <Button color="inherit" sx={{ ml: 2 }}>
              <Link href="/projects">Expertise</Link>
            </Button>
            <AnimatePresence>
              {trigger && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <Button color="primary" variant="contained" sx={{ ml: 2 }}>
                    <Link href="/contact">Contact</Link>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: "none" } }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/about">About</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/services">Services</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/projects">Expertise</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/contact">Contact</Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
