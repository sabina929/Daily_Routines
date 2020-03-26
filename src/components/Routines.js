import React, { Component } from 'react'
import {StyledRoutines} from '../styles/StyledRoutines'

import Routine from './Routine'
import AddRoutine from './AddRoutine'

class Routines extends Component {
    
    render() {
        const {items, item, handleChange, handleSubmit, checkToggle} = this.props;

        return (
            <StyledRoutines>
                <Routine items={items} handleChange={handleChange} handleSubmit={handleSubmit} item={item} checkToggle={checkToggle} />
                <AddRoutine/>
            </StyledRoutines>
        )
    }
}
export default Routines