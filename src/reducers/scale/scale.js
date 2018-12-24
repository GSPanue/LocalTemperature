import {
  CHANGE_SCALE,
} from '../../constants';

const initialState = {
  currentScale: 'celsius'
};

const scale = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCALE:
      return ({
        ...state,
        currentScale: action.payload
      });

    default:
      return (
        state
      );
  }
};

export default scale;
