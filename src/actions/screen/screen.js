import {
  CHANGE_SCREEN
} from '../../constants';

const changeScreen = (nextScreen) => ({
  type: CHANGE_SCREEN,
  payload: nextScreen
});

export {
  changeScreen
};
