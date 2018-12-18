import {
  ADD_LOCATION
} from '../../../constants';

import reducer from '..';

describe('Reducer: Location', () => {
  it('should return the initial state', () => {
    const expectedState = {
      currentLocation: null
    };

    const actualState = reducer(undefined, {});

    expect(expectedState).toEqual(actualState);
  });

  it('should handle ADD_LOCATION', () => {
    const payload = 'location';

    const initialState = {
      currentLocation: null
    };

    const expectedState = {
      currentLocation: payload
    };

    const actualState = reducer(initialState, {
      type: ADD_LOCATION,
      payload
    });

    expect(expectedState).toEqual(actualState);
  });
});
