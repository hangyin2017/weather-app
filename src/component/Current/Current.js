import React from 'react';
import styles from './Current.module.scss';
import MajorInfo from './components/MajorInfo';
import OtherInfo from './components/OtherInfo';
import OpenWeatherMap from '../../utils/OpenWeatherMap';
import {toDayTime} from '../../utils/ParseTime';

class Current extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getWeather();
  }

  componentDidUpdate(prevProps) {
    if(this.props.city !== prevProps.city)
      this.getWeather();
  }
  
  async getWeather() {
    this.setState({
      loading: true,
    });

    const weather = await OpenWeatherMap('weather', this.props.city.id);

    this.setState({
      data: weather,
      loading: false,
    });
  }

  render() {
    const { data, loading } = this.state;

    return (
      <div className={styles.current}>
      {loading ? (
        <div className={styles.loading}> Loading...</div>
      ) : (
        <React.Fragment>
          <div className={styles.basicInfo}>
            <div className={styles.cityName}>
              <h2>{data.name}</h2>
            </div>
            <div className={styles.time}>
              {toDayTime(data.dt * 1000)}
            </div>
          </div>
          <div className={styles.weatherData}>
            <MajorInfo weather={data.weather} temperature={data.main.temp} />
            <OtherInfo humidity={data.main.humidity} wind={data.wind} />
          </div>
        </React.Fragment>
      )}
      </div>
    )
  }
}

export default Current;