import reducer from '..';

describe('Reducer: App', () => {
  it('should return the initial state', () => {
    const expectedState = {
      apiKey: '86a63e74b79fa2802f200ba1cf603e89'
    };

    const actualState = reducer(undefined, {});

    expect(expectedState).toEqual(actualState);
  });
});
