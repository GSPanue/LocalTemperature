import {
  GET_COORDINATES_REQUEST,
  GET_COORDINATES_SUCCESS,
  GET_COORDINATES_FAILURE
} from '../../../constants';

import { getCurrentPosition, mockStore } from '../../../utils';
import * as actions from '..';

jest.mock('../../../utils/geolocation');

describe('Actions: Coordinates', () => {
  describe('Action: getCoordinates', () => {
    it('should dispatch GET_COORDINATES_REQUEST and GET_COORDINATES_FAILURE on failure', async () => {
      getCurrentPosition.mockImplementationOnce(() => (
        Promise.reject(new Error('error'))
      ));

      const store = mockStore();
      await store.dispatch(actions.getCoordinates());
      const dispatches = store.getActions();

      expect(dispatches[0]).toEqual({
        type: GET_COORDINATES_REQUEST
      });

      expect(dispatches[1]).toEqual({
        type: GET_COORDINATES_FAILURE,
        error: 'error'
      });
    });

    it('should dispatch GET_COORDINATES_REQUEST and GET_COORDINATES_SUCCESS on success', async () => {
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
      await store.dispatch(actions.getCoordinates());
      const dispatchedActions = store.getActions();

      expect(dispatchedActions[0]).toEqual({
        type: GET_COORDINATES_REQUEST
      });

      expect(dispatchedActions[1]).toEqual({
        type: GET_COORDINATES_SUCCESS,
        payload: coords
      });
    });
  });
});
