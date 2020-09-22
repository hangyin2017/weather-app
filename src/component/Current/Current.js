import React from 'react';
import styles from './Current.module.scss';
import WeatherData from './components/WeatherData';

const Current = ({ data }) =>
  <div className={styles.Current}>
    <div className={styles.city}>
      <h2>{data.city}</h2>
    </div>
    <WeatherData data={data} />
  </div>

export default Current;