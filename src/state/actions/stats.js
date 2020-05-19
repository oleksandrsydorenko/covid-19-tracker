import { api } from '../../services';
import { DEFAULT_COUNTRY } from '../../utils/constants/system';
import {
  FETCH_STATS_REQUEST,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_FAILURE,
} from '../actionTypes';

export const fetchStats = (country = DEFAULT_COUNTRY) =>
  api.callCovid19Api({
    params: {
      country,
    },
    path: '/statistics',
    types: [FETCH_STATS_REQUEST, FETCH_STATS_SUCCESS, FETCH_STATS_FAILURE],
  });
