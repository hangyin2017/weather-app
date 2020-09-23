// import React, { Component } from 'react';
// import styles from './Current.module.scss';
// import WeatherData from './components/WeatherData';

// class Current extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: false,
//     }
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.data !== prevProps.data)
//       this.setState((prevState) => ({ loading: !prevState.loading }));
//   }

//   render() {
//     const { data: { id, name, ...weatherData } } = this.props;
//     return (
//       <div className={styles.current}>
//         {this.state.loading ? (
//           <div className={styles.loading} > Loading...</div>
//         ) : (
//             <React.Fragment>
//               <div className={styles.city}>
//                 <h2>{name}</h2>
//               </div>
//               <WeatherData data={weatherData} />
//             </React.Fragment>
//           )}
//       </div>
//     );
//   }
// }

// export default Current;


import React, { useState, useEffect } from 'react';
import styles from './Current.module.scss';
import WeatherData from './components/WeatherData';
const Current = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const { id, name, ...weatherData } = data;
  useEffect(() => {
    setLoading(!loading);
  }, [data]);

  return (
    <div className={styles.current}>
      {loading ? (
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

export default Current;