import React from 'react';
import styles from './Forecast.module.scss';
import DayForecast from './components/DayForecast';

const Forecast = ({ data }) => {
  const dayForcasts = [];

  if(!!data) {
    for(let i = 0; i < 5; i++) {
      const dayForcast = data.list[7 + i * 8];
      const { main: { temp }, weather, dt } = dayForcast;
      dayForcasts.push(
        <DayForecast
          key={dt}
          time={dt}
          temperature={temp}
          weather={weather}
        />
      );
    };
  }

  return (
    <section className={styles.forecast}>
      {!data ? (
        <div className={styles.loading}>loading...</div>
      ) : (
        <React.Fragment>
          <h4 className={styles.header}>Forecast</h4>
          <div className={styles.dayForecasts}>
            {dayForcasts}
          </div>
        </React.Fragment>
      )}
    </section>
  )
}

export default Forecast;