import React, { Component } from 'react';
import styles from './scss/App.scss';
import Current from './component/Current';
import OtherCities from './component/OtherCities';
import Forecast from './component/Forecast';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCity: 'Melbourne',
      weatherData: [
        {
          city: 'Melbourne',
          weather: 'cloudy',
          temperature: 18.0,
          humidity: 42,
          wind: 3.6,
        },
        {
          city: 'Sydney',
          weather: 'sunny',
          temperature: 20.0,
          humidity: 25,
          wind: 3.2,
        },
        {
          city: 'Brisbane',
          weather: 'sunny',
          temperature: 23.5,
          humidity: 23,
          wind: 2.1,
        },
        {
          city: 'Perth',
          weather: 'rain',
          temperature: 11.2,
          humidity: 53,
          wind: 4.7,
        },
      ]
    }

    this.setCurrentCity = this.setCurrentCity.bind(this);
  }

  setCurrentCity(city) {
    console.log(city);
    this.setState({ currentCity: city });
  }

  render() {
    const { currentCity, weatherData } = this.state;
    const currentCityIndex = weatherData.findIndex(data => data.city === currentCity);
    const otherCitesData = [...weatherData];
    const [currentCityData] = otherCitesData.splice(currentCityIndex, 1);
    return (
      <div className="App">
        <div className="container">
          <Current data={currentCityData} />
          <div className="bottom">
            <Forecast />
            <OtherCities data={otherCitesData} onCityClick={this.setCurrentCity} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;