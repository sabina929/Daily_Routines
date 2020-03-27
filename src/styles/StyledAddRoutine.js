import styled from 'styled-components'

export const StyledAddRoutine = styled.div`
cursor: pointer;
width: 36px;
height: 36px;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 180px;
right: 36px;
// margin-bottom: -290px;
// margin-right: 10px;
background-color: #8d02e4;
box-shadow:0 1px 16px 0px rgba(116, 54, 223, .2);
border-radius: 6px;
transition: all .1s ease;
color: #f7f5ff;
font-size: 1.8rem;
// user-event: none;
// pointer-event: none;
&:hover{
    background-color: rgb(255, 147, 165);
}
&:active{
    transform: scale(.8);
}



`;