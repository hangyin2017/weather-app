import React from 'react';
import styles from './City.module.scss';

const City = () =>
  <div className={styles.City}>
    <div className={styles.name}>Sydney</div>
    <div className={styles.temperature}>20 <span>&nbsp;°C</span></div>
    <div className={styles.icon}>
      <img src="http://openweathermap.org/img/wn/01d.png" />
    </div>
  </div>

export default City;