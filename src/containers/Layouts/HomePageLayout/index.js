import React from 'react';
import PropTypes from 'prop-types';
import { HomePageLayoutWrapper } from './styles';
import Header from '../../../components/htmlSections/Header';
import Sidebar from '../../../components/htmlSections/Sidebar';
import { Grid } from '@material-ui/core';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';

const HomePageLayout = ({ children }) => (
  <Grid container justify='center'>
    <HomePageLayoutWrapper>
      <Sidebar>Sidebar</Sidebar>
      <Header> Header </Header>
      <p>11111111111111</p>
      {children}
    </HomePageLayoutWrapper>
  </Grid>
);

HomePageLayout.propTypes = {
  children: PropTypes.node,
};

export default HomePageLayout;
