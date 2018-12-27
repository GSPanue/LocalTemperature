import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE
} from '../../../constants';

import {
  getCurrentPosition,
  getWeatherData,
  getFahrenheit,
  getErrorMessage
} from '../../../utils/app';

import { mockStore } from '../../../utils/test';

import * as actions from '..';

jest.mock('../../../utils/app/geolocation');
jest.mock('../../../utils/app/weather');

getFahrenheit.mockImplementation((temperature) => (temperature));
getErrorMessage.mockImplementation((error) => (error.message));

describe('Actions: Weather', () => {
  describe('Action: getWeather', () => {
    it('should dispatch GET_WEATHER_REQUEST and GET_WEATHER_FAILURE on geolocation failure', async () => {
      getCurrentPosition.mockImplementationOnce(() => (
        Promise.reject(new Error('geolocation failure'))
      ));

      const initialState = {
        app: {
          apiKey: 1
        }
      };

      const store = mockStore(initialState);
      await store.dispatch(actions.getWeather());
      const dispatches = store.getActions();

      expect(dispatches[0]).toEqual({
        type: GET_WEATHER_REQUEST
      });

      expect(dispatches[1]).toEqual({
        type: GET_WEATHER_FAILURE,
        error: 'geolocation failure'
      });
    });

    it('should dispatch GET_WEATHER_REQUEST and GET_WEATHER_FAILURE on get request failure', async () => {
      const coords = {
        latitude: 1,
        longitude: 0
      };

      getCurrentPosition.mockImplementationOnce(() => (
        Promise.resolve({
          coords
        })
      ));

      getWeatherData.mockImplementationOnce(() => (
        Promise.reject(new Error('request failure'))
      ));

      const initialState = {
        app: {
          apiKey: 1
        }
      };

      const store = mockStore(initialState);
      await store.dispatch(actions.getWeather());
      const dispatches = store.getActions();

      expect(dispatches[0]).toEqual({
        type: GET_WEATHER_REQUEST
      });

      expect(dispatches[1]).toEqual({
        type: GET_WEATHER_FAILURE,
        error: 'request failure'
      });
    });

    it('should dispatch GET_WEATHER_REQUEST and GET_WEATHER_SUCCESS on request success', async () => {
      const data = {
        main: {
          temp: 0
        },
        name: 'name',
        sys: {
          country: 'country'
        }
      };

      getCurrentPosition.mockImplementationOnce(() => (
        Promise.resolve({
          coords: {
            latitude: 1,
            longitude: 0
          }
        })
      ));

      getWeatherData.mockImplementationOnce(() => (
        Promise.resolve({
          data
        })
      ));

      const initialState = {
        app: {
          apiKey: 1
        }
      };

      const store = mockStore(initialState);
      await store.dispatch(actions.getWeather());
      const dispatchedActions = store.getActions();

      expect(dispatchedActions[0]).toEqual({
        type: GET_WEATHER_REQUEST
      });

      expect(dispatchedActions[1]).toEqual({
        type: GET_WEATHER_SUCCESS,
        payload: {
          currentLocation: `${data.name}, ${data.sys.country}`,
          currentTemperature: {
            celsius: `${data.main.temp}°C`,
            fahrenheit: `${data.main.temp}°F`
          }
        }
      });
    });
  });
});
