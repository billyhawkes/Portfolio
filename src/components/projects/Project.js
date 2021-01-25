import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import Links from "./Links"
import Tools from "./Tools"

const StyledProject = styled.div`
    display: flex;
    border-radius: 4px;
    margin-top: 2rem;
    background-color: #343a41;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`
const ProjectImage = styled.div`
    flex: 2;
`
const ProjectContent = styled.div`
    flex: 4;
    color: #94a4b4;
    padding: 1rem;

    h3 {
        font-size: 1.6rem;
    }
    p {
        margin-top: 1rem;
        height: 5rem;
        overflow-y: scroll;
    }
`

export default function Project({
    name,
    stack,
    description,
    github,
    preview,
    image,
}) {
    return (
        <StyledProject>
            <ProjectImage>
                <Image fluid={image}></Image>
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
