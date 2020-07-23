import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { ApolloProvider } from '@apollo/client';
import Routes from './routes';
import customTheme from './theme';
import apolloClient from './infrastructure/apollo-client';
import './index.scss'

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <CSSReset />

    <ApolloProvider client={apolloClient}>
      <Routes />
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root')
)