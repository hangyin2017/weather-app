import React from 'react';
import styles from './DayForecast.module.scss';
import Temperature from '../../../Temperature';

const DayForecast = ({
  day,
  temperature,
  weather,
}) => (
  <div className={styles.dayForecast}>
    <div className={styles.day}>{day}</div>
    <div className={styles.icon}>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />
    </div>
    <Temperature
      value={temperature}
      className={styles.temperature}
    />
  </div>
)

export default DayForecast;