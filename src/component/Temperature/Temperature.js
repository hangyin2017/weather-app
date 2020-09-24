import React from 'react';

const Temperature = ({
  value,
  precision = 0,
  className,
}) => (
  <span className={className}>
    {parseFloat(value).toFixed(precision)}
    <span>&#176;</span>
  </span>
)

export default Temperature;