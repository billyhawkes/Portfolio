import React from "react"
import styled from "styled-components"

// Components //
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import HighlightedProjects from "../components/HighlightedProjects"
import Head from "../components/Head"

const StyledIndex = styled.div``

export default function Home() {
    return (
        <Layout>
            <Head title="Home" />
            <StyledIndex>
                <Hero />
                <HighlightedProjects />
            </StyledIndex>
        </Layout>
    )
}
