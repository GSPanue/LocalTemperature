import {
  GET_COORDINATES_REQUEST,
  GET_COORDINATES_SUCCESS,
  GET_COORDINATES_FAILURE
} from '../../../constants';

import reducer from '..';

describe('Reducer: Coordinates', () => {
  it('should return the initial state', () => {
    const expectedState = {
      currentCoordinates: null,
      loading: false,
      error: null
    };

    const actualState = reducer(undefined, {});

    expect(expectedState).toEqual(actualState);
  });

  it('should handle GET_COORDINATES_REQUEST', () => {
    const initialState = {
      currentCoordinates: null,
      loading: false,
      error: null
    };

    const expectedState = {
      currentCoordinates: null,
      loading: true,
      error: null
    };

    const actualState = reducer(initialState, {
      type: GET_COORDINATES_REQUEST
    });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle GET_COORDINATES_SUCCESS', () => {
    const payload = {};

    const initialState = {
      currentCoordinates: null,
      loading: true,
      error: null
    };

    const expectedState = {
      currentCoordinates: payload,
      loading: false,
      error: null
    };

    const actualState = reducer(initialState, {
      type: GET_COORDINATES_SUCCESS,
      payload
    });

    expect(expectedState).toEqual(actualState);
  });

  it('should handle GET_COORDINATES_FAILURE', () => {
    const error = 'error';

    const initialState = {
      currentCoordinates: null,
      loading: true,
      error: null
    };

    const expectedState = {
      currentCoordinates: null,
      loading: false,
      error
    };

    const actualState = reducer(initialState, {
      type: GET_COORDINATES_FAILURE,
      error
    });

    expect(expectedState).toEqual(actualState);
  });
});
