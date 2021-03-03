import React from 'react';

import {
  ErrorBoundary,
  Header,
  MovieList,
} from './modules';

const App = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <Header />
      <MovieList />
    </ErrorBoundary>
  </React.StrictMode>

);

export default App;
