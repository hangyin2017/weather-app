import React from 'react';
import styles from './WeatherData.module.scss';

const WeatherData = ({ data }) => (
  <div className={styles.WeatherData}>
    <div>
      <div className={styles.temperature}>
        {data.temperature} <span>&nbsp;°C</span>
      </div>
      <div className={styles.weather}>{data.weather}</div>
    </div>
    <div className={styles.otherInfo}>
      <div className={styles.humidity}>
        <h4>HUMIDITY</h4>
        <p>{data.humidity}</p>
      </div>
      <div className={styles.wind}>
        <h4>WIND</h4>
        <p>{data.wind} km/h</p>
      </div>
    </div>
  </div>
)

export default WeatherData;