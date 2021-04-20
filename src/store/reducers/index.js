import * as types from '../types';

const initialState = {
  cities: {
    cod: '',
    count: 0,
    list: [],
    message: '',
    temperature: {},
    currentTemp: {},
  },
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CITIES_SUCCESS: {
      return {...state, cities: action.payload};
    }
    case types.GET_TEMPERATURE_SUCCESS: {
      return {...state, temperature: action.payload};
    }
    case types.GET_CURRENT_TEMP: {
      return {...state, currentTemp: action.payload};
    }
    default:
      return state;
  }
};

export default reducers;
