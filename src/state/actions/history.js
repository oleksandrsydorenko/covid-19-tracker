import { api } from '../../services';
import { DEFAULT_COUNTRY } from '../../utils/constants/system';
import {
  FETCH_HISTORY_REQUEST,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_FAILURE,
} from '../actionTypes';

export const fetchHistory = (country = DEFAULT_COUNTRY) =>
  api.callCovid19Api({
    params: {
      country,
    },
    path: '/history',
    types: [
      FETCH_HISTORY_REQUEST,
      FETCH_HISTORY_SUCCESS,
      FETCH_HISTORY_FAILURE,
    ],
  });
