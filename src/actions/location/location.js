import {
  ADD_LOCATION
} from '../../constants';

const addLocation = (currentLocation) => ({
  type: ADD_LOCATION,
  payload: currentLocation
});

export {
  addLocation
};
