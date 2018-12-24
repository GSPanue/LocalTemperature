import {
  CHANGE_SCALE
} from '../../../constants';

import reducer from '..';

describe('Reducer: Scale', () => {
  it('should return the initial state', () => {
    const expectedState = {
      currentScale: 'celsius'
    };

    const actualState = reducer(undefined, {});

    expect(actualState).toEqual(expectedState);
  });

  it('should handle CHANGE_SCALE', () => {
    const initialState = {
      currentScale: 'celsius'
    };

    const expectedState = {
      currentScale: 'fahrenheit'
    };

    const actualState = reducer(initialState, {
      type: CHANGE_SCALE,
      payload: 'fahrenheit'
    });

    expect(actualState).toEqual(expectedState);
  });
});
