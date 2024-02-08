import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from '@components/ErrorBoundary';
import theme from '@constants/theme';
import { GlobalStyle } from '@root/GlobalStyle';
import { useAppSelector } from '@root/hooks';
import { ThemeProvider } from 'styled-components';

import { pageRoutes, layoutRoute } from './constants/routes';

export function App() {
  const currentTheme = useAppSelector(({ theme }) => theme.currentTheme);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <ErrorBoundary>
        <GlobalStyle />
        <HashRouter>
          <Routes>
            <Route path={layoutRoute.path} element={layoutRoute.element}>
              {pageRoutes.map(({ id, path, element }) => (
                <Route key={id} path={path} element={element} />
              ))}
            </Route>
          </Routes>
        </HashRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
