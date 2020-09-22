import React, { Component } from 'react';
import styles from './scss/App.scss';
import Current from './component/Current';
import OtherCities from './component/OtherCities';
import Forecast from './component/Forecast';

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
    const baseURL = 'https://api.openweathermap.org/data/2.5';
    const key = '216d2848c9468ebc32e6b1975c3ebc54';
    const weatherURL = `/weather?id=${this.CITIES[0].id}&appid=${key}`;
    const weathers = await fetch(baseURL + weatherURL).then(res => res.json());
    // console.log(weathers);
    // this.setState({
    //   weathers: weathers,
    // });
  }

  async getWeathers() {
    this.setState({
      loading: true,
    })
    const baseURL = 'https://api.openweathermap.org/data/2.5';
    const key = '216d2848c9468ebc32e6b1975c3ebc54';
    const ids = this.CITIES.map((city) => city.id);
    const weathersURL = `/group?id=${ids.join(',')}&units=metric&appid=${key}`;
    const weathers = await fetch(baseURL + weathersURL).then(res => res.json());
    this.setState({
      weathers: weathers.list,
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