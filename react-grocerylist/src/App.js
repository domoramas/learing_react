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

  handleCompleteItem = (id) =>{
    this.setState ( prevState =>({
      isCompleted: !prevState.isCompleted
    }));
  }

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
            quantity: 0,
            id: this.prevItemId+=1,
            isCompleted : false,
          }
        ]
      };
    })
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
       {this.state.items.map( (item, index) =>
          <Items
            name={item.name}
            quantity={item.quantity}
            id={item.id}
            key={item.id.toString()} 
            index={index}
            changeQuantity={this.handleQuantityChange}   
            removeItem= {this.handleRemoveItem}
            completeItem = {this.handleCompleteItem}            
          />
        )}
        <AddItemForm addItem = {this.handleAddItem}/>
      </div>
    );
  }
}

export default App;
