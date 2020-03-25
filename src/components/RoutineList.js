import React, { Component } from 'react'
import RoutineItem from './RoutineItem'
import { StyledRoutineList } from '../styles/StyledRoutineList';

class RoutineList extends Component {
    render() {
        return (
            <StyledRoutineList>
                <RoutineItem/>
            </StyledRoutineList>
        )
    }
}

export default RoutineList;