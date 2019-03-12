import React, { Component } from 'react';
import Form from './Forms';
import './App.css';
import Results from './Results'


class App extends Component {
  render() {
    return (
      <div className = "container">
        <Form />
        <Results />
      </div>
    
    );
  }
}

export default App;
