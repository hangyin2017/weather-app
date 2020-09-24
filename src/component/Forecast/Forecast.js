import React from 'react';
import styles from './Forecast.module.scss';
import DayForecast from './components/DayForecast';

const Forecast = ({ data: { list } }) => {

  const dayForcasts = [];
  for(let i = 0; i < 5; i++) {
    const dayForcast = list[i * 8];
    const { main: { temp }, weather, dt, dt_txt } = dayForcast;
    dayForcasts.push(
      <DayForecast
        key={dt}
        day={dt_txt.slice(8,14)}
        temperature={temp}
        weather={weather}
      />
    );
  };

  return (
    <section className={styles.forecast}>
      <h4 className={styles.header}>Forecast</h4>
      <div className={styles.dayForecasts}>
        {dayForcasts}
      </div>
    </section>
  )
}

export default Forecast;