import { Admin, defaultTheme } from 'react-admin';
import indigo from '@mui/material/colors/indigo';
import grey from '@mui/material/colors/grey';
import red from '@mui/material/colors/red';
import blueGrey from '@mui/material/colors/blueGrey';

export const AppTheme = {
    ...defaultTheme,
    palette: {
        primary: red,
        secondary: blueGrey,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    // typography: {
    //     // Use the system font instead of the default Roboto font.
    //     //fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
    // },
    components: {
        ...defaultTheme.components,
        MuiTextField: {
            defaultProps: {
                variant: 'outlined' as const,
            },
        },
        MuiFormControl: {
            defaultProps: {
                variant: 'outlined' as const,
            },
        },
    },
};