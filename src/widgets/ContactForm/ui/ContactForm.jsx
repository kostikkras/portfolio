import {
    Container,
    Grid,
    Stack,
    Typography,
    Box,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
} from '@mui/material';
import React, { useRef } from 'react';
import { IconCard } from '../../../shared/lib/IconCard';
import { skills } from '../../Skills/skills';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_adr3yee', 'template_s7jqbxe', form.current, 'zEKkNQuaWdSme0X3m')
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );
    };
    return (
        <Container>
            <Grid
                // border="solid"
                container
                justifyContent="space-between"
                sx={{
                    // backgroundColor: 'rgba(255,255,255,1)',
                    // backgroundColor: 'primary.main',
                    py: 4,
                }}>
                <Grid
                    // border="solid"
                    md={6}
                    sx={{
                        borderRadius: '20px',
                        backgroundColor: 'primary.light',
                        backdropFilter: 'blur(40px)',
                        p: 4,
                        boxShadow: 10,
                    }}>
                    <Stack spacing={4}>
                        <Typography
                            variant="h2"
                            align="left"
                            fontSize={{ xs: '1.5rem', lg: '2.5rem' }}
                            fontWeight="700">
                            Привет
                            <br /> меня зовут Константин,
                            <br /> я Frontend React разработчик
                        </Typography>
                        <Typography fontSize="1.5rem">
                            Уже больше 2 лет я работаю в сфере web-разработки.
                        </Typography>
                        <Typography fontSize="1.5rem">
                            В свободное время занимаюсь спортом, уделяю время обучению смотреть
                            фильмы на английском языке и заниматься стрельбой из лука.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid md={5.5}>
                    <Typography variant="h4">Стэк & Технологии</Typography>
                    <Grid
                        // border="solid"
                        // md={5.5}
                        sx={{
                            borderRadius: '20px',
                            backgroundColor: 'primary.light',
                            boxShadow: 10,
                            // backdropFilter: 'blur(40px)',
                            p: 2,

                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            alignContent: 'flex-start',
                            mt: [5, 5, 0],
                        }}>
                        {/*  */}
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off">
                            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField id="filled-basic" label="Filled" variant="filled" />
                            <TextField id="standard-basic" label="Standard" variant="standard" />
                            <Button variant='outlined' >отправить</Button> */}

                            <FormControl>
                                <InputLabel htmlFor="my-input">Email address</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">
                                    We'll never share your email.
                                </FormHelperText>
                            </FormControl>

                            <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input type="text" name="user_name" />
                                <label>Email</label>
                                <input type="email" name="user_email" />
                                <label>Message</label>
                                <textarea name="message" />
                                <input type="submit" value="Send" />
                            </form>
                        </Box>
                        {/*  */}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        // <div>
        //     <Box
        //         component="form"
        //         sx={{
        //             '& > :not(style)': { m: 1, width: '25ch' },
        //         }}
        //         noValidate
        //         autoComplete="off">
        //         <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        //         <TextField id="filled-basic" label="Filled" variant="filled" />
        //         <TextField id="standard-basic" label="Standard" variant="standard" />
        //     </Box>
        // </div>
    );
};
