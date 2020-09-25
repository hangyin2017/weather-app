import React from 'react';
import styles from './App.module.scss';
import Current from './component/Current';
import OtherCities from './component/OtherCities';
import Forecast from './component/Forecast';
import OpenWeatherMap from './utils/OpenWeatherMap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.INITIAL_CITIES = [{
      name: 'Melbourne',
      id: '2158177',
    }, {
      name: 'Sydney',
      id: '2147714',
    }, {
      name: 'Brisbane',
      id: '2174003',
    }, {
      name: 'Perth',
      id: '2063523',
    }];

    const DEFAULT_CITY = this.INITIAL_CITIES[0];

    this.state = {
      currentCity: DEFAULT_CITY,
      weathers: [],
      forecasts: [],
      loading: true,
    }

    this.setCurrentCity = this.setCurrentCity.bind(this);
  }

  componentDidMount() {
    this.updateAll();
  }

  componentDidUpdate(_, prevState) {
    if (this.state.currentCity !== prevState.currentCity) {
      this.getForecast();
    }
  }

  async updateAll() {
    this.setState({
      loading: true,
    })

    await this.getForecast();

    this.setState({
      loading: false,
    });
  }

  async getForecast() {
    const { forecasts, currentCity } = this.state;

    if(forecasts.find((item) => item.city.name === currentCity.name))
      return;

    const forecast = await OpenWeatherMap('forecast', currentCity.id);

    this.setState({
      forecasts: [...this.state.forecasts, forecast],
    });
  }

  async getWeathers() {
    const ids = this.INITIAL_CITIES.map((city) => city.id);
    const { list } = await OpenWeatherMap('group', ids.join(','));

    this.setState({
      weathers: list,
    });
  }

  setCurrentCity(city) {
    this.setState({
      currentCity: city
    });
  }

  render() {
    const { currentCity, forecasts, loading } = this.state;
    const forecastData = forecasts.find((item) => item.city.name === currentCity.name);

    return (
      <div className={styles.app}>
        <div className={styles.container}>
          {loading ? (
            <div className={styles.loading}>Loading...</div>
          ) : (
            <React.Fragment>
              <Current city={currentCity} />
              <div className={styles.bottom}>
                <Forecast data={forecastData} />
                <OtherCities
                  initialCities={this.INITIAL_CITIES}
                  currentCity={currentCity}
                  onCityClick={this.setCurrentCity}
                />
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default App;