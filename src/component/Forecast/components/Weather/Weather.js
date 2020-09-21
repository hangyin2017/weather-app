import React from 'react';
import styles from './Weather.module.scss';

const Weather = () =>
  <div className={styles.Weather}>
    <div className={styles.day}>MON</div>
    <div className={styles.icon}>
      <img src="http://openweathermap.org/img/wn/11d@2x.png" />
    </div>
    <div className={styles.temperature}>15 &nbsp;C</div>
  </div>

export default Weather;