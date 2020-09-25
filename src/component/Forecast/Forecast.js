import React from 'react';
import styles from './Forecast.module.scss';
import DayForecast from './components/DayForecast';
import OpenWeatherMap from '../../utils/OpenWeatherMap';

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.OPTIONS = {
      displayDays: 5,
      dataDays: 5,
    }

    this.state = {
      data: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.getForecast();
  }

  componentDidUpdate(prevProps) {
    if(this.props.city !== prevProps.city) {
      this.getForecast();
    }
  }

  async getForecast() {
    const { data } = this.state;
    const { city } = this.props;
    
    if(data.find((item) => item.city.name === city.name))
      return;

    this.setState({
      loading: true,
    })

    const forecast = await OpenWeatherMap('forecast', city.id);

    this.setState({
      data: [...this.state.data, forecast],
      loading: false,
    });
  }

  createDayForecasts() {
    const dayForcasts = [];
    const { data } = this.state;
    const { city } = this.props;
    const { displayDays, dataDays } = this.OPTIONS;

    const currentForecast = data.find((item) => item.city.name === city.name);

    if(!currentForecast) return null;

    const increment = currentForecast.list.length / dataDays;

    for(let i = 0; i < displayDays; i++) {
      const { main: { temp }, weather, dt } = currentForecast.list[i * increment];
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