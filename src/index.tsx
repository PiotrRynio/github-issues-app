import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App/App';
import { AllAppProviders } from './providers';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/msw/rest-api/browser');
  worker.start().then();
}

ReactDOM.render(
  <React.StrictMode>
    <AllAppProviders>
      <App />
    </AllAppProviders>
  </React.StrictMode>,
  document.getElementById('root'),
);
