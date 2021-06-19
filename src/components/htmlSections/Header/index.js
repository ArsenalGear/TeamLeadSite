import React from 'react';
import { AiOutlineDownCircle } from 'react-icons/all';
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';
import { HeaderBody, SocialBlock, useStyles } from './styles';
import { ScrollLink } from '../../htmlTags/Link';
import { H3 } from '../../htmlTags/H3';
import logo from '../../../images/logo.svg';
import { Section } from '../Section';
import { IconDown } from '../../../containers/Pages/HomePage/components/AboutMeBox/styles';
import { social } from '../../../containers/Pages/HomePage/constants';
import { menuDataSelector } from '../../../containers/Pages/HomePage/store/selectors';

const Header = () => {
  const classes = useStyles();
  const menuAsyncData = useSelector(menuDataSelector());
  return (
    <header id="main" className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          {menuAsyncData.data &&
            menuAsyncData.data.map(block => (
              <li key={block.link}>
                <ScrollLink linkTo={block.link}>{block.title}</ScrollLink>
              </li>
            ))}
        </ul>
      </nav>
      <HeaderBody>
        <img className={classes.logo} src={logo} alt="React Logo" height="45%" width="45%" />
        <Section title="Болдырев Александр" titleType="h1" />
        <H3>Frontend Team Leader and React developer with 4 years of experience</H3>
        <SocialBlock>
          {social.map(block => (
            <a
              title={block.title}
              className={classes.socialLink}
              href={block.title}
              target="_blank"
              rel="noreferrer"
              key={block.title}
            >
              {block.icon}
            </a>
          ))}
        </SocialBlock>
        <Link to="skills" smooth offset={-180} duration={750}>
          <IconDown>
            <AiOutlineDownCircle />
          </IconDown>
        </Link>
      </HeaderBody>
    </header>
  );
};

export { Header };
