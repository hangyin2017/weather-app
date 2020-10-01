const OpenWeatherMap = (type, id, units = 'metric') => {
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';
  const appid = '216d2848c9468ebc32e6b1975c3ebc54';
  // const APPID = process.env.REACT_APP_APPID;
  console.log(process.env.REACT_APP_APPID);
  
  const query = `/${type}?id=${id}&units=${units}&appid=${appid}`;

  return fetch(BASE_URL + query).then(res => res.json());
};

export default OpenWeatherMap;