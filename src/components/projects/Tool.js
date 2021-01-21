import React from "react"
import styled from "styled-components"

const StyledTool = styled.div`
    padding: 0.2em 0.5em;
    margin-right: 0.3rem;
    font-size: 0.9em;
    height: 1.8em;
    border: 1px solid #171a1d;
`
export default function Tool({ tool }) {
    return <StyledTool>{tool}</StyledTool>
}
