import * as types from '../types';

const initialState = {
  cities: {
    cod: '',
    count: 0,
    list: [],
    message: '',
  },
};

const reducers = (state = initialState, action) => {
  console.log('LOGGER', action);
  switch (action.type) {
    case types.GET_CITIES_SUCCESS: {
      return {...state, cities: action.payload};
    }
    default:
      return state;
  }
};

export default reducers;
