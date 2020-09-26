import React from 'react';
import styles from './City.module.scss';
import Temperature from '../../../Temperature';

const City = ({
  id,
  name,
  temperature,
  weather,
  onClick
}) => (
  <button
    className={styles.city}
    onClick={(event) => {
      event.preventDefault();
      onClick({ name: name, id: id });
    }}
  >
    <div className={styles.name}>{name}</div>
    <Temperature
      className={styles.temperature}
      value={temperature}
    />
    <div className={styles.icon}>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
        alt={weather.description}  
      />
    </div>
  </button>
);

export default City;