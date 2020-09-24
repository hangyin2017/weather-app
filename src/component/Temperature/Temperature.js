import React from 'react';

const Temperature = ({
  value,
  precision = 0,
  className,
  unit = '',
}) => (
  <span className={className}>
    {parseFloat(value).toFixed(precision)}
    <span>&#176;{unit}</span>
  </span>
)

export default Temperature;