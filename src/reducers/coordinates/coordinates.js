import {
  GET_COORDINATES_REQUEST,
  GET_COORDINATES_SUCCESS,
  GET_COORDINATES_FAILURE
} from '../../constants';

const initialState = {
  currentCoordinates: null,
  loading: false,
  error: null
};

const coordinates = (state = initialState, action) => {
  switch (action.type) {
    case GET_COORDINATES_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_COORDINATES_SUCCESS:
      return {
        ...state,
        loading: false,
        currentCoordinates: action.payload
      };

    case GET_COORDINATES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default coordinates;
