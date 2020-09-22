import React from 'react';
import styles from './WeatherData.module.scss';
import MajorInfo from './components/MajorInfo';
import OtherInfo from './components/OtherInfo';

const WeatherData = ({ data: { weather, main, wind } }) => (
  <div className={styles.WeatherData}>
    <MajorInfo weather={weather.main} temperature={main.temp} />
    <OtherInfo humidity={main.humidity} wind={wind.speed} />
  </div>
)

export default WeatherData;