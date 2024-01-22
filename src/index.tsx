import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { persistor,store } from '@store/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
