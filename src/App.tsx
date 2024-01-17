import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './constants';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>App</div>
    </ThemeProvider>
  );
}

export default App;
