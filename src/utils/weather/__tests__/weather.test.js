import axios from 'axios';
import { getWeatherData } from '..';

jest.mock('axios');

describe('Utility: Weather', () => {
  describe('Function: getWeatherData', () => {
    it('should call axios.get', () => {
      const get = jest.fn(() => (
        Promise.resolve({})
      ));

      axios.get = get;

      getWeatherData(1, { latitude: 1, longitude: 2 });

      expect(get).toHaveBeenCalledTimes(1);
    });

    it('should have the correct URL parameters', () => {
      const get = jest.fn(() => (
        Promise.resolve({})
      ));

      axios.get = get;

      const apiKey = 1;
      const latitude = 1;
      const longitude = 2;

      const domain = 'http://api.openweathermap.org/data/2.5/';
      const parameters = `weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

      const url = (domain + parameters);

      getWeatherData(apiKey, { latitude, longitude });

      expect(get).toHaveBeenCalledWith(url);
    });

    it('should return an object', async () => {
      const data = {
        a: 1
      };

      axios.get.mockImplementationOnce(() => (
        Promise.resolve(data)
      ));

      const result = await getWeatherData(1, { latitude: 1, longitude: 2 });
      expect(result).toBeObject();
    });
  });
});
