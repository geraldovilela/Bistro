import React, { useState, useCallback, useEffect } from "react"
import axios from 'axios';
import { Container, ButtonContainer,PopupContainer } from './styled';
import clap from '../../../public/clap.svg'

interface DataClap {
    idUser:number;
    count: number;
    idArtigo:string;
}

const Clap: React.FC = ()=>{
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
  
    const eventHandler= ()=>{
        setShow(!show)        
        if(count <= 49)
        { 
        setCount(count+1)            
        }   
    }

    async function SaveData(data:DataClap) {
        const response = await axios.post('localhost:3000', data)
    }


    return (
        <Container>
            <PopupContainer isVisible={show}>
                <p>{ `+ ${count}`}</p>
            </PopupContainer>
            <ButtonContainer>
                <button onClick={eventHandler}>
                    <img src={clap}></img>
                </button>
            </ButtonContainer>
        </Container>
    )

}
export default Clap;