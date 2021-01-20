import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

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
    return (
        <Layout>
            <StyledIndex>
                <h1>Billy Hawkes</h1>
                <h2>Web Developer</h2>
            </StyledIndex>
        </Layout>
    )
}
