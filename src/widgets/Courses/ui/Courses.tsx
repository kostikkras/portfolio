import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { courses } from '../courses';
import { CoursesCard } from '../../../shared/lib/CoursesCard';

export const Courses = () => {
    return (
        <Container>
            <Box>
                <Typography sx={{ p: 2, pt: 6, fontWeight: 700, color: '#FFFF' }} variant="h4">
                    Пройденное обучение
                </Typography>
                <Box
                    sx={{
                        borderRadius: '20px',
                        backgroundColor: 'primary.light',
                        backdropFilter: 'blur(40px)',
                        p: 2,
                        boxShadow: 10,

                        display: 'flex',
                        gap: 2,
                        flexWrap: 'wrap',
                        mt: [5, 5, 0],
                    }}>
                    {courses.map((course) => {
                        return (
                            <CoursesCard
                                icon={course.icon}
                                name={course.name}
                                platform={course.platform}
                            />
                        );
                    })}
                </Box>
            </Box>
        </Container>
    );
};
