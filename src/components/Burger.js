import React from "react"
import styled from "styled-components"

const StyledBurger = styled.div`
    display: none;
    flex-direction: column;
    height: 1.5rem;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    div {
        background-color: white;
        width: 2rem;
        height: 0.25rem;
    }
    @media only screen and (max-width: 600px) {
        display: flex;
    }
`

export default function Burger({ open, setOpen }) {
    return (
        <StyledBurger
            onClick={() => setOpen(!open)}
            className={open ? "open" : ""}
        >
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    )
}
