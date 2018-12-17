import {
  CHANGE_SCREEN
} from '../../constants';

const initialState = {
  currentScreen: 'splash'
};

const screen = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCREEN:
      return {
        ...state,
        currentScreen: action.payload
      };

    default:
      return state;
  }
};

export default screen;
