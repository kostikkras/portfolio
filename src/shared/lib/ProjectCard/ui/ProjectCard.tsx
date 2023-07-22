import { Box, Button, CardMedia, Container, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ProjectItem } from '../../../../widgets/Projects/projects';
import { FC } from 'react';

const ProjectCard: FC<ProjectItem> = (props) => {
    const { title, description, stack, img, mainLink, gitLink } = props;
    return (
        <>
            <Grid
                sx={{
                    backgroundColor: 'primary.light',
                    borderRadius: '20px',
                    p: 4,
                    boxShadow: 3,
                }}
                container
                direction={{ xs: 'column-reverse', md: 'row' }}
                justifyContent="space-between">
                <Grid
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '380px',
                    }}
                    xs={12}
                    md={6}>
                    <Typography
                        variant="h4"
                        align="left"
                        sx={{
                            fontWeight: 'bold',
                        }}>
                        {title}
                    </Typography>
                    <Typography
                        textAlign="left"
                        sx={{
                            fontWeight: 'medium',
                        }}>
                        {description}
                    </Typography>
                    <Typography
                        textAlign="left"
                        sx={{
                            fontWeight: 'medium',
                        }}>
                        <Typography sx={{ fontWeight: 'bold' }} component="span">
                            Stack:
                        </Typography>
                        {stack}
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-evenly',
                        }}>
                        <Link href={mainLink} underline="none" target="blank">
                            <Button
                                sx={{
                                    m: 1,
                                    backgroundColor: 'secondary.main',
                                }}
                                variant="contained">
                                Открыть Demo
                            </Button>
                        </Link>

                        <Link href={gitLink} underline="none" target="blank">
                            <Button
                                sx={{
                                    m: 1,
                                }}
                                variant="outlined"
                                color="success">
                                Открыть на Github
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid xs={12} md={6}>
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}>
                        <CardMedia sx={{ width: '90%' }} component="img" image={img} />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default ProjectCard;
