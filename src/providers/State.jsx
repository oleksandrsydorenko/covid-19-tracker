import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { Spinner } from '../components';
import { persistor, store } from '../state/store';

const State = ({ children }) => (
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={<Spinner isFullScreen={true} />}
    >
      {children}
    </PersistGate>
  </Provider>
);

export default State;
