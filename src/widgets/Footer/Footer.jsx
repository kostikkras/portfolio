import React from "react";
import { Box, Paper, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <div>
            <Typography
                component={"footer"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                pt={"4rem"}
                pb={"2rem"}
                sx={{ opacity: 0.7 }}
                width={"100%"}
            >
                <p> created with &hearts; by Konstantin Pikula</p>
                <p>&copy; 2023</p>
            </Typography>
        </div>
    );
};
