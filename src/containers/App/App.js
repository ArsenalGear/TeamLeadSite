import React from 'react';
import { Grid } from '@material-ui/core';
import { HomePageLayout } from '../Layouts/HomePageLayout';
import { HomePage } from '../Pages/HomePage';

function App() {
  return (
    <Grid container>
      {/* шапка и футер */}
      <HomePageLayout>
        {/* здесь можно закреплять роуты на разные страницы */}
        {/* тело страницы без шапки и футера */}
        {/* сюда залетает ко`нкретный main конкретной страницы */}
        <HomePage />
      </HomePageLayout>
    </Grid>
  );
}

export default App;
