import React from 'react';
import logo from './logo.svg';
import './App.css';
import PeoplePage from './pages/People/peoplepage';


import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

// dotEnv.config();

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

// const client = ...

function App() {
  return (
    <ApolloProvider client={client}>
      <PeoplePage />
    </ApolloProvider>
  );
}

export default App;
