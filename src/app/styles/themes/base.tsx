import normalTheme from './light';
import darkTheme from './dark';
import { Theme } from '@mui/material/styles';

export type ThemeType = 'normal' | 'dark';

const themes: Record<ThemeType, Theme> = {
    normal: normalTheme,
    dark: darkTheme,
};

export const getTheme = (theme: ThemeType): Theme => themes[theme];
