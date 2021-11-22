import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from '@hooks/useDataContext';
import GlobalStyles from '@styles/global-styles';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
