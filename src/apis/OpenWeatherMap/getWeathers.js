import OpenWeatherMap from './OpenWeatherMap';

export const getWeathers = (ids) => OpenWeatherMap('group', ids.join(','));