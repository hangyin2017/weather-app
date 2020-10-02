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
      refreshCount: 0,
    }

    this.refresh = this.refresh.bind(this);
    this.setCurrentCity = this.setCurrentCity.bind(this);
  }

  refresh (event) {
    event.preventDefault();
    console.log(this.state.refreshCount);
    this.setState((prevState) => {
      return { refreshCount: prevState.refreshCount + 1 };
    })
  }

  setCurrentCity(city) {
    this.setState({
      currentCity: city
    });
  }

  render() {
    const { currentCity, refreshCount } = this.state;

    return (
      <div className={styles.app}>
        <div className={styles.container}>
          <Refresh
            onClick={this.refresh}
            style={styles.refresh}
          />
          <Current
            city={currentCity}
            refreshCount={refreshCount}
          />
          <div className={styles.bottom}>
            <Forecast
              city={currentCity}
              refreshCount={refreshCount}
              options={{
                displayedDayCount: 5,
                dataDayCount: 5,
              }}
            />
            <OtherCities
              initialCities={this.INITIAL_CITIES}
              currentCity={currentCity}
              refreshCount={refreshCount}
              onCityClick={this.setCurrentCity}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;