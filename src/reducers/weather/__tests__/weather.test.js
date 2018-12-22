import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE
} from '../../../constants';

import reducer from '..';

describe('Reducer: Weather', () => {
  it('should return the initial state', () => {
    const expectedState = {
      currentLocation: null,
      currentTemperature: null,
      loading: false,
      error: ''
    };

    const actualState = reducer(undefined, {});

    expect(actualState).toEqual(expectedState);
  });

  it('should handle GET_WEATHER_REQUEST', () => {
    const initialState = {
      currentLocation: null,
      currentTemperature: null,
      loading: false,
      error: ''
    };

    const expectedState = {
      currentLocation: null,
      currentTemperature: null,
      loading: true,
      error: ''
    };

    const actualState = reducer(initialState, {
      type: GET_WEATHER_REQUEST
    });

    expect(actualState).toEqual(expectedState);
  });

  it('should handle GET_WEATHER_SUCCESS', () => {
    const payload = {
      currentLocation: 'location',
      currentTemperature: {
        c: 'c',
        f: 'f'
      }
    };

    const initialState = {
      currentLocation: null,
      currentTemperature: null,
      loading: false,
      error: ''
    };

    const expectedState = {
      ...payload,
      loading: false,
      error: ''
    };

    const actualState = reducer(initialState, {
      type: GET_WEATHER_SUCCESS,
      payload
    });

    expect(actualState).toEqual(expectedState);
  });

  it('should handle GET_WEATHER_FAILURE', () => {
    const error = 'error';

    const initialState = {
      currentLocation: null,
      currentTemperature: null,
      loading: false,
      error: ''
    };

    const expectedState = {
      currentLocation: null,
      currentTemperature: null,
      loading: false,
      error
    };

    const actualState = reducer(initialState, {
      type: GET_WEATHER_FAILURE,
      error
    });

    expect(actualState).toEqual(expectedState);
  });
});
