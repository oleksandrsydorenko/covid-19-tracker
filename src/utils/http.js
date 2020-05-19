import axios from 'axios';

export const client = async ({ data, headers, method = 'get', params, url }) =>
  await axios({
    headers,
    method,
    url,
    timeout: 5000,
    ...(method === 'get' ? { params } : { data }),
  });

export const dispatchRequest = ({ baseHeaders, baseUrl }) => ({
  data,
  headers,
  method,
  params,
  path = '',
  types: [REQUEST, SUCCESS, FAILURE],
}) => async dispatch => {
  dispatch({ type: REQUEST });

  try {
    const {
      data: { response },
    } = await client({
      data,
      method,
      params,
      headers: {
        ...baseHeaders,
        ...headers,
      },
      url: `${baseUrl}${path}`,
    });

    dispatch({
      type: SUCCESS,
      payload: { data: response },
    });
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error);
    dispatch({
      type: FAILURE,
      payload: { error },
    });
  }
};
