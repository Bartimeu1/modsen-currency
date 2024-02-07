import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import theme from '@constants/theme';
import { store } from '@store/store';
import { ThemeProvider } from 'styled-components';

export function WithEnvironment(props: { children: ReactNode }) {
  return (
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme['dark']}>{props.children}</ThemeProvider>
      </Provider>
    </HashRouter>
  );
}
