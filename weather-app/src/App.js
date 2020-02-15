import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Result from './components/Result';

const APIkey = '6aadf63437bd708e2962f98d1a0fe9ac';

export default class App extends Component {

  state = {
    value: "",
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,

  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleInputSubmit = (e) => {
    e.preventDefault()

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok){
          return response
        }
        throw Error ('Sth failed!')
      })
      .then(response => response.json())
      .then(data => {
        const date = new Date().toLocaleString()
        this.setState (state => ({
          err: false,
          date: date,
          city: state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
        }))
      })
      .catch(err => {
        console.log(err);
        this.setState(state => ({
          err: true,
          city: state.value
        }))
      })
  }

  render() {
    return (
      <div className="App">
        Weather app
        <Form
        value={this.state.value}
        change={this.handleInputChange}
        submit={this.handleInputSubmit}
         />
         <Result
        weather={this.state}
         />
      </div>
    )
  }
}
