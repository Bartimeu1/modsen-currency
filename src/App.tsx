import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import theme from '@constants/theme';
import GlobalStyle from '@root/GlobalStyle';
import { useAppSelector } from '@utils/hooks';
import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import HomePage from './pages/Home';
import TimelinePage from './pages/Timeline';
import BankCardPage from './pages/BankCard';

function App() {
  const currentTheme = useAppSelector(({ theme }) => theme.currentTheme);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/bank-card" element={<BankCardPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
