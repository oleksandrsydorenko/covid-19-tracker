import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { countries, stats } from './reducers';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['stats'],
  stateReconciler: autoMergeLevel2,
};

export default persistReducer(
  rootPersistConfig,
  combineReducers({
    countries,
    stats,
  }),
);
