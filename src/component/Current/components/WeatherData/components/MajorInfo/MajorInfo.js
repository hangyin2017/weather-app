import React from 'react';
import styles from './MajorInfo.module.scss';

const MajorInfo = ({ data }) => (
  <div className={styles.MajorInfo}>
    <div className={styles.temperature}>
      {data.temperature} <span>&nbsp;°C</span>
    </div>
    <div className={styles.weather}>{data.weather}</div>
  </div>
)

export default MajorInfo;