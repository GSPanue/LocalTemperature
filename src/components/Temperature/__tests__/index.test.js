import { changeScale } from '../../../actions';
import { mapStateToProps, mapDispatchToProps } from '..';

jest.mock('../../../actions');

describe('Index', () => {
  describe('Function: mapStateToProps', () => {
    const state = {
      weather: {
        currentTemperature: {
          celsius: 'celsius',
          fahrenheit: 'fahrenheit'
        }
      },
      scale: {
        currentScale: 'celsius'
      }
    };

    it('should return an object', () => {
      expect(mapStateToProps(state)).toBeObject();
    });

    it('should return an object containing currentTemperature and currentScale', () => {
      expect(mapStateToProps(state).currentTemperature).toBeDefined();
      expect(mapStateToProps(state).currentScale).toBeDefined();
    });

    it('should access currentTemperature by currentScale and assign the result to currentTemperature', () => {
      expect(mapStateToProps(state).currentTemperature).toEqual('celsius');

      const scale = {
        currentScale: 'fahrenheit'
      };

      expect(mapStateToProps({ ...state, scale }).currentTemperature).toEqual('fahrenheit');
    });
  });

  describe('Function: mapDispatchToProps', () => {
    const dispatch = jest.fn();

    it('should return an object', () => {
      expect(mapDispatchToProps(dispatch)).toBeObject();
    });

    it('should return an object containing changeScale', () => {
      expect(mapDispatchToProps(dispatch).changeScale).toBeDefined();
    });

    it('should call changeScale action', () => {
      expect(changeScale).toHaveBeenCalledTimes(0);
      mapDispatchToProps(dispatch).changeScale();
      expect(changeScale).toHaveBeenCalledTimes(1);
    });
  });
});
