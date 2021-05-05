import styled from 'styled-components'

interface cssProps {
    isVisible: boolean
}

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`

export const PopupContainer = styled('div')<cssProps>`
    width:100px;
    height:100px;
    position: fixed;    
    font-family: Arial, Helvetica, sans-serif;
    z-index: 1;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    pointer-events: none;
    opacity: ${({isVisible})=>isVisible ? 1:0};
    display:flex;
    justify-content:left;
    
    p {
        display:flex;
        width: 45px;
        height: 45px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 50%;
        position: absolute;
        bottom: 85%;
        left: -15%;
        margin-left: 65px;
        align-items:center;
        justify-content:center;
        justify-items:center;
               
        &:after{
            content: "";
            position: absolute;
            top: 99%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: #555 transparent transparent transparent;
        }
    }
`

export const ButtonContainer = styled.div`
display:flex;
    width:50%;
    height:100vh;
    align-items:center;
    justify-content: center;
    button {
        width:90px;
        height:90px;
        border-radius:50%;
        box-shadow: 0 0 10px 10px rgba(0 0 0 0.1);
        img {
            width:60px;
            height:60px;
        }
        &:hover{
            background:grey;
            border-color:rgba(95,50,50, 0.8);
        }
        
    }  
`
