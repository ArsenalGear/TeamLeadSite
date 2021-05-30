import {
  DateRange,
  GitHub,
  Home,
  LinkedIn,
  Mail,
  Person,
  Telegram,
} from '@material-ui/icons';
import React from 'react';

export const contactData = [
  {
    title: 'Информация',
    data: [
      {
        icon: <Person fontSize="large" />,
        subTitle: 'Имя',
        subTitleData: 'Александр Болдырев',
      },
      {
        icon: <Home fontSize="large" />,
        subTitle: 'Адрес',
        subTitleData: 'Россия, г. Тамбов',
      },
      {
        icon: <DateRange fontSize="large" />,
        subTitle: 'Возраст',
        subTitleData: '36 лет',
      },
    ],
  },
  {
    title: 'Ссылки',
    data: [
      {
        icon: <GitHub fontSize="large" />,
        subTitle: 'Github',
        subTitleData: 'https://github.com/ArsenalGear',
      },
    ],
  },
  {
    title: 'Связь со мной',
    data: [
      {
        icon: <Telegram fontSize="large" />,
        subTitle: 'Telegram',
        subTitleData: 'https://t.me/ArsGear',
      },
      {
        icon: <LinkedIn fontSize="large" />,
        subTitle: 'LinkedIn',
        subTitleData: 'https://linkedin.com/in/alexandr-boldarev',
      },
      {
        icon: <Mail fontSize="large" />,
        subTitle: 'E-Mail',
        subTitleData: 'sanya2005@mail.ru',
      },
    ],
  },
];
