import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE
} from '../../constants';

import { getCurrentPosition, getWeatherData, getFahrenheit, getErrorMessage } from '../../utils';

const getWeather = () => (
  async (dispatch, getState) => {
    // Initiate loading state
    dispatch({
      type: GET_WEATHER_REQUEST
    });

    try {
      // Get OpenWeatherMap API key
      const { app: { apiKey } } = getState();

      // Get coordinates of the device
      const { coords } = await getCurrentPosition();

      // Get current temperature, city/town name, and country
      const { data: { main: { temp }, name, sys: { country } } } = await getWeatherData(apiKey, coords);

      // Format data before storing
      const currentLocation = `${name}, ${country}`;
      const currentTemperature = {
        c: Math.round(temp),
        f: Math.round(getFahrenheit(temp))
      };

      // Update currentLocation and currentTemperature in reducer on success
      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: {
          currentLocation,
          currentTemperature
        }
      });
    }
    catch (error) {
      // Get error message
      const message = getErrorMessage(error);

      // Update error in reducer on failure
      dispatch({
        type: GET_WEATHER_FAILURE,
        error: message
      });
    }
  }
);

export {
  getWeather
};
