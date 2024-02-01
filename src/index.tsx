import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { persistor, store } from '@store/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
