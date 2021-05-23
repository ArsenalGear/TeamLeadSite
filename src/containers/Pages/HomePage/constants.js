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
          'Собеседование, найм, формирование команды, onBoarding, 1:1, планы развития, увольнение.',
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
        company: 'Проф. лицей №17',
        icon: <School/>,
        responsibilities: [
          'Информационный, Автоматизированные системы обработки информации и управления.',
        ]
      }
    ]
  }
];

export const skills = [
  {title: 'HTML', color: 'secondary', value: 80},
  {title: 'UX/UI', color: 'secondary', value: 50},
  {title: 'CSS', color: 'secondary', value: 80},
  {title: 'Material UI', color: 'secondary', value: 70},
  {title: 'JS', color: 'secondary', value: 70},
  {title: 'Фигма', color: 'secondary', value: 60},
  {title: 'TypeScript', color: 'secondary', value: 20},
  {title: 'Менеджмент проекта', color: 'secondary', value: 70},
  {title: 'React', color: 'secondary', value: 80},
  {title: 'Тимидерство', color: 'secondary', value: 70},
  {title: 'Redux', color: 'secondary', value: 80},
  {title: 'GIT/GITFLOW', color: 'secondary', value: 60},
  {title: 'Saga', color: 'secondary', value: 70},
  {title: 'Backend', color: 'secondary', value: 50},
  {title: 'Websockets', color: 'secondary', value: 40},
  {title: 'MySQL', color: 'secondary', value: 50},
  {title: 'Архитектура', color: 'secondary', value: 70},
  {title: 'Docker', color: 'secondary', value: 30},
  {title: 'Автотесты', color: 'secondary', value: 30},
  {title: 'Linux', color: 'secondary', value: 30},
  {title: 'MicroFrontend', color: 'secondary', value: 20},
]