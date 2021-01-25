import React from "react"
import styled from "styled-components"

const StyledLinks = styled.div`
    margin-top: 1rem;
    a {
        margin-right: 1rem;
        background-color: #ccc;
        text-decoration: none;
        padding: 0.2rem 0.5rem;
        color: #171a1d;
        border-radius: 0.2rem;
    }
    a:hover {
        background-color: white;
    }
`

export default function Links({ github, preview }) {
    return (
        <StyledLinks>
            <a href={github}>CODE</a>
            <a href={preview}>SHOW</a>
        </StyledLinks>
    )
}
