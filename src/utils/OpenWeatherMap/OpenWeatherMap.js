const OpenWeatherMap = (type, id, units = 'metric') => {
  const baseURL = 'https://api.openweathermap.org/data/2.5';
  const key = '216d2848c9468ebc32e6b1975c3ebc54';
  const query = `/${type}?id=${id}&units=${units}&appid=${key}`;
  return fetch(baseURL + query).then(res => res.json());
}

export default OpenWeatherMap;