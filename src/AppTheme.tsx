import { Admin, defaultTheme } from 'react-admin';
import myRed from './styles/myRed';

export const AppTheme = {
    ...defaultTheme,
    palette: {
        primary: myRed,
        secondary: myRed,
        error: myRed,
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