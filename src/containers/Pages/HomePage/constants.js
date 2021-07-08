import React from 'react';
import { IoMdSchool, MdHttp, MdWork, TiGroup } from 'react-icons/all';
import { FaGithub, FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa';

export const timeLineData = [
  {
    title: 'Опыт работы',
    id: 'experience',
    timeLine: [
      {
        interval: '2021 - 2???',
        company: 'SYNC',

        icon: <TiGroup />,
        responsibilities: [
          'Адаптивная кроссбраузерная верстка сайтов.',
          'Разработка фронтэнд части сайта с помощью библиотеки, React.',
          'Работа с системой контроля версии Git/Gitflow.',
          'Работа в мультинациональной команде по методологии Scrum.',
          'Работа в качестве тимлидера команды фронтэнд разработчиков.',
          'Собеседование, найм, формирование команды, onBoarding, 1:1, планы развития, увольнение.',
          'Построение архитектуры финтех проектов и ревью кода.',
          'Рефакторинг кода',
          'Помощь продакт менеджеру в анализе финтех проектов.',
        ],
      },
      {
        interval: '2018 - 2021',
        company: 'FlyCode',
        icon: <MdWork />,
        responsibilities: [
          'Адаптивная кроссбраузерная верстка сайтов.',
          'Разработка фронтэнд части сайта с помощью библиотек и фреймворков jQuery, React, Vue.',
          'Разработка бэкэнд части сайта с помощью фрэймворков Laravel, Yii, Symfony.',
          'Работа с системой контроля версии Git.',
          'Работа в команде по методологии Scrum.',
        ],
      },
    ],
  },

  {
    title: 'Образование',
    id: 'education',
    timeLine: [
      {
        interval: '2021 - 2022',
        company: 'Яндекс.Практикум',
        icon: <MdHttp />,
        responsibilities: ['Управление командой.'],
      },
      {
        interval: '2017 - 2021',
        company: 'ТГУ им. Державина',
        icon: <IoMdSchool />,
        responsibilities: ['Прикладная Информатика (Заочно) - красный диплом.'],
      },
      {
        interval: '2004 - 2007',
        company: 'Проф. лицей №17',
        icon: <IoMdSchool />,
        responsibilities: [
          'Информационный, Автоматизированные системы обработки информации и управления.',
        ],
      },
    ],
  },
];

export const skills = [
  { title: 'HTML', value: 80 },
  { title: 'UX/UI', value: 50 },
  { title: 'CSS', value: 80 },
  { title: 'Material UI', value: 70 },
  { title: 'JS', value: 70 },
  { title: 'Фигма', value: 60 },
  { title: 'TypeScript', value: 30 },
  { title: 'React', value: 80 },
  { title: 'Тимидерство', value: 70 },
  { title: 'Redux', value: 80 },
  { title: 'GIT/GITFLOW', value: 60 },
  { title: 'Saga', value: 70 },
  { title: 'Backend', value: 50 },
  { title: 'Websockets', value: 40 },
  { title: 'MySQL', value: 50 },
  { title: 'Архитектура', value: 70 },
  { title: 'Docker', value: 30 },
  { title: 'Автотесты', value: 30 },
  { title: 'MicroFrontend', value: 20 },
  { title: 'Менеджмент проекта', value: 70 },
];

export const menu = [
  { title: 'Главная', link: 'main' },
  { title: 'Скилы', link: 'skills' },
  { title: 'Опыт', link: 'experience' },
  { title: 'Образование', link: 'education' },
  { title: 'О себе', link: 'about' },
];

export const social = [
  { title: 'https://github.com/ArsenalGear', icon: <FaGithub /> },
  { title: 'https://t.me/ArsGear', icon: <FaTelegramPlane /> },
  { title: 'https://linkedin.com/in/alexandr-boldarev', icon: <FaLinkedinIn /> },
];

export const about = [
  {
    text:
      'Всегда активен по части предложения новых нестандартных решений как по\n' +
      '          проекту (выход за рамки своей ответственности), так и за его пределами.',
  },
  {
    text:
      ' Обожаю работать в хорошо сформированной Scrum команде, с позитивным настроем\n' +
      '          и чувством юмора. Есть положительный опыт работы в качестве Фронтэнд Тимлида в Финтех\n' +
      '          проекте с составом в 6 человек и опытом работы в командах более 20 человек одновременно.',
  },
  {
    text:
      ' Очень ответственно отношусь к своей и чужой работе и стараюсь всегда довести\n' +
      '          ее до конечного результата. Читаю на английском без словаря. Всячески стараюсь развивать\n' +
      '          себя самостоятельно как по процессу написания кода, так и как личность. В свободное время\n' +
      '          люблю кататься на велосипеде.',
  },
  { text: 'Владею английским на уровне B1.' },
];
