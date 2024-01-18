import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import theme from '@constants/theme';
import GlobalStyle from '@root/GlobalStyle';
import { useAppSelector } from '@utils/hooks';
import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import HomePage from './pages/Home';

function App() {
  const currentTheme = useAppSelector(({ theme }) => theme.currentTheme);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
