import React from 'react';
import styles from './OtherCities.module.scss';
import City from './components/City';
import OpenWeatherMap from '../../utils/OpenWeatherMap';

class OtherCities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.getWeathers();
  }

  async getWeathers() {
    this.setState({
      loading: true,
    })

    const ids = this.props.initialCities.map((city) => city.id);
    const { list: data } = await OpenWeatherMap('group', ids.join(','));

    this.setState({
      data,
      loading: false,
    });
  }

  render() {
    const { data, loading } = this.state;
    const { currentCity, onCityClick } = this.props;

    return (
      <section className={styles.otherCities}>
        <h4 className={styles.header}>Other Cities</h4>
        {loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <div className={styles.citiesList}>
            {data.map((item) => {
              if(item.name === currentCity.name) {
                return null;
              }

              return (
                <City
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  temperature={item.main.temp}
                  weather={item.weather[0]}
                  onClick={onCityClick}
                />
              )
            })}
          </div>          
        )}
      </section>
    );
  }
}

export default OtherCities;