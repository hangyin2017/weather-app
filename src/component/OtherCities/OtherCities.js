import React from 'react';
import styles from './OtherCities.module.scss';
import City from './components/City';

const OtherCities = () =>
  <div className={styles.OtherCities}>
    <h4>Other Cities</h4>
    <City />
  </div>

export default OtherCities;