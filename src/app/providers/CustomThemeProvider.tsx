import React, { useState, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeType, getTheme } from '../styles/themes/base';

interface CustomThemeContextType {
    currentTheme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}

export const CustomThemeContext = React.createContext<CustomThemeContextType>({
    currentTheme: 'normal',
    setTheme: () => undefined,
});
console.log(CustomThemeContext);
export interface CustomThemeProviderProps {
    children: ReactNode;
}

export const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
    const currentTheme = localStorage.getItem('appTheme') || 'normal';

    const [themeName, setThemeName] = useState<ThemeType>(currentTheme as ThemeType);

    const theme = getTheme(themeName);

    const setAndStoreThemeName = (name: ThemeType) => {
        localStorage.setItem('appTheme', name);
        setThemeName(name);
    };

    const contextValue: CustomThemeContextType = {
        currentTheme: themeName,
        setTheme: setAndStoreThemeName,
    };

    return (
        <CustomThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CustomThemeContext.Provider>
    );
};
