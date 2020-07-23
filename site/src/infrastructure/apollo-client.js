import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import config from './config';

const httpLink = new HttpLink({
  uri: config.graphQlUrl,
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

export default client;
