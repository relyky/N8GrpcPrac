'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

/*
 * ref→[Default theme viewer](https://mui.com/material-ui/customization/default-theme/)
 * ref→[Theming](https://mui.com/material-ui/customization/theming/)
 */
const theme = createTheme({
  palette: {
    mode: 'light', // 'light','dark'
    primary: {
      main: '#BF4690',
      dark: '#802F61',
      light: '#ED58B4',
      contrastText: '#fffaf0',
    },
    secondary: {
      main: '#CA87B0',
      contrastText: '#fffaf0',
    },
    info: {
      main: '#36A2EB',
      contrastText: '#fffaf0',
    },
    success: {
      main: '#70C699',
      contrastText: '#fffaf0',
    },
    warning: {
      main: '#FF9F40',
      contrastText: '#fffaf0',
    },
    error: {
      main: '#FF6384',
      contrastText: '#fffaf0',
    },
    common: {
      black: '#010101',
      white: '#fefefe',
    },
    background: {
      default: '#fffafa', // snow #FFFAFA
      paper: '#fafafa',
    },
  },
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  shape: {
    borderRadius: 10,
  },
  // components: {
  //   MuiAlert: {
  //     styleOverrides: {
  //       root: {
  //         variants: [
  //           {
  //             props: { severity: 'info' },
  //             style: {
  //               backgroundColor: '#60a5fa',
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   },
  // },
});

const defaultTheme = createTheme();
console.log('defaultTheme', defaultTheme);

export default theme;