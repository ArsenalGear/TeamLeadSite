import React from 'react';
import { FaGithub, FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa';
import { HeaderBody, SocialBlock, useStyles } from './styles';
import { ScrollLink } from '../../htmlTags/Link';
import { H1 } from '../../htmlTags/H1';
import { HR } from '../../htmlTags/HR';
import { H3 } from '../../htmlTags/H3';
import logo from '../../../images/logo.svg';
import avatar from '../../../images/user/AlexandrBoldyrev.jpg';

const Header = () => {
  const classes = useStyles();
  const gitHub = 'https://github.com/ArsenalGear';
  const likedIn = 'https://linkedin.com/in/alexandr-boldarev';
  const telegram = 'https://t.me/ArsGear';
  return (
    <header id="main" className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li>
            <ScrollLink linkTo="main">Главная</ScrollLink>
          </li>
          <li>
            <ScrollLink linkTo="skills">Скилы</ScrollLink>
          </li>
          <li>
            <ScrollLink linkTo="experience">Опыт</ScrollLink>
          </li>
          <li>
            <ScrollLink linkTo="about">О себе</ScrollLink>
          </li>
        </ul>
      </nav>
      <HeaderBody>
        {/* <img style={{ width: '20rem' }} alt="Болдырев Александр" src={avatar} /> */}
        <img className={classes.logo} src={logo} alt="React Logo" height="45%" width="45%" />
        <H1 fontType="PermanentMarker">Болдырев Александр</H1>
        <HR />
        <H3>Frontend Team Leader and React developer</H3>
        <SocialBlock>
          <a
            title={gitHub}
            className={classes.socialLink}
            href={gitHub}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            title={telegram}
            className={classes.socialLink}
            href={telegram}
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegramPlane />
          </a>
          <a
            title={likedIn}
            className={classes.socialLink}
            href={likedIn}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </SocialBlock>
      </HeaderBody>
    </header>
  );
};

export { Header };
