import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-scroll';
import { AiOutlineUpCircle } from 'react-icons/all';
import ym from 'react-yandex-metrika';
import { P } from '../../../../../components/htmlTags/P';
import { AboutMeWrapper, ArrowBox, AvatarWrapper, IconDown } from './styles';
import { Section } from '../../../../../components/htmlSections/Section';
import avatar from '../../../../../images/user/AlexandrBoldyrev.jpg';
import { about } from '../../constants';
const AboutMe = () => {
  useEffect(() => {
    ym('hit', '/');
  }, []);
  return (
    <section id="about">
      <AboutMeWrapper container>
        <Grid item lg={12} xs={12}>
          <Section title="О себе" />
        </Grid>
        <Grid item lg={4} xs={12}>
          <AvatarWrapper alt="Болдырев Александр" src={avatar} />
        </Grid>
        <Grid item lg={8} xs={12}>
          {about.map(block => (
            <P key={block.text}>&nbsp;&nbsp;{block.text}</P>
          ))}
        </Grid>
        <ArrowBox>
          <Link to="main" smooth offset={-180} duration={750}>
            <IconDown>
              <AiOutlineUpCircle />
            </IconDown>
          </Link>
        </ArrowBox>
      </AboutMeWrapper>
    </section>
  );
};

export { AboutMe };
