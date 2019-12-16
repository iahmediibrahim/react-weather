import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={(e) => props.getWeather(e)}>
      <input type="text" name="city" placeholder="City ..." />
      <input type="text" name="country" placeholder="Country ..." />
      <button>Get weather</button>
    </form>
  );
};
export default Form;
