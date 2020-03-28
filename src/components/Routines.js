import React, { Component } from 'react'
import {StyledRoutines} from '../styles/StyledRoutines'

import Routine from './Routine'
import AddRoutine from './AddRoutine'

class Routines extends Component {
    
    render() {
        const {addRoutine, routines } = this.props;

        return (
            <>
            <StyledRoutines>
                {
                    routines.map(routine => {
                        return(

                            <Routine key={routine.id} name={routine.name} content={routine.content}/>
                        )
                    })
                }
                {/* <Routine/> */}
                
            </StyledRoutines>
            <AddRoutine addRoutine={addRoutine}/>
            </>
        )
    }
}
export default Routines