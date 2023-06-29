import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8084', // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

export default apolloClient;
