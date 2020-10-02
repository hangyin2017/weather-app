import OpenWeatherMap from './openWeatherMap';

export const getForecast = (id) => OpenWeatherMap('forecast', id);