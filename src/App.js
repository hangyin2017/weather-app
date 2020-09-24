import React from 'react';
import styles from './App.module.scss';
import Current from './component/Current';
import OtherCities from './component/OtherCities';
import Forecast from './component/Forecast';
import OpenWeatherMap from './utils/OpenWeatherMap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.CITIES = [{
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

    const DEFAULT_CITY = this.CITIES[0];

    // data = {
    //   weather: [
    //     {
    //       id: 802,
    //       main: "Clouds",
    //       description: "scattered clouds",
    //       icon: "03d"
    //     }
    //   ],
    //   main: {
    //     temp: 17.87,
    //     humidity: 48
    //   },
    //   wind: {
    //     speed: 11.3,
    //   },
    //   id: 2158177,
    //   name: "Melbourne",
    // }

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
    if (this.state.currentCity !== prevState.currentCity)
      this.getWeather();
  }

  async updateAll() {
    this.setState({
      loading: true,
    })
    await this.getWeathers();
    await this.getForecast();
    this.setState({
      loading: false,
    });
  }

  async getForecast() {
    const forecast = await OpenWeatherMap('forecast', this.state.currentCity.id);
    // const currentCityIndex = this.state.forecasts.findIndex((item) => item.city.id === this.state.currentCity.id);
    // if (currentCityIndex) return;
    this.setState({
      forecasts: [...this.state.forecasts, forecast],
    });
  }

  async getWeather() {
    const weather = await OpenWeatherMap('weather', this.state.currentCity.id);
    const newWeathers = [...this.state.weathers];
    const currentCityIndex = newWeathers.findIndex((item) => item.name === this.state.currentCity.name);
    newWeathers[currentCityIndex] = weather;
    this.setState({
      weathers: newWeathers,
    });
  }

  async getWeathers() {
    const ids = this.CITIES.map((city) => city.id);
    const { list } = await OpenWeatherMap('group', ids.join(','));
    this.setState({
      weathers: list,
    });
  }

  setCurrentCity(city) {
    this.setState({ currentCity: city });
  }

  render() {
    const { currentCity, weathers, forecasts, loading } = this.state;
    const currentCityIndex = weathers.findIndex((item) => item.name === currentCity.name);
    const otherCitesData = [...weathers];
    const [currentCityData] = otherCitesData.splice(currentCityIndex, 1);
    const forecastData = forecasts.find((item) => item.city.name === currentCity.name);
    return (
      <div className={styles.app}>
        <div className={styles.container}>
          {loading ? (
            <div className={styles.loading}>Loading...</div>
          ) : (
            <React.Fragment>
              <Current data={currentCityData} />
              <div className={styles.bottom}>
                <Forecast data={forecastData} />
                <OtherCities
                  data={otherCitesData}
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