import React, { Component } from 'react'
import {StyledRoutineInput} from '../styles/StyledRoutineInput'

class RoutineInput extends Component {
    render() {
        const {item, handleChange, handleSubmit} = this.props;
        return (
            <StyledRoutineInput onSubmit={handleSubmit}>
                <input type="text" placeholder="enter smth..." name="task" required onChange={handleChange} value={item}></input>
                <div className="add-uncheck">
                    <div className="add-button">
                        <input type="submit" value="+"></input>
                    </div>
                    <div className="uncheck-button">
                        <i className="fas fa-sync-alt"></i>
                    </div>
                </div>
            </StyledRoutineInput>
        )
    }
}

export default RoutineInput;