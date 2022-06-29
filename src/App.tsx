import './App.css';
import PeoplePage from './pages/People/peoplepage';
import PersonPage from './pages/person/person';
import store from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
        <Router>
          <Routes>
            <Route path='/' element={<PeoplePage />} />
            <Route path='/Person/:id' element={<PersonPage />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </Provider>

  );
}

export default App;
