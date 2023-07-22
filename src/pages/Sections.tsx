import React, { useContext } from 'react';
import { About } from '../widgets/About';
import { Projects } from '../widgets/Projects';
import { Courses } from '../widgets/Courses';
import { Contact } from '../widgets/ContactForm/Contact';
import { Box } from '@mui/material';
import { CustomThemeContext } from '../app/providers/CustomThemeProvider';
import { Footer } from '../widgets/Footer/Footer';
console.log(CustomThemeContext);

export const Sections = () => {
    const gradient =
        //  'linear-gradient(45deg, rgba(174,179,205,1) 43%, rgba(77,226,219,1) 100%)'
        'linear-gradient(45deg, rgba(33,67,111,1) 19%, rgba(98,172,132,1) 79%)';
    const darkGradient = 'linear-gradient(45deg, rgba(33,67,111,1) 0%, rgba(2,22,45,1) 100%)';

    const { currentTheme } = useContext(CustomThemeContext);

    const background = currentTheme === 'dark' ? darkGradient : gradient;
    return (
        <>
            <Box
                sx={{
                    background: background,
                }}>
                <About />
                <Projects />
                <Courses />
                <Contact />
                <Footer />
            </Box>
        </>
    );
};
