import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import Tool from "./Tool"

const StyledProject = styled.div`
    display: flex;
    border: 3px solid white;
    border-radius: 4px;
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
    .stack {
        display: flex;
        flex-wrap: wrap;
    }

    .description {
        margin-top: 1rem;
        overflow-y: scroll;
    }
    .links {
        margin-top: 1rem;
    }
    .links a {
        margin-right: 1rem;
        background-color: #ccc;
        text-decoration: none;
        padding: 0.2rem 0.5rem;
        color: #171a1d;
        border-radius: 0.2rem;
    }
    .links a:hover {
        background-color: white;
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
                <div className="stack">
                    {stack.map(tool => (
                        <Tool tool={tool}></Tool>
                    ))}
                </div>
                <p className="description">{description}</p>
                <div className="links">
                    <a href={github}>CODE</a>
                    <a href={preview}>SHOW</a>
                </div>
            </ProjectContent>
        </StyledProject>
    )
}
