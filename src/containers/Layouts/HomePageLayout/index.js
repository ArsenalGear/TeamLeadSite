import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { HomePageLayoutWrapper } from './styles';
import { Header } from '../../../components/htmlSections/Header';
import { H1 } from '../../../components/htmlTags/H1';
import { H2 } from '../../../components/htmlTags/H2';

const HomePageLayout = ({ children }) => (
  <HomePageLayoutWrapper container justify="center">
    <Header container />
    {/* <Grid item lg={4} xs={false} /> */}
    {/* <Grid item lg={8} xs={12}> */}
    {/*  <H1 className="user-name">Болдырев Александр</H1> */}
    {/*  <H2 className="user-experience">Frontend Team Leader and React developer</H2> */}
    {/* </Grid> */}
    {children}
  </HomePageLayoutWrapper>
);

HomePageLayout.propTypes = {
  children: PropTypes.node,
};

export { HomePageLayout };
