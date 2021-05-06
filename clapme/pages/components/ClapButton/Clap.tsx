import React, { useState, useCallback, useEffect } from "react"
import axios from 'axios';
import { Container, ButtonContainer,PopupContainer } from './styled';
import {v4 as uuid} from 'uuid';
import useDebounce from "../../Hooks/useDebounce"
import clap from '../../../public/clap.svg'


interface DataClap {
    IdUser:number;
    count: number;
    IdArtigo:string;
}

const Clap: React.FC = ()=>{
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
    const IdArtigo=uuid()
    
    const eventHandler= ()=>{
        setShow(!show)        
        if(count <= 49)
        { 
            setCount(count+1)            
        }   
    }
    
    async function saveData(data:DataClap) {
        await axios.post('http://localhost:3333/', data).then(({data})=>{
            console.log(data);
        })
    }
    const debouncedChange = useDebounce(saveData, 500)
    
    useEffect(()=>{
    
    const IdUser=Math.floor(Math.random()*10)            
        
    debouncedChange({count:count,
                 IdArtigo,
                 IdUser
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