import React from "react"
import styled from "styled-components"

// Components //
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import HighlightedProjects from "../components/HighlightedProjects"

const StyledIndex = styled.div``

export default function Home() {
    return (
        <Layout>
            <StyledIndex>
                <Hero />
                <HighlightedProjects />
            </StyledIndex>
        </Layout>
    )
}
