import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from '@components/ErrorBoundary';
import Layout from '@components/Layout';
import theme from '@constants/theme';
import GlobalStyle from '@root/GlobalStyle';
import { useAppSelector } from '@utils/hooks';
import { ThemeProvider } from 'styled-components';

import { pageRoutes } from './constants/routes';

export function App() {
  const currentTheme = useAppSelector(({ theme }) => theme.currentTheme);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {pageRoutes.map(({ id, path, element }) => (
                <Route key={id} path={path} element={element} />
              ))}
            </Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
