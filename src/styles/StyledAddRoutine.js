import styled from 'styled-components'

export const StyledAddRoutine = styled.div`
cursor: pointer;
width: 36px;
height: 36px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: -290px;
margin-left: 10px;
background-color: rgb(116, 54, 223);
box-shadow:0 1px 16px 0px rgba(116, 54, 223, .2);
border-radius: 6px;
transition: all .1s ease;
color: #f7f5ff;
font-size: 1.8rem;
// user-event: none;
// pointer-event: none;
&:active{
    transform: scale(.8);
}



`;