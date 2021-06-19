import React from 'react';
import { Header } from '../../components/htmlSections/Header';
import { AboutMe } from '../Pages/HomePage/components/AboutMeBox';
import { HomePage } from '../Pages/HomePage';
import { SiteLayout } from './styles';

function App() {
  return (
    <SiteLayout>
      <Header container />
      <main>
        <HomePage />
      </main>
      <footer>
        <AboutMe />
      </footer>
    </SiteLayout>
  );
}

export default App;
