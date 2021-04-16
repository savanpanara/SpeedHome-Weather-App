import * as types from '../types';

export const getCities = () => (dispatch, getState, {api}) => {
  const promise = async () => {
    const {data} = await api.getCities();
    return data;
  };
  return dispatch({
    type: types.GET_CITIES,
    payload: promise(),
  });
};
