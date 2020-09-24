import React from 'react';
import styles from './Current.module.scss';
import WeatherData from './components/WeatherData';

const Current = ({
  data,
}) => {
  const { id, name, ...weatherData} = data;
  return (
    <div className={styles.current}>
      {!data ? (
        <div className={styles.loading} > Loading...</div>
      ) : (
        <React.Fragment>
          <div className={styles.city}>
            <h2>{name}</h2>
          </div>
          <WeatherData data={weatherData} />
        </React.Fragment>
      )}
    </div>
  )
}

export default Current;