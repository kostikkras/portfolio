import { Typography, Box } from "@mui/material";
import React from "react";

export const CoursesCard = ({ icon, name, platform }) => {
    return (
        <Box
            width={350}
            maxHeight={86}
            p={1}
            sx={{
                display: "flex",
            }}
        >
            <Box
                height={70}
                fontSize={40}
                sx={{
                    p: 2,
                    borderRadius: "15px",
                    color: "secondary.light",
                    backgroundColor: "secondary.main",
                    display: "flex",
                }}
            >
                {icon}
            </Box>
            <Box pl={1}>
                <Typography fontWeight={700} align="left" fontSize={20}>
                    {platform}
                </Typography>
                <Typography fontWeight={700} align="left" fontSize={15}>
                    {name}
                </Typography>
            </Box>
        </Box>
    );
};
