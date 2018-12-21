import {
  CHANGE_SCREEN
} from '../../../constants';

import * as actions from '..';

describe('Actions: Screen', () => {
  it('should create an action to change the screen', () => {
    const expectedAction = {
      type: CHANGE_SCREEN,
      payload: 'home'
    };

    const actualAction = actions.changeScreen('home');

    expect(actualAction).toEqual(expectedAction);
  });
});
