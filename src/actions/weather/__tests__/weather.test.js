import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE
} from '../../../constants';

import { getCurrentPosition, mockStore } from '../../../utils';
import * as actions from '..';

jest.mock('../../../utils/geolocation');

describe('Actions: Weather', () => {
  describe('Action: getWeather', () => {
    it('should dispatch GET_WEATHER_REQUEST and GET_WEATHER_FAILURE on failure', async () => {
      getCurrentPosition.mockImplementationOnce(() => (
        Promise.reject(new Error('error'))
      ));

      const store = mockStore();
      await store.dispatch(actions.getWeather());
      const dispatches = store.getActions();

      expect(dispatches[0]).toEqual({
        type: GET_WEATHER_REQUEST
      });

      expect(dispatches[1]).toEqual({
        type: GET_WEATHER_FAILURE,
        error: 'error'
      });
    });

    it('should dispatch GET_WEATHER_REQUEST and GET_WEATHER_SUCCESS on success', async () => {
      const coords = {
        latitude: 1,
        longitude: 0
      };

      getCurrentPosition.mockImplementationOnce(() => (
        Promise.resolve({
          coords
        })
      ));

      const store = mockStore();
      await store.dispatch(actions.getWeather());
      const dispatchedActions = store.getActions();

      expect(dispatchedActions[0]).toEqual({
        type: GET_WEATHER_REQUEST
      });

      expect(dispatchedActions[1]).toEqual({
        type: GET_WEATHER_SUCCESS,
        payload: coords
      });
    });
  });
});
