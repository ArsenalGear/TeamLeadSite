import React from 'react';
import { YMInitializer } from 'react-yandex-metrika';
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
        <YMInitializer
          accounts={[81333502]}
          options={{ webvisor: true, defer: true }}
          version="2"
        />
        <AboutMe />
      </footer>
    </SiteLayout>
  );
}

export default App;
