import React from 'react';
import styles from './OtherInfo.module.scss';

const OtherInfo = ({ data }) => (
  <div className={styles.OtherInfo}>
    <div className={styles.humidity}>
      <h4>HUMIDITY</h4>
      <p>{data.humidity} %</p>
    </div>
    <div className={styles.wind}>
      <h4>WIND</h4>
      <p>{data.wind} km/h</p>
    </div>
  </div>
)

export default OtherInfo;