import React from 'react';
import styles from './MajorInfo.module.scss';
import Temperature from '../../../../../Temperature';

const MajorInfo = ({ weather, temperature }) => (
  <div className={styles.majorInfo}>
    <Temperature
      className={styles.temperature}
      value={temperature}
      precision={1}
      unit={'C'}
    />
    <div className={styles.weather}>{weather}</div>
  </div>
)

export default MajorInfo;