import emailjs from '@emailjs/browser';
import { contacts } from './contacts';
import { ContactCard } from '../../shared/lib/ContactCard';

import React, { useRef, useState } from 'react';
import { Button, Box, Container, Grid, Link, Stack, TextField, Typography } from '@mui/material';

// ...

export const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        user_name: '',
        user_email: '',
    });

    const [formSent, setFormSent] = useState(false);

    const form = useRef();

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const validateForm = () => {
        let isValid = true;
        const errors = {};

        if (formData.user_name.length < 3) {
            errors.user_name = 'Минимальная длина имени - 3 символа';
            isValid = false;
        }

        if (!formData.user_email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            errors.user_email = 'Некорректный адрес электронной почты';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            // Отправка данных формы
            // ...
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

            setFormData({
                user_name: '',
                user_email: '',
                message: '',
            });
            setFormSent(true);
            setTimeout(() => {
                setFormSent(false);
            }, 5000);
        }
    };

    return (
        <Container id="contact">
            {/*  */}
            <Typography sx={{ p: 2, pt: 6, fontWeight: 700, color: '#FFFF' }} variant="h4">
                Контактные данные
            </Typography>
            <Grid container justifyContent="space-between">
                <Grid
                    md={6}
                    sx={{
                        borderRadius: '20px',
                        backgroundColor: 'primary.light',
                        p: 4,
                        boxShadow: 10,
                    }}>
                    <Stack>
                        <Typography fontSize="1.5rem">
                            Заинтересовали мои проекты?
                            <br />Я в поисках работы в том числе и удаленной, в качестве
                            Frontend-разработчика.
                        </Typography>

                        <Link href={'mainLink'} underline="none">
                            <Button
                                sx={{
                                    mt: 2,
                                    backgroundColor: 'secondary.main',
                                }}
                                variant="contained">
                                Resume RUS
                            </Button>
                        </Link>
                        <Box
                            sx={{
                                borderRadius: '20px',

                                pt: 4,

                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                mt: 1,
                            }}>
                            {contacts.map((contact) => {
                                return (
                                    <Link
                                        target="blank"
                                        color="inherit"
                                        href={contact.link}
                                        underline="none">
                                        <ContactCard icon={contact.icon} name={contact.name} />
                                    </Link>
                                );
                            })}
                        </Box>
                    </Stack>
                </Grid>
                <Grid
                    md={5}
                    sx={{
                        borderRadius: '20px',
                        backgroundColor: 'primary.light',
                        p: 4,
                        boxShadow: 10,
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-evenly',
                        }}>
                        <Typography align="left" fontSize={{ xs: '1.5rem', lg: '2.4rem' }}>
                            Обратная связь
                        </Typography>
                        <Typography align="left" fontSize="1rem">
                            Оставьте Ваши данные и я свяжусь с Вами.
                        </Typography>
                        {/* ... */}
                        <form ref={form} onSubmit={sendEmail}>
                            <TextField
                                margin="normal"
                                fullWidth
                                value={formData.user_name}
                                onChange={handleChange}
                                type="text"
                                name="user_name"
                                label="Ваше имя"
                                variant="filled"
                                error={!!formErrors.user_name}
                                helperText={formErrors.user_name}
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                value={formData.user_email}
                                onChange={handleChange}
                                type="email"
                                name="user_email"
                                label="Ваша почта"
                                variant="filled"
                                error={!!formErrors.user_email}
                                helperText={formErrors.user_email}
                            />
                            {/* ... */}
                            <TextField
                                margin="normal"
                                fullWidth
                                value={formData.message}
                                onChange={handleChange}
                                name="message"
                                label="Сообщение"
                                variant="filled"
                                multiline
                                rows={2}
                            />

                            <Button
                                sx={{
                                    backgroundColor: 'secondary.main',
                                }}
                                fullWidth
                                type="submit"
                                value="Send"
                                variant="contained">
                                Отправить
                            </Button>
                        </form>
                        {/* ... */}
                        <Typography
                            style={{
                                visibility: formSent ? 'visible' : 'hidden',
                            }}
                            fontSize={{ xs: '1.5rem', lg: '2rem' }}
                            fontWeight="500">
                            Отправлено
                        </Typography>
                        {/* ... */}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};
