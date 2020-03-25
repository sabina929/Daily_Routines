import React, { Component } from 'react'
import {StyledRoutines} from '../styles/StyledRoutines'

import Routine from './Routine'
import AddRoutine from './AddRoutine'

class Routines extends Component {
    
    render() {
        const {item, handleChange, handleSubmit} = this.props;

        return (
            <StyledRoutines>
                <Routine handleChange={handleChange} handleSubmit={handleSubmit} item={item}/>
                <AddRoutine/>
            </StyledRoutines>
        )
    }
}
export default Routines