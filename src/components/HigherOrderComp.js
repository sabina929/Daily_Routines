import React from 'react'

const higherOrderComp = OriginalComponent => {
    class HigherOrderComp extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                items: [],
                id: uuidv4(),
                item: '',
                editItem: false
            }
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
  render() {
    return (
        <OriginalComponent handleSubmit={this.handleSubmit} items={this.state} item={this.state} />
    )}
    }

    return HigherOrderComp;
}

export default higherOrderComp

