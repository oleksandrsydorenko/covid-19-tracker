import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);
