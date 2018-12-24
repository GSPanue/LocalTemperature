import {
  CHANGE_SCALE
} from '../../constants';

const changeScale = (scale) => ({
  type: CHANGE_SCALE,
  payload: scale
});

export {
  changeScale
};
