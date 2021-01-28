import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Project from "../components/projects/Project"

import Layout from "../components/Layout"
import Head from "../components/Head"

const StyledProjects = styled.div`
    width: 75%;
    margin: auto;
`

export default function Projects() {
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
        <Layout>
            <Head title="Projects" />
            <StyledProjects>
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
            </StyledProjects>
        </Layout>
    )
}
