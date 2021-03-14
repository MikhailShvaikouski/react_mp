import React from 'react';

import {
  ErrorBoundary,
  Header,
  MovieList,
  Footer,
} from './modules';

const App = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <Header />
      <MovieList />
      <Footer />
    </ErrorBoundary>
  </React.StrictMode>

);

export default App;
