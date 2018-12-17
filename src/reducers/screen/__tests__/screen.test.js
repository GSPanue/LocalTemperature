import {
  CHANGE_SCREEN
} from '../../../constants';

import reducer from '..';

describe('Reducer: Screen', () => {
  it('should return the initial state', () => {
    const expectedState = {
      screen: 'splash'
    };

    const actualState = reducer(undefined, {});

    expect(expectedState).toEqual(actualState);
  });

  it('should handle CHANGE_SCREEN', () => {
    const initialState = {
      screen: 'splash'
    };

    const expectedState = {
      screen: 'home'
    };

    const actualState = reducer(initialState, {
      type: CHANGE_SCREEN,
      payload: 'home'
    });

    expect(expectedState).toEqual(actualState);
  });
});
