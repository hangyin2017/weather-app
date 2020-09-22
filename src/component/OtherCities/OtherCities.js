import React from 'react';
import styles from './OtherCities.module.scss';
import City from './components/City';

const OtherCities = ({ data, onCityClick }) => (
  <section className={styles.OtherCities}>
    <h4 className={styles.header}>Other Cities</h4>
    <div className={styles.citiesList}>
      {data.map(item => (
        <City
          key={item.id}
          id={item.id}
          name={item.name}
          temperature={parseInt(item.main.temp)}
          weather={{
            icon: item.weather[0].icon,
            description: item.weather[0].description,
          }}
          onClick={onCityClick} />
      ))}
    </div>
  </section>
)

export default OtherCities;