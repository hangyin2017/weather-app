import React from 'react';
import styles from './Refresh.module.scss';
import refreshIcon from './assets/refresh-icon.png';

const Refresh = ({
  onClick,
  style,
  rotate,
}) => (
  <button
    className={`${styles.refresh} ${style}`}
    onClick={onClick}  
  >
    <img
      className={rotate ? styles.rotate : ""}
      src={refreshIcon}
    />
  </button>
);

export default Refresh;