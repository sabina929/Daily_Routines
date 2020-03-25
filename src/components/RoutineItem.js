import React, { Component } from 'react'
import { StyledRoutineItem } from '../styles/StyledRoutineItem';

class RoutineItem extends Component {
    render() {
        return (
            <>
            <StyledRoutineItem>
                <div className="check-task">
                    <input type="checkbox" unchecked="true" name="item"/>     
                    <label htmlFor="item">walk
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" className="svg-inline--fa fa-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                             <path fill="#f8ecee" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path>
                        </svg>           
                    </label> 
                </div> 
                <div className="edit-remove">
                    <i className="fas fa-pencil-alt"></i>
                    <i className="fas fa-trash"></i>
                </div>    
            </StyledRoutineItem>
            <StyledRoutineItem>
                <div className="check-task">
                    <input type="checkbox" unchecked="true" name="item"/>     
                    <label htmlFor="item">walk
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" className="svg-inline--fa fa-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                             <path fill="#f8ecee" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path>
                        </svg>           
                    </label> 
                </div> 
                <div className="edit-remove">
                    <i className="fas fa-pencil-alt"></i>
                    <i className="fas fa-trash"></i>
                </div>    
            </StyledRoutineItem>
            <StyledRoutineItem>
                <div className="check-task">
                    <input type="checkbox" unchecked="true" name="item"/>     
                    <label htmlFor="item">walk
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" className="svg-inline--fa fa-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                             <path fill="#f8ecee" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path>
                        </svg>           
                    </label> 
                </div> 
                <div className="edit-remove">
                    <i className="fas fa-pencil-alt"></i>
                    <i className="fas fa-trash"></i>
                </div>    
            </StyledRoutineItem>
            <StyledRoutineItem>
                <div className="check-task">
                    <input type="checkbox" unchecked="true" name="item"/>     
                    <label htmlFor="item">walk
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" className="svg-inline--fa fa-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                             <path fill="#f8ecee" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path>
                        </svg>           
                    </label> 
                </div> 
                <div className="edit-remove">
                    <i className="fas fa-pencil-alt"></i>
                    <i className="fas fa-trash"></i>
                </div>    
            </StyledRoutineItem>
            </>
        )
    }
}
export default RoutineItem