import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D90429', // Customize the primary colorrgb(43, 44, 66)
    },
    secondary: {
      main: '#bbab43', // Customize the secondary color
    },
    background: {
      default: '#2B2D42', // Customize the default background color
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
          backgroundColor: 'rgba(43, 45, 46, 0.5)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none'
        },
      },
    },
    // Add more component customizations here
  },
});

export default theme;

//'rgba(25, 118, 210, 0.5)'