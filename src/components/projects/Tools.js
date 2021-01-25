import React from "react"
import styled from "styled-components"

const StyledTools = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    div {
        padding: 0.2em 0.5em;
        margin-right: 0.3rem;
        font-size: 0.9em;
        font-weight: bold;
        height: 1.8em;
        border: 1px solid #171a1d;
    }
`

export default function Tools({ stack }) {
    return (
        <StyledTools>
            {stack.map((tool, index) => (
                <div key={index}>{tool}</div>
            ))}
        </StyledTools>
    )
}
