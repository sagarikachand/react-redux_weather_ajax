import React, { Component } from 'react';
import SearchBar from '../containers/serach-bar'
import WeatherList from '../containers/weather-list'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
