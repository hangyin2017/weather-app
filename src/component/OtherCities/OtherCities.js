import React from 'react';
import styles from './OtherCities.module.scss';
import Loading from '../Loading';
import City from './components/City';
import { getWeathers } from '../../apis/OpenWeatherMap';

class OtherCities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.updateData();
  }

  async updateData() {
    this.setState({
      loading: true,
    });

    const ids = this.props.initialCities.map((city) => city.id);
    const { list: data } = await getWeathers(ids);

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
          <Loading />
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