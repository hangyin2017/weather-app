import React from 'react';
import styles from './OtherInfo.module.scss';

const OtherInfo = ({ humidity, wind }) => (
  <div className={styles.OtherInfo}>
    <div className={styles.humidity}>
      <h4>HUMIDITY</h4>
      <p>{humidity} %</p>
    </div>
    <div className={styles.wind}>
      <h4>WIND</h4>
      <p>{wind} km/h</p>
    </div>
  </div>
)

export default OtherInfo;