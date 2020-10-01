import OpenWeatherMap from './OpenWeatherMap';

export const getForecast = (id) => OpenWeatherMap('forecast', id);