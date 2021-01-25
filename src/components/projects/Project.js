import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import Links from "./Links"
import Tools from "./Tools"

const StyledProject = styled.div`
    display: flex;
    border: 3px solid white;
    border-radius: 4px;
    margin-top: 2rem;
    background-color: #343a41;
`
const ProjectImage = styled.div`
    flex: 1;
    border-right: 2px solid white;
`
const ProjectContent = styled.div`
    color: #94a4b4;
    flex: 3;
    padding: 1rem;

    h3 {
        font-size: 1.6rem;
    }
    p {
        margin-top: 1rem;
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
