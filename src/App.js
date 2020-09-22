import React, { Component } from 'react';
import styles from './scss/App.scss';
import Current from './component/Current';
import OtherCities from './component/OtherCities';
import Forecast from './component/Forecast';
import OpenWeatherMap from './utils/OpenWeatherMap';

class App extends Component {
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
      currentCity: 'Melbourne',
      weathers: [],
      loading: true,
    }

    this.setCurrentCity = this.setCurrentCity.bind(this);
  }

  componentDidMount() {
    this.getWeathers();
  }

  async getWeather() {
    const weather = await OpenWeatherMap('weather', this.state.currentCity.id);
    // this.setState({
    //   weathers: weather,
    // });
  }

  async getWeathers() {
    this.setState({
      loading: true,
    })
    const ids = this.CITIES.map((city) => city.id);
    const { list } = await OpenWeatherMap('group', ids.join(','));
    this.setState({
      weathers: list,
      loading: false,
    });
  }

  setCurrentCity(city) {
    this.setState({ currentCity: city });
  }

  render() {
    const { currentCity, weathers, loading } = this.state;
    const currentCityIndex = weathers.findIndex((map) => map.name === currentCity);
    const otherCitesData = [...weathers];
    const [currentCityData] = otherCitesData.splice(currentCityIndex, 1);
    return (
      <div className="App">
        <div className="container">
          {loading ? (
            <div>Loading...</div>
          ) : (
              <React.Fragment>
                <Current data={currentCityData} />
                <div className="bottom">
                  <Forecast />
                  <OtherCities data={otherCitesData} onCityClick={this.setCurrentCity} />
                </div>
              </React.Fragment>
            )}
        </div>
      </div>
    );
  }
}

export default App;