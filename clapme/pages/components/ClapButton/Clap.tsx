import React, { useState, useCallback, useEffect } from "react"
import axios from 'axios';
import { Container, ButtonContainer,PopupContainer } from './styled';
import clap from '../../../public/clap.svg'
import {v4 as uuid} from 'uuid';

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
    
    async function saveData(data:DataClap) {
        await axios.post('http://localhost:3333', data).then(({data})=>{
            console.log(data);
        })
    }
    
    useEffect(()=>{
    const idArtigo=uuid()
    const idUser=Math.floor(Math.random()*10)            
        
        saveData({count:count,
                 idArtigo,
                 idUser
        })  
    },[count])

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