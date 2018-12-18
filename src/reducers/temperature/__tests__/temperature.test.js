import {
  ADD_TEMPERATURE
} from '../../../constants';

import reducer from '..';

describe('Reducer: Temperature', () => {
  it('should return the initial state', () => {
    const expectedState = {
      currentTemp: null
    };

    const actualState = reducer(undefined, {});

    expect(expectedState).toEqual(actualState);
  });

  it('should handle ADD_TEMPERATURE', () => {
    const payload = 'temp';

    const initialState = {
      currentTemp: null
    };

    const expectedState = {
      currentTemp: payload
    };

    const actualState = reducer(initialState, {
      type: ADD_TEMPERATURE,
      payload
    });

    expect(expectedState).toEqual(actualState);
  });
});
