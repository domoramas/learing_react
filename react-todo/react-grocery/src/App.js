import React, { Component } from 'react';
import './App.css';
// header info
const Header = (props) => {
  return (
    <header>
      <h1 className="title">{props.title}</h1>
      
      <span className="item-total">Items: { props.itemTotal }</span>
    </header>
  )
}
// function  to create list items 
const Item = (props) => {
  return(
    <div className="item">
      <span className="item-name">
       {props.name}
      </span>
      <Counter />
    </div>
  )
}
// class for adding and subtracting the quantity
class Counter extends Component{
  state = {
    quantity : 1
  };
  moreItem= () =>{
    this.setState( prevState => ({
      quantity: prevState.quantity + 1
    }));
  }
  lessItem= () => {
    this.setState ( prevState => ({
      quantity: prevState.quantity - 1
    }));
  }
  render(){
    return(
      <div className="counter">
        <button className="counter-action less" onClick={this.lessItem}>-</button>
        <span className="quantity">{this.state.quantity}</span>
        <button className="counter-action more" onClick={this.moreItem}>+</button>
      </div>
    )
  }
}
// home app for building
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Grocery List" itemTotal= {1} />
        <Item name="chicken" />
      </div>
    );
  }
}

export default App;
