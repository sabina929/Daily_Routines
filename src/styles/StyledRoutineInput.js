import styled from 'styled-components'

export const StyledRoutineInput = styled.form`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #f7f5ff;
    position: relative;

    input[type=text] {
        width: 80%;
        height: 80px;
        resize: none;
        border: none;
        border-bottom: 1px solid rgb(116, 54, 223);
        padding: 8px 6px 2px 6px;
        outline: none;
        font-size: 1.2rem;
        color: $blue;
        background-color: #f7f5ff;
        transition: all .3s ease;
        
        &:focus {
            box-shadow:0 4px 16px 0px rgba(116, 54, 223, .2);
        }
    }
    
    input::placeholder {
        opacity: .4;
        color: rgb(116, 54, 223);
    }

    .add-uncheck {
        width: 16%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .uncheck-button {
            cursor: pointer;
            width: 36px;
            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f7f5ff;
            box-shadow:0 4px 16px 0px rgba(116, 54, 223, .2);
            border-radius: 6px;
            transition: all .2s ease;
            
            &:active{
                transform: scale(.6);
            }
            i{
                color: rgb(116, 54, 223);
            }
        }

        .add-button{
            input{
                width: 36px;
                height: 36px;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #f7f5ff;
                box-shadow:0 4px 16px 0px rgba(116, 54, 223, .2);
                border-radius: 6px;
                transition: all .2s ease;
                color: rgb(116, 54, 223);
                font-size: 2rem;

                &:active{
                    transform: scale(.6);
                }
          
            }
        }
    }
`;
