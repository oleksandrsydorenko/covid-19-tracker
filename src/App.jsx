import React from 'react';

import { State } from './providers';
import { Stats } from './screens';

const App = () => (
  <State>
    <Stats />
  </State>
);

export default App;
