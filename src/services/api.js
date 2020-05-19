import { http } from '../utils';

const RAPID_API_HOST = 'covid-193.p.rapidapi.com';
const RAPID_API_KEY = 'edf9b326bemshb77a3d214b41854p1d2769jsnfc67536de384';

export const callCovid19Api = http.dispatchRequest({
  baseHeaders: {
    'x-rapidapi-host': RAPID_API_HOST,
    'x-rapidapi-key': RAPID_API_KEY,
  },
  baseUrl: 'https://covid-193.p.rapidapi.com',
});
