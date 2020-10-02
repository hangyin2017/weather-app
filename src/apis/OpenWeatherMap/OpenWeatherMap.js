const OpenWeatherMap = (type, id, units = 'metric') => {
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';
  const APPID = process.env.APPID;
  
  const query = `/${type}?id=${id}&units=${units}&appid=${APPID}`;

  return fetch(BASE_URL + query).then(res => res.json());
};

export default OpenWeatherMap;