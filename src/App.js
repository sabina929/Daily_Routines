import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Routines from './components/Routines'

import {GlobalStyle} from './styles/GlobalStyle'

class App extends Component {
  // state = {
  //   routines:[],
  //   items: [],
  //   id: uuidv4(),
  //   item: '',
  //   editItem: false
  // }
  state = {
    routines:[],
    id: uuidv4()
    // name: "Routine",
  }

  addRoutine = () => {

    const newRoutine = {
      id: uuidv4(),
      name: "Routine",
      content: {
        items: [],
        id: uuidv4(),
        item: '',
        editItem: false
      }
    }

    const updatedRoutines = [...this.state.routines, newRoutine];

     this.setState({
      routines:updatedRoutines
    }, () => {
      console.log(this.state);
      localStorage.setItem("localRoutines", JSON.stringify(this.state));

    })
  }

  componentDidMount() {
  
      if (localStorage.localRoutines) {
        this.setState(JSON.parse(localStorage.localRoutines));
      } 
    
  }

  render() {

    return (
      <>
             <h1 className="App-header">
              Daily Routines
             </h1>
             <Routines routines={this.state.routines} addRoutine={this.addRoutine}/>
             <GlobalStyle/>
      </>

      );
  }

}



export default App;
