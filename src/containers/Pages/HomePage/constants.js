import { Group, Http, School, Work } from '@material-ui/icons';
import React from 'react';

export const timeLineData = [
  {
    title: 'Опыт работы',
    timeLine: [
      {
        interval: '2021 - 2???',
        company: 'SYNC',
        icon: <Group/>,
        responsibilities: [
          'Адаптивная кроссбраузерная верстка сайтов.',
          'Разработка фронтэнд части сайта с помощью библиотеки, React.',
          'Работа с системой контроля версии Git/Gitflow.',
          'Работа в мультинациональной команде по методологии Scrum.',
          'Работа в качестве тимлидера команды фронтэнд разработчиков.',
          'Собеседование, найм, формирование команды, onBoarding, 1:1, планы развития, уыольнение.',
          'Построение архитектуры финтех проектов и ревью кода.',
          'Рефакторинг кода',
          'Помощь продакт менеджеру в анализе финтех проектов.'
        ]
      },
      {
        interval: '2018 - 2021',
        company: 'FlyCode',
        icon: <Work/>,
        responsibilities: [
          'Адаптивная кроссбраузерная верстка сайтов.',
          'Разработка фронтэнд части сайта с помощью библиотек и фреймворков jQuery, React, Vue.',
          'Разработка бэкэнд части сайта с помощью фрэймворков Laravel, Yii, Symfony.',
          'Работа с системой контроля версии Git.',
          'Работа в команде по методологии Scrum.',
        ]
      }
    ]
  },

  {
    title: 'Образование',

    timeLine: [
      {
        interval: '2021 - 2022',
        company: 'Яндекс.Практикум',
        icon: <Http/>,
        responsibilities: [
          'Управление командой.',
        ]
      },
      {
        interval: '2017 - 2021',
        company: 'ТГУ им. Державина',
        icon: <School/>,
        responsibilities: [
          'Прикладная Информатика (Заочно) - красный диплом.',
        ]
      },
      {
        interval: '2004 - 2007',
        company: 'Проф лицей №17',
        icon: <School/>,
        responsibilities: [
          'Информационный, Автоматизированные системы обработки информации и управления.',
        ]
      }
    ]
  }
];

export const skills = [
  {title: 'HTML', color: 'primary', value: 80},
  {title: 'UX/UI', color: 'secondary', value: 50},
  {title: 'CSS', color: 'primary', value: 80},
  {title: 'Material UI', color: 'primary', value: 70},
  {title: 'JS', color: 'primary', value: 70},
  {title: 'Фигма', color: 'primary', value: 60},
  {title: 'TypeScript', color: 'primary', value: 20},
  {title: 'Менеджмент проекта', color: 'primary', value: 70},
  {title: 'React', color: 'primary', value: 80},
  {title: 'Тилидерство', color: 'primary', value: 70},
  {title: 'Redux', color: 'primary', value: 80},
  {title: 'GIT/GITFLOW', color: 'primary', value: 60},
  {title: 'Saga', color: 'primary', value: 70},
  {title: 'Backend', color: 'primary', value: 50},
  {title: 'Websockets', color: 'primary', value: 40},
  {title: 'MySQL', color: 'primary', value: 50},
  {title: 'Архитектура', color: 'primary', value: 70},
  {title: 'Docker', color: 'primary', value: 30},
  {title: 'Автотесты', color: 'primary', value: 30},
  {title: 'Linux', color: 'primary', value: 30},
  {title: 'MicroFrontend', color: 'primary', value: 20},
]