import React, { Component } from 'react'
import {StyledRoutines} from '../styles/StyledRoutines'

import Routine from './Routine'
import AddRoutine from './AddRoutine'

class Routines extends Component {
    
    render() {
        const {items, item, handleChange, handleSubmit, checkToggle, removeItem, editItem, unCheckAll} = this.props;

        return (
            <StyledRoutines>
                <Routine items={items} handleChange={handleChange} handleSubmit={handleSubmit} item={item} checkToggle={checkToggle} removeItem={removeItem} editItem={editItem} unCheckAll={unCheckAll}/>
                <AddRoutine/>
            </StyledRoutines>
        )
    }
}
export default Routines