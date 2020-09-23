import React, { useState, useEffect } from 'react';
import styles from './Current.module.scss';
import WeatherData from './components/WeatherData';

const Current = ({ data: { id, name, ...weatherData } }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    console.log(name);
    return setLoading(false);
  }, [id]);

  return (
    <div className={styles.current}>
      {loading ? (
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
  );
}

export default Current;