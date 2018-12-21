import {
  CHANGE_SCREEN
} from '../../../constants';

import reducer from '..';

describe('Reducer: Screen', () => {
  it('should return the initial state', () => {
    const expectedState = {
      currentScreen: 'splash'
    };

    const actualState = reducer(undefined, {});

    expect(actualState).toEqual(expectedState);
  });

  it('should handle CHANGE_SCREEN', () => {
    const initialState = {
      currentScreen: 'splash'
    };

    const expectedState = {
      currentScreen: 'home'
    };

    const actualState = reducer(initialState, {
      type: CHANGE_SCREEN,
      payload: 'home'
    });

    expect(actualState).toEqual(expectedState);
  });
});
