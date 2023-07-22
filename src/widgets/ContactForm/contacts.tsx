import React from 'react';
import { SiMaildotru, SiTelegram } from 'react-icons/si';
import { BsFillBriefcaseFill, BsGithub } from 'react-icons/bs';

export const contacts = [
    { name: 'telegram: koskub23', icon: <SiTelegram />, link: 'https://t.me/koskub23' },
    {
        name: 'konstantin.pikula@yandex.ru',
        icon: <SiMaildotru />,
        link: 'mailto: konstantin.pikula@yandex.ru',
    },
    { name: 'Github', icon: <BsGithub />, link: 'https://github.com/kostikkras' },
    {
        name: 'HeadHunter',
        icon: <BsFillBriefcaseFill />,
        link: 'https://krasnodar.hh.ru/resume/4c05b3efff0964c72b0039ed1f426e4755706d',
    },
];
