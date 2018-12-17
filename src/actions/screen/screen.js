import {
  CHANGE_SCREEN
} from '../../constants';

const changeScreen = (screen) => ({
  type: CHANGE_SCREEN,
  payload: screen
});

export {
  changeScreen
};
