import { mapStateToProps } from '..';

describe('Index', () => {
  describe('Function: mapStateToProps', () => {
    const state = {
      weather: {
        currentLocation: 'location'
      }
    };

    it('should return an object', () => {
      expect(mapStateToProps(state)).toBeObject();
    });

    it('should return an object containing currentLocation', () => {
      expect(mapStateToProps(state).currentLocation).toBeDefined();
    });
  });
});
