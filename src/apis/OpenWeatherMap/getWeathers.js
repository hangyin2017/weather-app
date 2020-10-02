import OpenWeatherMap from './openWeatherMap';

export const getWeathers = (ids) => OpenWeatherMap('group', ids.join(','));