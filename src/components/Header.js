import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledHeader = styled.header`
    background-color: #171a1d;
    padding: 1.5rem 2.5rem;
    nav {
        display: flex;
        justify-content: space-between;
    }
    h2 {
        font-family: "Zilla Slab Highlight", Arial, Helvetica, sans-serif;
        font-size: 2.5rem;
        font-weight: bold;
    }
    ul {
        display: flex;
        align-items: center;
    }
    li {
        display: inline-block;
        margin-left: 2rem;
    }
    a {
        font-size: 1.5rem;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <nav>
                <h2>BH</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    )
}
