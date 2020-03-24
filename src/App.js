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




  render() {

    return (
      <>
             <h1 className="App-header">
              Daily Routines
             </h1>
             <Routines/>
      </>

      );
  }

}



export default App;
