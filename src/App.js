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
      title: this.state.item,
      isChecked: false
    }

    console.log(newItem);
    
    const updatedItems = [...this.state.items, newItem];
    
    this.setState({
      items: updatedItems,
      item: '',
      id: uuidv4(),
      editItem: false
    }, () => {
      console.log(this.state);
    })
    
  }
  clearList = () => {
    this.setState({
      items: []
    })
  }

checkToggle = id => {

  const selectedItem = this.state.items.find(item => item.id === id);
  console.log(selectedItem)
  
    selectedItem.isChecked = !selectedItem.isChecked;
    // console.log(selectedItem)

    this.setState({
      id,
      isChecked: selectedItem.isChecked,
    })
  
}

// editItem = id => {
//   const filteredItems = this.state.items.filter(item => item.id !== id);

//   const selectedItem = this.state.items.find(item => item.id === id);

//   this.setState({
//     items: filteredItems,
//     item: selectedItem.title,
//     id,
//     edit: true

//   })
// }

  render() {

    return (
      <>
             <h1 className="App-header">
              Daily Routines
             </h1>
             <Routines items={this.state.items} handleChange={this.handleChange} handleSubmit={this.handleSubmit} item={this.state.item} checkToggle={this.checkToggle}/>
      </>

      );
  }

}



export default App;
