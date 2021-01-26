import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Burger from "./Burger"

const StyledHeader = styled.header`
    background-color: #171a1d;
    padding: 1.5rem 2.5rem;
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    @media only screen and (max-width: 600px) {
        ul {
            display: none;
            position: absolute;
            flex-direction: column;
            left: 0;
            width: 100%;
            top: 6rem;
            z-index: 5;
        }
        ul li {
            margin: 0;
            padding: 0.2rem 0rem;
            width: 100%;
            text-align: center;
            background-color: #94a4b4;
        }
        div.open {
            transform: rotate(-90deg);
        }
        ul.open {
            display: flex;
        }
    }
`

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <StyledHeader>
            <nav>
                <h2>BH</h2>
                <ul className={open ? "open" : ""}>
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
                <Burger open={open} setOpen={setOpen} />
            </nav>
        </StyledHeader>
    )
}
