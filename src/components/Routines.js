import React, { Component } from 'react'
import {StyledRoutines} from '../styles/StyledRoutines'

import Routine from './Routine'
import AddRoutine from './AddRoutine'

class Routines extends Component {
    
    render() {
        const {addRoutine, routines, items, item, handleChange, handleSubmit, checkToggle, removeItem, editItem, unCheckAll} = this.props;

        return (
            <StyledRoutines>
                {/* {
                    routines.map(routine => {
                        return(

                            <Routine key={routine.id} name={routine.name}/>
                        )
                    })
                } */}
                <Routine items={items} handleChange={handleChange} handleSubmit={handleSubmit} item={item} checkToggle={checkToggle} removeItem={removeItem} editItem={editItem} unCheckAll={unCheckAll}/>
                
                <AddRoutine addRoutine={addRoutine}/>
            </StyledRoutines>
        )
    }
}
export default Routines