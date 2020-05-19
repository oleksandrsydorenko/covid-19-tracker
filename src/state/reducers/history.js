import chunk from 'lodash/chunk';

import {
  FETCH_HISTORY_REQUEST,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_FAILURE,
} from '../actionTypes';

const initialState = {
  error: null,
  history: [],
  isFetching: true,
};

export const history = (state = initialState, { payload, type }) => {
  const stateHandlers = {
    [FETCH_HISTORY_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [FETCH_HISTORY_SUCCESS]: ({ data = [] }) => ({
      ...state,
      history: chunk(data, 50),
      isFetching: false,
    }),
    [FETCH_HISTORY_FAILURE]: ({ error }) => ({
      ...state,
      error,
      isFetching: false,
    }),
  };

  return stateHandlers[type] ? stateHandlers[type](payload) : state;
};

export const selectHistory = state => state.history;
