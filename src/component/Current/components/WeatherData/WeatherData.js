import React from 'react';
import styles from './WeatherData.module.scss';
import MajorInfo from './components/MajorInfo';
import OtherInfo from './components/OtherInfo';

const WeatherData = ({ data }) => (
  <div className={styles.WeatherData}>
    <MajorInfo data={data} />
    <OtherInfo data={data} />
  </div>
)

export default WeatherData;