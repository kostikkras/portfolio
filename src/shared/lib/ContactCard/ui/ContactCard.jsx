import { Typography, Box } from '@mui/material';
import React from 'react';

export const ContactCard = ({ icon, name }) => {
    return (
        <Box display="flex" alignItems="center">
            <Box
                sx={{
                    p: 1,
                }}>
                {icon}
            </Box>

            <Typography fontWeight={700} align="center" fontSize={15}>
                {name}
            </Typography>
        </Box>
    );
};
