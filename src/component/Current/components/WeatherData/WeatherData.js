import React from 'react';
import styles from './WeatherData.module.scss';
import MajorInfo from './components/MajorInfo';
import OtherInfo from './components/OtherInfo';

const WeatherData = ({ data: { weather, temperature, humidity, wind } }) => (
  <div className={styles.WeatherData}>
    <MajorInfo weather={weather} temperature={temperature} />
    <OtherInfo humidity={humidity} wind={wind} />
  </div>
)

export default WeatherData;