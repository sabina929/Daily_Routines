import React, { Component } from 'react'
import RoutineItem from './RoutineItem'
import { StyledRoutineList } from '../styles/StyledRoutineList';

class RoutineList extends Component {
    render() {
        const {items} = this.props;
        return (
            <StyledRoutineList>
                {/* <RoutineItem items={items}/> */}
                {
                    items.map(item => {
                        return (
                            <RoutineItem key={item.id} title={item.title}/>
                        )
                    })
                }
            </StyledRoutineList>
        )
    }
}

export default RoutineList;