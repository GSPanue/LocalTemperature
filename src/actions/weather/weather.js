import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE
} from '../../constants';

import { getCurrentPosition } from '../../utils';

const getWeather = () => (
  async (dispatch) => {
    // Initiate loading state
    dispatch({
      type: GET_WEATHER_REQUEST
    });

    try {
      // Get coordinates of the device
      const { coords: { latitude, longitude } } = await getCurrentPosition();

      // Update currentCoordinates in reducer on success
      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: {
          latitude, longitude
        }
      });
    }
    catch (error) {
      // Update error in reducer on failure
      dispatch({
        type: GET_WEATHER_FAILURE,
        error: error.message
      });
    }
  }
);

export {
  getWeather
};
