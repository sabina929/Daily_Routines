import React, { Component } from 'react'
import {StyledRoutineInput} from '../styles/StyledRoutineInput'

class RoutineInput extends Component {
    render() {
        return (
            <StyledRoutineInput>
                <input type="text" placeholder="enter smth..." name="task" required></input>
                <div className="add-uncheck">
                    <div className="add-button">
                        <input type="submit" value="+"></input>
                    </div>
                    <div className="uncheck-button">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                </div>
            </StyledRoutineInput>
        )
    }
}

export default RoutineInput;