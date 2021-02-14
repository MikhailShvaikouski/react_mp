import React from 'react';

import {
  FunctionalComp,
  PureComp,
  ComponentComp,
  CreateElementComp,
} from './modules';

const App = () => (
  <div>

    <span>Hello world!</span>

    <FunctionalComp />
    <PureComp />
    <ComponentComp />
    <CreateElementComp />
  </div>
);

export default App;
