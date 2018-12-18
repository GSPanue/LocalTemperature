import { getCurrentPosition } from '..';

describe('Utility: Geolocation', () => {
  describe('Function: getCurrentPosition', () => {
    it('should return latitude and longitude', async () => {
      global.navigator.geolocation = {
        getCurrentPosition: jest.fn()
          .mockImplementationOnce((success) => (
            Promise.resolve(success({
              coords: {
                latitude: 1,
                longitude: 0
              }
            }))
          ))
      };

      const { coords } = await getCurrentPosition();

      expect(coords).toBeObject();
      expect(coords.latitude).toBeDefined();
      expect(coords.longitude).toBeDefined();
    });

    it('should return an error if something goes wrong whilst locating', async () => {
      global.navigator.geolocation = {
        getCurrentPosition: jest.fn()
          .mockImplementationOnce((success, failure) => (
            Promise.resolve(failure(new Error()))
          ))
      };

      await expect(getCurrentPosition()).rejects.toEqual(Error());
    });

    it('should return an error message when geolocation is not supported', async () => {
      global.navigator.geolocation = undefined;
      const error = 'Your browser is not supported';

      await expect(getCurrentPosition()).rejects.toEqual(Error(error));
    });
  });
});
