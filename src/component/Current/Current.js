import React from 'react';
import styles from './Current.module.scss';
import WeatherData from './components/WeatherData';
import BasicInfo from './components/BasicInfo';
import getWeather from '../../apis/getWeather';

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
    if(this.props.city !== prevProps.city) {
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
        <div className={styles.loading}>Loading...</div>
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      )}
      </div>
    )
  }
}

export default Current;