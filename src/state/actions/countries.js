import { api } from '../../services';
import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from '../actionTypes';

export const fetchCountries = () =>
  api.callCovid19Api({
    path: '/countries',
    types: [
      FETCH_COUNTRIES_REQUEST,
      FETCH_COUNTRIES_SUCCESS,
      FETCH_COUNTRIES_FAILURE,
    ],
  });
