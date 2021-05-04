import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`

export const ButtonContainer = styled.div`
display:flex;
    width:50%;
    height:100vh;
    align-items:center;
    justify-content: center;
    button {
        width:60px;
        height:60px;
        border-radius:50%;
        &:hover{
            background:grey;
            border-color:rgba(95,50,50, 0.8);
        }
    }  
`
