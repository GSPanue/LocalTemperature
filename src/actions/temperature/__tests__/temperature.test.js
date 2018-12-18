import {
  ADD_TEMPERATURE
} from '../../../constants';

import * as actions from '..';

describe('Actions: Temperature', () => {
  it('should create an action to add the temperature', () => {
    const expectedAction = {
      type: ADD_TEMPERATURE,
      payload: 'temp'
    };

    const actualAction = actions.addTemperature('temp');

    expect(expectedAction).toEqual(actualAction);
  });
});
