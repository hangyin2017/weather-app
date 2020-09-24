import React from 'react';
import styles from './City.module.scss';

const City = ({ id, name, temperature, weather, onClick }) =>
  <button
    className={styles.city}
    onClick={(event) => {
      event.preventDefault();
      onClick({ name: name, id: id });
    }}
  >
    <div className={styles.name}>{name}</div>
    <div className={styles.temperature}>{temperature} <span>&nbsp;°C</span></div>
    <div className={styles.icon}>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} />
    </div>
  </button>

export default City;