import {
  ADD_TEMPERATURE
} from '../../constants';

const initialState = {
  currentTemp: null
};

const temperature = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEMPERATURE:
      return {
        ...state,
        currentTemp: action.payload
      };

    default:
      return state;
  }
};

export default temperature;
