import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import './styles/styles.css';

export class App extends Component {
  render() {
    const route = <BrowserRouter>Hello</BrowserRouter>;
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
