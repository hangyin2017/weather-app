import React from 'react';
import styles from './OtherCities.module.scss';
import City from './components/City';

const OtherCities = () =>
  <section className={styles.OtherCities}>
    <h4 className={styles.header}>Other Cities</h4>
    <div className={styles.citiesList}>
      <City />
      <City />
      <City />
    </div>
  </section>

export default OtherCities;