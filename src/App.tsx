
import './App.css';
import PeoplePage from './pages/People/peoplepage';
import store from './app/store'
import { Provider } from 'react-redux'

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
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PeoplePage />
      </ApolloProvider>
    </Provider>
  );
}

export default App;
