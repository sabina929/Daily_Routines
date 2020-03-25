import styled from 'styled-components'

export const StyledRoutineList = styled.ul`
    width: 100%;
    background-color: #f7f5ff;
    width: 100%;
    height: 165px;
    margin-top: 20px;
    overflow-y: scroll;
    list-style: none;

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
