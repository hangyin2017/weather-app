import OpenWeatherMap from '../../utils/OpenWeatherMap';

export default (ids) => OpenWeatherMap('group', ids.join(','));