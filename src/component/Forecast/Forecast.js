import React from 'react';
import styles from './Forecast.module.scss';
import DayForecast from './components/DayForecast';
import OpenWeatherMap from '../../utils/OpenWeatherMap';

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.OPTIONS = {
      displayedDayCount: 5,
      dataDayCount: 5,
    }

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
  }

  async updateData() {
    const { city } = this.props;

    this.setState({
      loading: true,
    })

    let data = this.cachedData.find((item) => item.city.name === city.name);

    if(!data) {
      data = await this.getForecast();
      this.cachedData.push(data);
    }
    
    this.setState({
      data,
      loading: false,
    });
  }

  async getForecast() {
    return await OpenWeatherMap('forecast', this.props.city.id);
  }

  createDayForecasts() {
    const dayForcasts = [];
    const { data } = this.state;
    const { displayedDayCount, dataDayCount } = this.OPTIONS;

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
    };

    return dayForcasts;
  }

  render() {
    const { loading } = this.state;
    return (
      <section className={styles.forecast}>
        <h4 className={styles.header}>Forecast</h4>
        {loading ? (
          <div className={styles.loading}>loading...</div>
        ) : (
          <React.Fragment>
            <div className={styles.dayForecasts}>
              {this.createDayForecasts()}
            </div>
          </React.Fragment>
        )}
      </section>
    )
  }
}

export default Forecast;