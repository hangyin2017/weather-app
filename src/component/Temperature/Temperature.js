import React from 'react';

const Temperature = ({
  value,
  precision = 0,
  style,
  unit = '',
}) => (
  <span className={style}>
    {parseFloat(value).toFixed(precision)}
    <span>&#176;{unit}</span>
  </span>
);

export default Temperature;