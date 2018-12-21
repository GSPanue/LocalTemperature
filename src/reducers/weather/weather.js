import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE
} from '../../constants';

const initialState = {
  currentLocation: null,
  currentTemperature: null,
  loading: false,
  error: null
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload
      };

    case GET_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default weather;
