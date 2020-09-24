import React from 'react';
import styles from './Current.module.scss';
import WeatherData from './components/WeatherData';
import {toDayTime} from '../../utils/ParseTime';

const Current = ({
  name,
  data,
}) => {
  return (
    <div className={styles.current}>
      {!data ? (
        <div className={styles.loading}> Loading...</div>
      ) : (
        <React.Fragment>
          <div className={styles.basicInfo}>
            <div className={styles.cityName}>
              <h2>{name}</h2>
            </div>
            <div className={styles.time}>
              {toDayTime(data.list[0].dt * 1000)}
            </div>
          </div>
          <WeatherData data={data.list[0]} />
        </React.Fragment>
      )}
    </div>
  )
}

export default Current;