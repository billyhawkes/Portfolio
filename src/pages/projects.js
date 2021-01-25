import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"

const StyledProjects = styled.div`
    height: 1000px;
`

export default function Projects() {
    return (
        <Layout>
            <StyledProjects>Projects Page</StyledProjects>
        </Layout>
    )
}
