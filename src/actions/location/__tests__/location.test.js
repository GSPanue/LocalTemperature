import {
  ADD_LOCATION
} from '../../../constants';

import * as actions from '..';

describe('Actions: Location', () => {
  it('should create an action to add the location', () => {
    const expectedAction = {
      type: ADD_LOCATION,
      payload: 'location'
    };

    const actualAction = actions.addLocation('location');

    expect(expectedAction).toEqual(actualAction);
  });
});
