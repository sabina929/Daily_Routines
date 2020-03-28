import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {StyledRoutine} from '../styles/StyledRoutine';

import RoutineInput from './RoutineInput'
import RoutineList from './RoutineList'

class Routine extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false
  }
  
  // HANDLE CHANGE
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
      }, () => {
        localStorage.setItem("localItems", JSON.stringify(this.state));
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
        // console.log(this.state);
        localStorage.setItem("localItems", JSON.stringify(this.state));
      }
      )
    }
    
  }

  // CLEAR LIST
  clearList = () => {
    this.setState({
      items: []
    })
  }

// CHECK/UNCHECK
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
  }, () => {
    localStorage.setItem("localItems", JSON.stringify(this.state));
  })
}

// EDIT ITEM
editItem = id => {
  const selectedItem = this.state.items.find(item => item.id === id);

  if(!this.state.editItem) {
    this.setState({
      id,
      item: selectedItem.title,
      editItem: true
    }, () => {
      localStorage.setItem("localItems", JSON.stringify(this.state));
    })
    
  } else if(this.state.editItem) {
      this.setState({
        id: uuidv4(),
        item: '',
        editItem: false
      },()=>{
        localStorage.setItem("localItems", JSON.stringify(this.state));
      })

  }
}

// REMOVE ITEM
removeItem = id => {
  const filteredItems = this.state.items.filter(item => item.id !== id);

  this.setState({
    items: filteredItems,
    item: '',
    id: uuidv4(),
    editItem: false
  }, () => {
    localStorage.setItem("localItems", JSON.stringify(this.state));
  })
}

// UNCHECK ALL
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
    localStorage.setItem("localItems", JSON.stringify(this.state));
  })
}

componentDidMount() {
  // console.log(this.state)
    
    // const  localItems  = JSON.parse(localStorage.localItems);

    if (localStorage.localItems) {
      this.setState(JSON.parse(localStorage.localItems));
    } 
  
}


    render() {
        // const {items, item, handleChange, handleSubmit, checkToggle, removeItem, editItem, unCheckAll} = this.props;
        return (
            <StyledRoutine>
               <div style={{
                   backgroundColor: "rgb(116, 54, 223)",
                   width:"100%",
                   height: "60px",
                   borderTopLeftRadius: "8px",
                   borderTopRightRadius: "8px", 
                   color: "#f7f5ff",          
                   textAlign: "center",        
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                   fontSize: ".8rem",
                   letterSpacing: ".8px"
               }}>
                    <h2>Routine</h2>
               </div>

               <div style={{
                    width: "100%",
                    padding: "12px"
               }}>
                    <RoutineInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} item={this.state.item} unCheckAll={this.unCheckAll}/>
                    <RoutineList items={this.state.items} checkToggle={this.checkToggle} removeItem={this.removeItem} editItem={this.editItem}/>
               </div>
                   


            </StyledRoutine>
        )
    }
}
// export default  HigherOrderComp(Routine)
export default  Routine