import styled from 'styled-components'


export const StyledRoutineItem = styled.ul`
    width: 96.6%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 5px;

    &:nth-child(n){
        background-color: #ff93a5;
    }
    &:nth-child(2n){
        background-color: #8d02e4;
    }

    .check-task{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            width: 80%;
            margin-left: 10px;

            input[type=checkbox]{
                margin-right: 10px;
                color: #f7f5ff;
                cursor: pointer;
                
            }
            label{
                color: #f7f5ff;
                font-size: 1.1rem;
                position: relative;
                margin-left: 30px;

                svg{
                    position: absolute;
                    top: 50%;
                    left: -20px;
                    transform: translate(-50%, -50%);
                    width: 16px;
                    height: 16px;
                    color: #f7f5ff;
                }
            }

            input {
                display: none;
                // visibility: hidden;
            }

    }

    .edit-remove {
        width: 56px;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
         margin-right: 3px;
         i{
            color: #f7f5ff;
            cursor: pointer;
            font-size: .95rem;

            transition: all .2s ease;

            &:active{
                transform: scale(.2);
            }
        }
        p{
            color: #f7f5ff;
            
        }
    }

`;