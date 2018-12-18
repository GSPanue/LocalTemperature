import {
  ADD_LOCATION
} from '../../constants';

const initialState = {
  currentLocation: null
};

const location = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        currentLocation: action.payload
      };

    default:
      return state;
  }
};

export default location;
