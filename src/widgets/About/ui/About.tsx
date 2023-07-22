import { Container, Grid, Stack, Typography, Box } from '@mui/material';
import React from 'react';
import { IconCard } from '../../../shared/lib/IconCard';
import { skills } from '../../Skills/skills';

export const About = () => {
    return (
        <Container
            id="about"
            sx={{
                py: 4,
                height: '100vh',
                display: 'flex',
                flexWrap: 'wrap',
                alignContent: 'center',
            }}>
            <Grid
                container
                justifyContent="space-between"
                sx={{
                    py: 4,
                }}>
                <Grid
                    md={6}
                    sx={{
                        borderRadius: '20px',
                        backgroundColor: 'primary.light',
                        p: 4,
                        boxShadow: 3,
                    }}>
                    <Stack spacing={4}>
                        <Typography
                            variant="h2"
                            align="left"
                            fontSize={{ xs: '1.5rem', lg: '2.5rem' }}
                            fontWeight="700">
                            Привет!
                            <br /> Меня зовут Константин,
                            <br /> и я фронтенд-разработчик.
                        </Typography>
                        <Typography fontSize="1.5rem">
                            Уже более года я работаю в сфере веб-разработки.
                        </Typography>
                        <Typography fontSize="1.5rem">
                            В настоящее время я работаю с React-библиотекой для разработки
                            веб-интерфейсов. В планах освоить Full-stack разработку.
                            <br /> В свободное время занимаюсь спортом, путешествую и уделяю время
                            обучению.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    md={5.5}>
                    <Typography
                        sx={{
                            marginTop: 'auto',
                            ml: 2,
                            fontWeight: 700,
                            color: '#FFFF',
                        }}
                        variant="h4">
                        Стэк & Технологии
                    </Typography>
                    <Grid
                        sx={{
                            mt: '16px',
                            borderRadius: '20px',
                            backgroundColor: 'primary.light',
                            boxShadow: 3,
                            p: 2,

                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            // mt: [5, 5, 0],
                        }}>
                        {skills.map((skill) => {
                            return <IconCard icon={skill.icon} name={skill.name} />;
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
