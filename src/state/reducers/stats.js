import {
  FETCH_STATS_REQUEST,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_FAILURE,
} from '../actionTypes';

const initialState = {
  error: null,
  isFetching: true,
  stats: [],
};

export const stats = (state = initialState, { payload, type }) => {
  const stateHandlers = {
    [FETCH_STATS_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [FETCH_STATS_SUCCESS]: ({ data = [] }) => ({
      ...state,
      data: data[0],
      isFetching: false,
    }),
    [FETCH_STATS_FAILURE]: ({ error }) => ({
      ...state,
      error,
      isFetching: false,
    }),
  };

  return stateHandlers[type] ? stateHandlers[type](payload) : state;
};

export const selectStats = state => state.stats;
