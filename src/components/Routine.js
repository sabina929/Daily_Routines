import React, { Component } from 'react';
import {StyledRoutine} from '../styles/StyledRoutine';

class Routine extends Component {
    render() {
        return (
            <StyledRoutine>
               <div style={{
                   backgroundColor: "rgb(116, 54, 223)",
                   width:"100%",
                   height: "60px",
                   borderTopLeftRadius: "8px",
                   borderTopRightRadius: "8px", 
                   color: "#f7f5ff",          
                   textAlign: "center",        
                   display: "flex",
                   justifyContent:"center",
                   alignItems:"center",
                   fontSize: ".8rem",
                   letterSpacing: ".8px"
               }}>
                    <h2>Routine</h2>
               </div>
            </StyledRoutine>
        )
    }
}
export default  Routine