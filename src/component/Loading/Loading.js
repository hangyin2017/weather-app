import React from 'react';
import styles from './Loading.module.scss'

const Loading = ({ style = "white" }) => (
  <div className={`${styles.loading} ${styles[style]}`}>Loading...</div>
)

export default Loading;