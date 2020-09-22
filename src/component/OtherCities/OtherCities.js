import React from 'react';
import styles from './OtherCities.module.scss';
import City from './components/City';

const OtherCities = ({ data, onCityClick }) => (
  <section className={styles.OtherCities}>
    <h4 className={styles.header}>Other Cities</h4>
    <div className={styles.citiesList}>
      {data.map(cityData => (
        <City key={cityData.city} data={cityData} onClick={onCityClick} />
      ))}
    </div>
  </section>
)

export default OtherCities;