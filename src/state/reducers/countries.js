import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from '../actionTypes';

const initialState = {
  codes: [],
  error: null,
  isFetching: true,
};

export const countries = (state = initialState, { payload, type }) => {
  const stateHandlers = {
    [FETCH_COUNTRIES_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [FETCH_COUNTRIES_SUCCESS]: ({ data = [] }) => ({
      ...state,
      data,
      isFetching: false,
    }),
    [FETCH_COUNTRIES_FAILURE]: ({ error }) => ({
      ...state,
      error,
      isFetching: false,
    }),
  };

  return stateHandlers[type] ? stateHandlers[type](payload) : state;
};

export const selectCountries = state => state.countries;
