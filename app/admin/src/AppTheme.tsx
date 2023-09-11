import { Admin, defaultTheme } from 'react-admin';
import indigo from '@mui/material/colors/indigo';
import grey from '@mui/material/colors/grey';
import red from '@mui/material/colors/red';
import blueGrey from '@mui/material/colors/blueGrey';

// const lightRed: {
//     50: '#ffebee';
//     100: '#ffcdd2';
//     200: '#ef9a9a';
//     300: '#e57373';
//     400: '#ef5350';
//     500: '#f44336';
//     600: '#e53935';
//     700: '#d32f2f';
//     800: '#c62828';
//     900: '#b71c1c';
//     A100: '#ff8a80';
//     A200: '#ff5252';
//     A400: '#ff1744';
//     A700: '#d50000';
// }

export const AppTheme = {
    ...defaultTheme,
    palette: {
        primary: red,
        secondary: blueGrey,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        //fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
    },
};