import React from 'react';
import styles from './City.module.scss';

const City = ({ data }) =>
  <button className={styles.City}>
    <div className={styles.name}>{data.city}</div>
    <div className={styles.temperature}>{data.temperature} <span>&nbsp;°C</span></div>
    <div className={styles.icon}>
      <img src="http://openweathermap.org/img/wn/01d.png" />
    </div>
  </button>

export default City;