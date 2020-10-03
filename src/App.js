import React from 'react';
import styles from './App.module.scss';
import Refresh from './component/Refresh';
import Current from './component/Current';
import OtherCities from './component/OtherCities';
import Forecast from './component/Forecast';

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
      updating: false,
    }

    this.refresh = this.refresh.bind(this);
    this.setCurrentCity = this.setCurrentCity.bind(this);
  }

  refresh(event) {
    event.preventDefault();
    this.setState({ updating: true }, () => {
      setTimeout(() => this.setState({ updating: false }), 2000);
    })
  }

  setCurrentCity(city) {
    this.setState({
      currentCity: city
    });
  }

  render() {
    const { currentCity, updating } = this.state;

    return (
      <div className={styles.app}>
        <div className={styles.container}>
          <Refresh
            onClick={this.refresh}
            style={styles.refresh}
            rotate={updating}
          />
          <Current
            city={currentCity}
            shouldUpdate={updating}
          />
          <div className={styles.bottom}>
            <Forecast
              city={currentCity}
              shouldUpdate={updating}
              options={{
                displayedDayCount: 5,
                dataDayCount: 5,
              }}
            />
            <OtherCities
              initialCities={this.INITIAL_CITIES}
              currentCity={currentCity}
              shouldUpdate={updating}
              onCityClick={this.setCurrentCity}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;