import React from 'react';
import { ProjectCard } from '../../../shared/lib/ProjectCard';
import { projects } from '../projects';
import { Box, Container, Stack, Typography } from '@mui/material';

export const Projects = () => {
    const projectsData = projects();

    return (
        <>
            <Container id="projects">
                <Typography sx={{ p: 2, fontWeight: 700, color: '#FFFF' }} variant="h4">
                    Последние проекты
                </Typography>
                <Stack spacing={2} alignItems="center">
                    {projectsData.map((project) => {
                        return (
                            <ProjectCard
                                key={project.name}
                                name={project.name}
                                title={project.title}
                                description={project.description}
                                stack={project.stack}
                                img={project.img}
                                mainLink={project.mainLink}
                                gitLink={project.gitLink}
                            />
                        );
                    })}
                </Stack>
            </Container>
        </>
    );
};
