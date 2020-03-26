import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Routines from './components/Routines'


class App extends Component {
  state = {
    routines:[],
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false
  }

  addRoutine = () => {

    const newRoutine = {
      id: uuidv4(),
      name: "Routine"
    }

    const updatedRoutines = [...this.state.routines, newRoutine];

     this.setState({
      routines:updatedRoutines
    }, () => {
      console.log(this.state);
    })
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

    // console.log(newItem);
    
    const updatedItems = [...this.state.items, newItem];
    
    // this.setState({
    //   items: updatedItems,
    //   item: '',
    //   id: uuidv4(),
    //   editItem: false
    // }, () => {
    //   console.log(this.state);
    // })


    if (!this.state.editItem) {
      this.setState(() => {
        return {
          items: updatedItems,
          item: '',
          id: uuidv4(),
          // editItem: false
        }
      }
      )
    }

    if (this.state.editItem) {

      let tempItems = [...this.state.items];
      const selectedItem = this.state.items.find(item => item.id === this.state.id);
      // console.log(selectedBook)
      const index = tempItems.indexOf(selectedItem);
      // console.log(index)
      const item = tempItems[index];

      item.title = this.state.item;

      const editedItems = [...tempItems, item];

      editedItems.splice(-1, 1);

      this.setState(() => {
        return {
          books: editedItems,
          id: uuidv4(),
          item: '',
          editItem: false
        }
      }, () => {
        console.log(this.state);
      }
      )
    }
    
  }
  clearList = () => {
    this.setState({
      items: []
    })
  }

checkToggle = id => {
  let tempItems = [...this.state.items];
  const selectedItem = this.state.items.find(item => item.id === id);
  // console.log(selectedItem)
  const index = tempItems.indexOf(selectedItem);
      // console.log(index)
  const item = tempItems[index];

  item.isChecked = !item.isChecked;
  // console.log(selectedItem)
  const tempItems2 = [...tempItems, item];

  tempItems2.splice(-1, 1);

  this.setState({
    items: tempItems2
  })
}

editItem = id => {
  // const filteredItems = this.state.items.filter(item => item.id !== id);
  const selectedItem = this.state.items.find(item => item.id === id);

  if(!this.state.editItem) {
    this.setState({
      id,
      item: selectedItem.title,
      editItem: true
    })
    
  } else if(this.state.editItem) {
      this.setState({
        id: uuidv4(),
        item: '',
        editItem: false
      })

  }
}
removeItem = id => {
  const filteredItems = this.state.items.filter(item => item.id !== id);

  this.setState({
    items: filteredItems,
    item: '',
    id: uuidv4(),
    editItem: false
  })
}

unCheckAll = () => {
  // console.log(this.state.items)
  const uncheckedItems = this.state.items.map(item => item.isChecked = false);
  const tempItems = [...this.state.items]
  // console.log(uncheckedItems)
  // console.log(tempItems)
  this.setState({
    items: tempItems
  }, () => {

    // console.log(this.state)
  })
}

componentDidMount() {

  console.log(this.state)
}

  render() {

    return (
      <>
             <h1 className="App-header">
              Daily Routines
             </h1>
             <Routines routines={this.state.routines} items={this.state.items} handleChange={this.handleChange} handleSubmit={this.handleSubmit} item={this.state.item} checkToggle={this.checkToggle} removeItem={this.removeItem} editItem={this.editItem} unCheckAll={this.unCheckAll} addRoutine={this.addRoutine}/>
      </>

      );
  }

}



export default App;
