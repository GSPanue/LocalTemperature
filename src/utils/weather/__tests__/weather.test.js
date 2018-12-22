import axios from 'axios';
import { getWeatherData, getFahrenheit, getErrorMessage } from '..';

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

  describe('Function: getFahrenheit', () => {
    it('should convert celsius to fahrenheit', () => {
      expect(getFahrenheit(0)).toEqual(32);
      expect(getFahrenheit(-10)).toEqual(14);
      expect(getFahrenheit(32)).toEqual(89.6);
    });

    it('should return a number', () => {
      expect(getFahrenheit(0)).toBeNumber();
    });
  });

  describe('Function: getErrorMessage', () => {
    it('should return "Geolocation is not supported by this browser."', () => {
      const error = {
        code: 0
      };

      const expectedMessage = 'Geolocation is not supported by this browser.';

      expect(getErrorMessage(error)).toEqual(expectedMessage);
    });

    it('should return "This website requires geolocation to be enabled in order to work correctly."', () => {
      const error = {
        code: 1
      };

      const expectedMessage = 'This website requires geolocation to be enabled in order to work correctly.';

      expect(getErrorMessage(error)).toEqual(expectedMessage);
    });

    it('should return "Something went wrong. Please refresh the page and try again."', () => {
      const error = {
        code: 2
      };

      const expectedMessage = 'Something went wrong. Please refresh the page and try again.';

      expect(getErrorMessage(error)).toEqual(expectedMessage);
      expect(getErrorMessage({})).toEqual(expectedMessage);
    });
  });
});
