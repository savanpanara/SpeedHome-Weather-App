import * as types from '../types';

const initialState = {
  cities: {
    cod: '',
    count: 0,
    list: [],
    message: '',
    loading: false,
  },
  temperature: {loading: false},
  currentTemp: {},
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CITIES_START: {
      return {...state, cities: {loading: true}};
    }
    case types.GET_CITIES_SUCCESS: {
      return {...state, cities: action.payload, loading: false};
    }
    case types.GET_CITIES_ERROR: {
      return {
        ...state,
        cities: {
          loading: false,
        },
      };
    }
    case types.GET_TEMPERATURE_START: {
      return {...state, temperature: {loading: true}};
    }
    case types.GET_TEMPERATURE_SUCCESS: {
      return {...state, temperature: action.payload, loading: false};
    }
    case types.GET_TEMPERATURE_ERROR: {
      return {...state, temperature: {loading: false}};
    }
    case types.GET_CURRENT_TEMP: {
      return {...state, currentTemp: action.payload};
    }
    default:
      return state;
  }
};

export default reducers;
