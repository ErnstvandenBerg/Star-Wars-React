import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

export const client11 = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});
