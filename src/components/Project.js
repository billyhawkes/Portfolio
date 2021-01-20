import React from "react"
import styled from "styled-components"

const StyledProject = styled.div``

export default function Project({ name }) {
    return (
        <StyledProject>
            <h3>{name}</h3>
        </StyledProject>
    )
}
