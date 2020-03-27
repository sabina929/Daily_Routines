import styled from 'styled-components'

export const StyledRoutines = styled.div`
    
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 100%;
    // grid-auto-flow: column dense;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
    width: 90vw;
    height: 72vh;
    overflow-x: scroll;
    // border: 3px solid rgb(116, 54, 223);
    border-radius: 5px;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #f7f5ff;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgb(116, 54, 223);
    }

`;
