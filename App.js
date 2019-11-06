import React, {Component} from 'react';
import Routes from './Routes';

export default class App extends Component{
  render() {
    console.disableYellowBox = true;
    return (
      <Routes />
    );
  }
}