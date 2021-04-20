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

export const getTemperature = params => (dispatch, getState, {api}) => {
  const promise = async () => {
    const {data} = await api.getTemperature(params);
    return data;
  };
  return dispatch({
    type: types.GET_TEMPERATURE,
    payload: promise(),
  });
};

export const getCurrentTemparature = payload => dispatch => {
  return dispatch({
    type: types.GET_CURRENT_TEMP,
    payload: payload,
  });
};
