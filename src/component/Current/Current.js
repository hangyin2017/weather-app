import React from 'react';
import styles from './Current.module.scss';
import Loading from '../Loading';
import WeatherData from './components/WeatherData';
import BasicInfo from './components/BasicInfo';
import { getWeather } from '../../apis/openWeatherMap';

class Current extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.updateData();
  }

  componentDidUpdate(prevProps) {
    const { city, shouldUpdate } = this.props;
    if(city !== prevProps.city || shouldUpdate > prevProps.shouldUpdate) {
      this.updateData();
    }
  }
  
  async updateData() {
    this.setState({
      loading: true,
    });

    const data = await getWeather(this.props.city.id);

    this.setState({
      data,
      loading: false,
    });
  }

  render() {
    const { data, loading } = this.state;

    return (
      <div className={styles.current}>
      {loading ? (
        <Loading style="transparent" />
      ) : (
        <>
          <BasicInfo
            name={data.name}
            time={data.dt * 1000}
          />
          <WeatherData
            weather={data.weather}
            temperature={data.main.temp}
            humidity={data.main.humidity}
            wind={data.wind}
          />
        </>
      )}
      </div>
    )
  }
}

export default Current;