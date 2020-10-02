import React from 'react';
import styles from './Forecast.module.scss';
import Loading from '../Loading';
import DayForecast from './components/DayForecast';
import { getForecast } from '../../apis/openWeatherMap';

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.cachedData = [];

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

    if(this.props.refreshCount !== prevProps.refreshCount) {
      this.cachedData = [];
      this.updateData();
    }
  }

  async updateData() {
    const { city } = this.props;

    this.setState({
      loading: true,
    })

    let data = this.cachedData.find((item) => item.city.name === city.name);

    if(!data) {
      data = await getForecast(city.id);
      this.cachedData.push(data);
    }
    
    this.setState({
      data,
      loading: false,
    });
  }

  createDayForecasts() {
    const dayForcasts = [];
    const { data } = this.state;
    const { options: { displayedDayCount, dataDayCount } } = this.props;

    const increment = data.list.length / dataDayCount;

    for(let i = 0; i < displayedDayCount; i++) {
      const { main: { temp }, weather, dt } = data.list[i * increment];
      dayForcasts.push(
        <DayForecast
          key={dt}
          time={dt}
          temperature={temp}
          weather={weather}
        />
      );
    }

    return dayForcasts;
  }

  render() {
    const { loading } = this.state;
    return (
      <section className={styles.forecast}>
        <h4 className={styles.header}>Forecast</h4>
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.dayForecasts}>
            {this.createDayForecasts()}
          </div>
        )}
      </section>
    )
  }
}

export default Forecast;