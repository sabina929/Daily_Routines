import React, { Component } from 'react'
import RoutineItem from './RoutineItem'

class RoutineList extends Component {
    render() {
        return (
            <ul>
                <RoutineItem/>
            </ul>
        )
    }
}

export default RoutineList;