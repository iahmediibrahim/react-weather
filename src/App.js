import React, { Component } from 'react';

import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '57c1485999d28c1c4fdbfb4449bd3c3b';
// http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {
  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: '',
  };
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
      });
    } else {
      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please enter city and country!',
      });
    }
  };
  render() {
    return (
      <div>
        <Form getWeather={this.getWeather} />
        <Weather {...this.state} />
      </div>
    );
  }
}

export default App;
