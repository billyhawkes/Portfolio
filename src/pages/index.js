import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Project from "../components/Project"

const StyledIndex = styled.div`
    height: 1000px;

    h1 {
        font-size: 5rem;
        text-align: center;
        margin-top: 25vh;
    }
    h2 {
        text-align: center;
        font-size: 2rem;
        color: #94a4b4;
    }
`

export default function Home() {
    const data = useStaticQuery(graphql`
        query {
            allContentfulProject {
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
    console.dir(data.allContentfulProject.edges[0])
    return (
        <Layout>
            <StyledIndex>
                <h1>Billy Hawkes</h1>
                <h2>Web Developer</h2>
                {data.allContentfulProject.edges.map(edge => {
                    return <Project name={edge.node.name} />
                })}
            </StyledIndex>
        </Layout>
    )
}
