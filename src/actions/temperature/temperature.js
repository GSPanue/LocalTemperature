import {
  ADD_TEMPERATURE
} from '../../constants';

const addTemperature = (currentTemp) => ({
  type: ADD_TEMPERATURE,
  payload: currentTemp
});

export {
  addTemperature
};
