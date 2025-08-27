import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GraphQLProvider from './app/providers/GraphQLProvider';
import RootRouter from './routes/RootRouter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GraphQLProvider>
      <RootRouter />
    </GraphQLProvider>
  </React.StrictMode>,
);
