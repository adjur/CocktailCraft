import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D90429', // Customize the primary color
    },
    secondary: {
      main: '#dc004e', // Customize the secondary color
    },
    background: {
      default: '#f5f5f5', // Customize the default background color
    },
    text: {
      primary: '#333333', // Customize the primary text color
    },
  },
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif', // Customize the default font
    h1: {
      fontSize: '2.5rem', // Customize heading 1
    },
    h2: {
      fontSize: '2rem', // Customize heading 2
    },
    // Add more typography customization here
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Customize button border radius
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#333333', // Customize AppBar background color
        },
      },
    },
    // Add more component customizations here
  },
});

export default theme;
