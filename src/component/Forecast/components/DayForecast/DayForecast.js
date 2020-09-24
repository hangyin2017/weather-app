import React from 'react';
import styles from './DayForecast.module.scss';
import Temperature from '../../../Temperature';
import TimeToDay from '../../../../utils/TimeToDay';

const DayForecast = ({
  time,
  temperature,
  weather,
}) => (
  <div className={styles.dayForecast}>
    <div className={styles.day}>{TimeToDay(time * 1000)}</div>
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