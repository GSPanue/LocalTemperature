import {
  CHANGE_SCALE
} from '../../constants';

const changeScale = (nextScale) => ({
  type: CHANGE_SCALE,
  payload: nextScale
});

export {
  changeScale
};
