import React, { Component } from 'react';

import Header from './Header';
import Items from "./Items";
import AddItemForm from "./AddItemForm"
import './App.css';

class App extends Component {
  state = {
    items: [],
  }
  prevItemId = 0

  handleRemoveItem = (id) => {
    this.setState( prevState => {
      return {
        items: prevState.items.filter(p => p.id !== id)
      };
    });
  }
  handleAddItem = (name) => {
    this.setState( prevState => {
      return {
        items: [
          ...prevState.items,
          {
            name,
            quantity: 1,
            id: this.prevItemId+=1,
            isCompleted : false,
          }
        ]
      };
    })
  }
  handleCompleteItem = (index, isCompleted) =>{
    this.setState( prevState => ({
      isCompleted : prevState.items[index].isCompleted = !isCompleted
    }));
  }

  handleQuantityChange = (index, delta) => {
    this.setState( prevState => ({
      quantity: prevState.items[index].quantity += delta
    }));
  
  }
  render() {
    return (
      <div className="App">
       <Header />
       <AddItemForm addItem = {this.handleAddItem}/>

       {this.state.items.map( (item, index) =>
          <Items
            name={item.name}
            quantity={item.quantity}
            id={item.id}
            key={item.id.toString()} 
            index={index}
            isCompleted = {item.isCompleted}
            changeQuantity={this.handleQuantityChange}   
            removeItem= {this.handleRemoveItem}
            completeItem = {this.handleCompleteItem}            
          />
        )}
        
      </div>
    );
  }
}

export default App;
