import { Typography, Box } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

export const IconCard = ({ icon, name }) => {
    return (
        <Box width={70} m={1}>
            <Box
                width={70}
                height={70}
                fontSize={40}
                sx={{
                    p: 2,
                    borderRadius: '15px',
                    color: 'secondary.light',
                    backgroundColor: 'secondary.main',
                }}>
                {icon}
            </Box>
            <Typography fontWeight={700} align="center" fontSize={15}>
                {name}
            </Typography>
        </Box>
    );
};
