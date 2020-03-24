import React, { Component } from 'react'
import {StyledRoutines} from '../styles/StyledRoutines'

import Routine from './Routine'
import AddRoutine from './AddRoutine'

class Routines extends Component {
    render() {
        return (
            <StyledRoutines>
                <Routine/>
                <AddRoutine/>
            </StyledRoutines>
        )
    }
}
export default Routines