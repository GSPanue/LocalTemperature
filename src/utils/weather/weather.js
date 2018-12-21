import axios from 'axios';

/**
 * getWeatherData: Returns the current weather data.
 */
const getWeatherData = (apiKey, { latitude, longitude }) => {
  const domain = 'http://api.openweathermap.org/data/2.5/';
  const parameters = `weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

  const url = (domain + parameters);

  return axios.get(url);
};

export {
  getWeatherData
};
