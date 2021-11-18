import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WebSocketLink } from '@apollo/client/link/ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";



const httpLink = new HttpLink({
  uri: 'https://notable-meerkat-87.hasura.app/v1/graphql',
  headers: {'x-hasura-admin-secret':'C3Q9zkmsMaju6mbYspYHkCI5s66AzrMbUpDFYwTvdK3jNmG8Y0a0mj9t4qAM2CTk'}
});

const wsLink = new WebSocketLink({
  uri: 'ws://notable-meerkat-87.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams:{
      headers: {'x-hasura-admin-secret':'C3Q9zkmsMaju6mbYspYHkCI5s66AzrMbUpDFYwTvdK3jNmG8Y0a0mj9t4qAM2CTk'}
    }
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});



ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
