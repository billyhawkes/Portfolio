import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Components //
import Project from "./Project"
import styled from "styled-components"

const StyledHighlightedProjects = styled.div`
    display: flex;
    flex-direction: column;
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
                    }
                }
            }
        }
    `)
    return (
        <StyledHighlightedProjects>
            <h2>Highlighted Projects</h2>
            {data.allContentfulProject.edges.map(edge => {
                return (
                    <Project
                        name={edge.node.name}
                        stack={edge.node.stack}
                        description={edge.node.description.description}
                        preview={edge.node.preview}
                        github={edge.node.github}
                    />
                )
            })}
        </StyledHighlightedProjects>
    )
}
