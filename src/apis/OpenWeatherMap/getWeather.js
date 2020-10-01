import OpenWeatherMap from './OpenWeatherMap';

export const getWeather = (id) => OpenWeatherMap('weather', id);