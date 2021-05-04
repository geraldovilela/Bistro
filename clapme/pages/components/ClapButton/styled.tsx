import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 11px 0 25px 0;
`

export const ButtonContainer = styled.div`
display:flex;
    width:50%;
    align-self:center;
    justify-content: center;
    button {
        width:60px;
        height:60px;
        border-radius:50%;
        &:hover{
            background:#911496
        }
    }  
`
