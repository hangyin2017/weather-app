import React from 'react';
import styles from './WeatherData.module.scss';
import Temperature from '../../../Temperature';

const WeatherData = ({
  weather,
  temperature,
  humidity,
  wind,
}) => (
  <div className={styles.weatherData}>
    <div className={styles.majorInfo}>
      <Temperature
        className={styles.temperature}
        value={temperature}
        precision={1}
        unit={'C'}
      />
      <div className={styles.weather}>{weather[0].main}</div>
    </div>
    <div className={styles.otherInfo}>
      <div className={styles.humidity}>
        <h4>HUMIDITY</h4>
        <p>{humidity} %</p>
      </div>
      <div className={styles.wind}>
        <h4>WIND</h4>
        <p>{wind.speed} km/h</p>
      </div>
    </div>
  </div>
);

export default WeatherData;