import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '@constants/theme';
import { HashRouter } from 'react-router-dom';
import { store } from '@store/store';

export function WithEnvironment(props: { children: ReactNode }) {
  return (
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme['dark']}>{props.children}</ThemeProvider>
      </Provider>
    </HashRouter>
  );
}
