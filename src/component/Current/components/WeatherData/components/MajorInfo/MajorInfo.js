import React from 'react';
import styles from './MajorInfo.module.scss';

const MajorInfo = ({ weather, temperature }) => (
  <div className={styles.MajorInfo}>
    <div className={styles.temperature}>
      {temperature} <span>&nbsp;°C</span>
    </div>
    <div className={styles.weather}>{weather}</div>
  </div>
)

export default MajorInfo;