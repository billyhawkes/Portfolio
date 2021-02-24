import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import Links from "./Links"
import Tools from "./Tools"

const StyledProject = styled.div`
    display: flex;
    border-radius: 6px;
    margin-top: 2rem;
    background-color: #343a41;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
    }
`
const ProjectImage = styled.div`
    flex: 3;
`
const ProjectContent = styled.div`
    flex: 4;
    color: #94a4b4;
    padding: 1rem;

    h3 {
        font-size: 1.6em;
    }
    p {
        margin-top: 0.8rem;
        height: 7.5rem;
        overflow-y: scroll;
    }
    @media only screen and (max-width: 800px) {
        font-size: 0.7rem;
        h3 {
            text-align: center;
        }
    }
    @media only screen and (orientation: landscape) and (max-height: 800px) {
        font-size: 0.8rem;
        p {
            height: 5.5rem;
        }
    }
    @media only screen and (min-width: 2000px) {
        p {
            height: 10rem;
        }
    }
`

export default function Project({
    name,
    stack,
    description,
    github,
    preview,
    image,
    alt,
}) {
    return (
        <StyledProject>
            <ProjectImage>
                <Image fluid={image} alt={alt}></Image>
            </ProjectImage>
            <ProjectContent>
                <h3>{name}</h3>
                <Tools stack={stack} />
                <p>{description}</p>
                <Links github={github} preview={preview} />
            </ProjectContent>
        </StyledProject>
    )
}
