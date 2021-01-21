import React from "react"
import "../App.css"
import styled from "styled-components"

// Components
import Header from "./Header"
import Footer from "./Footer"
import Socials from "./Socials"

const StyledLayout = styled.div`
    position: relative;
    min-height: 100vh;
`
const PageContainer = styled.div`
    padding-bottom: 8rem;
    max-width: 1366px;
    margin: auto;
`

export default function Layout({ children }) {
    return (
        <StyledLayout>
            <Header />
            <Socials />
            <PageContainer>{children}</PageContainer>
            <Footer />
        </StyledLayout>
    )
}
