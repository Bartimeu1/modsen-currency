import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from '@components/ErrorBoundary';
import Layout from '@components/Layout';
import theme from '@constants/theme';
import GlobalStyle from '@root/GlobalStyle';
import { useAppSelector } from '@utils/hooks';
import { ThemeProvider } from 'styled-components';

import { BankCardPage } from './pages/BankCard';
import { HomePage } from './pages/Home';
import { NotFoundPage } from './pages/NotFound';
import { TimelinePage } from './pages/Timeline';

export function App() {
  const currentTheme = useAppSelector(({ theme }) => theme.currentTheme);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/bank-card" element={<BankCardPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
