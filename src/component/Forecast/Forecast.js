import React from 'react';
import styles from './Forecast.module.scss';
import Weather from './components/Weather';

const Forecast = () =>
  <div className={styles.Forecast}>
    <h4>Forecast</h4>
    <div className={styles.weathers}>
      <Weather />
    </div>
  </div>

export default Forecast;