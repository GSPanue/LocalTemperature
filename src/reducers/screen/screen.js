import {
  CHANGE_SCREEN
} from '../../constants';

const initialState = {
  screen: 'splash'
};

const screen = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCREEN:
      return {
        ...state,
        screen: action.payload
      };

    default:
      return state;
  }
};

export default screen;
