import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
      currentItem: {text: '', key: ''},
    }
  }
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = () =>{
    console.log("hello Add Item")
  }
  render() {
    return (
      <div className="App">
      <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
      </div>
    );
  }
}

export default App;
