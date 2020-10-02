import OpenWeatherMap from './openWeatherMap';

export const getWeather = (id) => OpenWeatherMap('weather', id);