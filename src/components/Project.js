import React from "react"
import styled from "styled-components"

const StyledProject = styled.div`
    height: 10rem;
    border: 3px solid white;
    border-radius: 4px;
    background-color: #343a41;
`
const StyledStack = styled.div`
    display: inline-block;
    border: 2px solid black;
`

export default function Project({ name, stack, description, github, preview }) {
    return (
        <StyledProject>
            <h3>{name}</h3>
            <a href={github}>CODE</a>
            <a href={preview}>SHOW</a>
            {stack.map(tech => (
                <StyledStack>{tech}</StyledStack>
            ))}
        </StyledProject>
    )
}
