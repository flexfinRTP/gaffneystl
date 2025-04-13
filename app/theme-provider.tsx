const themeOptions: ThemeOptions = {
  palette: {
    // ... existing code ...
  },
  typography: {
    // ... existing code ...
  },
  spacing: (factor: number) => `${factor * 4}px`,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // ... existing code ...
} 