import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from '@utils/hooks';

import theme from '@constants/theme';
import GlobalStyle from '@root/GlobalStyle';

import Layout from './components/Layout';
import HomePage from './pages/Home';

function App() {
  const currentTheme = useAppSelector(({ theme }) => theme.currentTheme);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
