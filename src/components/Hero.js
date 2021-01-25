import React from "react"
import styled from "styled-components"

const StyledHero = styled.section`
    height: 88vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
        font-size: 5em;
    }
    h2 {
        margin-top: 1rem;
        font-size: 2em;
        color: #94a4b4;
    }
    @media only screen and (max-width: 600px) {
        font-size: 60%;
    }
`

export default function Hero() {
    return (
        <StyledHero>
            <h1>Billy Hawkes</h1>
            <h2>Web Developer</h2>
        </StyledHero>
    )
}
