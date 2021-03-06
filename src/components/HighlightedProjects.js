import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Components //
import Project from "./projects/Project"
import styled from "styled-components"

const StyledHighlightedProjects = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: auto;

    h2 {
        text-align: center;
        font-size: 2rem;
    }
    @media only screen and (max-width: 800px) {
        h2 {
            font-size: 7vw;
        }
    }
`

export default function HighlightedProjects() {
    const data = useStaticQuery(graphql`
        query {
            allContentfulProject(filter: { highlighted: { eq: true } }) {
                edges {
                    node {
                        description {
                            description
                        }
                        github
                        stack
                        preview
                        name
                        highlighted
                        image {
                            description
                            fluid {
                                ...GatsbyContentfulFluid
                            }
                        }
                    }
                }
            }
        }
    `)
    return (
        <StyledHighlightedProjects>
            <h2>Highlighted Projects</h2>
            {data.allContentfulProject.edges.map((edge, index) => {
                return (
                    <Project
                        key={index}
                        name={edge.node.name}
                        stack={edge.node.stack}
                        description={edge.node.description.description}
                        preview={edge.node.preview}
                        github={edge.node.github}
                        image={edge.node.image.fluid}
                        alt={edge.node.image.description}
                    />
                )
            })}
        </StyledHighlightedProjects>
    )
}
