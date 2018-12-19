import {
  GET_COORDINATES_REQUEST,
  GET_COORDINATES_SUCCESS,
  GET_COORDINATES_FAILURE
} from '../../constants';

import { getCurrentPosition } from '../../utils';

const getCoordinates = () => (
  async (dispatch) => {
    // Initiate loading state
    dispatch({
      type: GET_COORDINATES_REQUEST
    });

    try {
      // Get coordinates of the device
      const { coords: { latitude, longitude } } = await getCurrentPosition();

      // Update currentCoordinates in reducer on success
      dispatch({
        type: GET_COORDINATES_SUCCESS,
        payload: {
          latitude, longitude
        }
      });
    }
    catch (error) {
      // Update error in reducer on failure
      dispatch({
        type: GET_COORDINATES_FAILURE,
        error: error.message
      });
    }
  }
);

export {
  getCoordinates
};
