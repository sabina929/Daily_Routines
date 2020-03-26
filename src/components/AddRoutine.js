import React, { Component } from 'react'

import  {StyledAddRoutine} from '../styles/StyledAddRoutine'

class AddRoutine extends Component {
    render() {

        const {addRoutine} = this.props;
        return (
            <StyledAddRoutine onClick={addRoutine}>
                +
            </StyledAddRoutine>
        )
    }
}

export default AddRoutine;