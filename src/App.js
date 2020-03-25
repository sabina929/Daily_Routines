import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Routines from './components/Routines'


class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false
  }


  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }

// ADD ITEM TO THE LIST
handleSubmit = e => {
  e.preventDefault();

  const newItem = {
    id: this.state.id,
    title: this.state.item
  }

  console.log(newItem);
  
  const updatedItems = [...this.state.items, newItem];
  
  this.setState({
    items: updatedItems,
    item: '',
    id: uuidv4(),
    edit: false
  }, () => {
    console.log(this.state);
  })
  
}

  render() {

    return (
      <>
             <h1 className="App-header">
              Daily Routines
             </h1>
             <Routines items={this.state.items} handleChange={this.handleChange} handleSubmit={this.handleSubmit} item={this.state.item}/>
      </>

      );
  }

}



export default App;
