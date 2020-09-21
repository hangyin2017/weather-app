import React from 'react';
import styles from './Forecast.module.scss';
import Weather from './components/Weather';

const Forecast = () =>
  <section className={styles.Forecast}>
    <h4 className={styles.header}>Forecast</h4>
    <div className={styles.weathers}>
      <Weather />
      <Weather />
      <Weather />
      <Weather />
      <Weather />
    </div>
  </section>

export default Forecast;