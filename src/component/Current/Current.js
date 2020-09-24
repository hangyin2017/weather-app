import React, { Component } from 'react';
import styles from './Current.module.scss';
import WeatherData from './components/WeatherData';

class Current extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data)
      this.setState((prevState) => ({ loading: !prevState.loading }));
  }

  render() {
    const { data: { id, name, ...weatherData } } = this.props;
    return (
      <div className={styles.current}>
        {this.state.loading ? (
          <div className={styles.loading} > Loading...</div>
        ) : (
            <React.Fragment>
              <div className={styles.city}>
                <h2>{name}</h2>
              </div>
              <WeatherData data={weatherData} />
            </React.Fragment>
          )}
      </div>
    );
  }
}

export default Current;