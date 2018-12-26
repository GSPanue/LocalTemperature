import { getWeather } from '../actions';
import { mapStateToProps, mapDispatchToProps } from '..';

jest.mock('react-dom');
jest.mock('../actions');

describe('Index', () => {
  describe('Function: mapStateToProps', () => {
    const state = {
      weather: {
        currentLocation: null,
        currentTemperature: null,
        error: ''
      }
    };

    it('should return an object', () => {
      expect(mapStateToProps(state)).toBeObject();
    });

    it('should return an object containing complete and error', () => {
      expect(mapStateToProps(state).complete).toBeDefined();
      expect(mapStateToProps(state).error).toBeDefined();
    });

    it('should convert the result of currentLocation and currentTemperature to a boolean value', () => {
      expect(mapStateToProps(state).complete).toBeBoolean();
    });

    it('should assign false to complete when currentLocation and currentTemperature are null', () => {
      expect(mapStateToProps(state).complete).toBeFalse();
    });

    it('should assign true to complete when currentLocation and currentTemperature are assigned a value', () => {
      const nextState = {
        weather: {
          currentLocation: 'location',
          currentTemperature: 'temperature',
          error: ''
        }
      };

      expect(mapStateToProps(nextState).complete).toBeTrue();
    });
  });

  describe('Function: mapDispatchToProps', () => {
    const dispatch = jest.fn();

    it('should return an object', () => {
      expect(mapDispatchToProps(dispatch)).toBeObject();
    });

    it('should return an object containing getWeather', () => {
      expect(mapDispatchToProps(dispatch).getWeather).toBeDefined();
    });

    it('should call getWeather action', () => {
      expect(getWeather).toHaveBeenCalledTimes(0);
      mapDispatchToProps(dispatch).getWeather();
      expect(getWeather).toHaveBeenCalledTimes(1);
    });
  });
});
