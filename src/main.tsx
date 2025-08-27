import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import GraphQLProvider from './app/providers/GraphQLProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GraphQLProvider>
      <App />
    </GraphQLProvider>
  </React.StrictMode>,
);
