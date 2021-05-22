import React from 'react';
import PropTypes from 'prop-types';
import { AvatarBlock, HomePageLayoutWrapper, Info } from './styles';
import { Grid } from '@material-ui/core';
import avatar from '../../../../src/images/user/AlexandrBoldyrev.jpg';
import { Sidebar } from '../../../components/htmlSections/Sidebar';
import { InfoBlock } from '../../../components/htmlSections/Sidebar/InfoBlock';
import { Header } from '../../../components/htmlSections/Header';
import { H1 } from '../../../components/htmlTags/H1';
import { H2 } from '../../../components/htmlTags/H2';
import { contactData } from '../../../components/htmlSections/Sidebar/constants';

const HomePageLayout = ({ children }) => (
  <HomePageLayoutWrapper container justify='center'>
    <Sidebar>
      <AvatarBlock alt="Болдырев Александр" src={avatar}/>
      <Info>
        {contactData.map((block)=>(
          <InfoBlock
            key={Math.random()}
            title={block.title}
            data={block.data}
          />
        ))}
      </Info>
    </Sidebar>
    <Header container>
      <Grid item xs={4}/>
      <Grid item xs={8}>
        <H1 className="user-name">Болдырев Александр</H1>
        <H2 className="user-experience">Frontend Team Leader and React developer</H2>
      </Grid>
    </Header>
    {/*сюда залетает конкретный main конкретной страницы*/}
    {children}
  </HomePageLayoutWrapper>
);

HomePageLayout.propTypes = {
  children: PropTypes.node,
};

export {HomePageLayout};
