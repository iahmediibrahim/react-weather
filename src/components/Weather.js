import React from 'react';

const Weather = (props) => {
  const { temperature, city, country, humidity, description, error } = props;

  console.log(props);
  return error ? (
    <p>{error}</p>
  ) : (
    <div>
      <p>{temperature}</p>
      <p>{city}</p>
      <p>{country}</p>
      <p>{humidity}</p>
      <p>{description}</p>
    </div>
  );
};
export default Weather;
