import React from 'react';
import HomePageLayout from '../Layouts/HomePageLayout';
import HomePage from '../Pages/HomePage/HomePage';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <Grid container>
      <HomePageLayout>
        <HomePage/>
      </HomePageLayout>
    </Grid>
  );
}

export default App;
