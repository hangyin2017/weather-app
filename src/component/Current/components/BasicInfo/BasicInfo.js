import React from 'react';
import styles from './BasicInfo.module.scss';
import { toDayTime } from '../../../../utils/parseTime';

const BasicInfo = ({
  name,
  time,
}) => (
  <div className={styles.basicInfo}>
    <div className={styles.cityName}>
      <h2>{name}</h2>
    </div>
    <div className={styles.time}>
      {toDayTime(time)}
    </div>
  </div>
);

export default BasicInfo;