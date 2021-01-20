import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faMailchimp,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const StyledLinks = styled.div`
    position: fixed;
    left: -5.5rem;
    top: 40%;

    li {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        width: 8.5rem;
        height: 3rem;
        font-weight: bold;
        transition: all 0.18s ease-out;
    }
    li:hover {
        transform: translate(5.5rem, 0rem);
        background-color: #3f4750;
    }
`

export default function Links() {
    return (
        <StyledLinks>
            <ul>
                <a href="https://github.com/billyhawkes" target="_blank">
                    <li>
                        Github
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </li>
                </a>
                <a
                    href="https://www.linkedin.com/in/billy-hawkes-a2b9751b5/"
                    target="_blank"
                >
                    <li>
                        LinkedIn
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </li>
                </a>
                <a href="https://twitter.com/hawkes_billy" target="_blank">
                    <li>
                        Twitter <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </li>
                </a>
                <a href="mailto: billyhawkes02@gmail.com" target="_blank">
                    <li>
                        Mail
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </li>
                </a>
            </ul>
        </StyledLinks>
    )
}
