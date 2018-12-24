import {
  CHANGE_SCALE
} from '../../../constants';

import * as actions from '..';

describe('Actions: Temperature', () => {
  describe('Action: changeScale', () => {
    it('should create an action to change the temperature scale', () => {
      const expectedAction = {
        type: CHANGE_SCALE,
        payload: 'celsius'
      };

      const actualAction = actions.changeScale('celsius');

      expect(actualAction).toEqual(expectedAction);
    });
  });
});
