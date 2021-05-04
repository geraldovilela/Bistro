import React, { useState, useCallback } from "react"

import { Container, ButtonContainer } from './styled';

export default function Clap() {
    const [count, setCount] = useState(0);


    const eventHandler= ()=>{
        if(count <= 49) {
            setCount(count+1)
        }
    }


    return (
        <Container>
            <ButtonContainer>
                <button onClick={eventHandler}>Clap</button>
            </ButtonContainer>
        </Container>
    )

}