import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    background-color: #171a1d;
    padding: 2rem 3rem;
    bottom: 0;

    a {
        text-decoration: underline;
    }
`

export default function Footer() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    email
                }
            }
        }
    `)

    return (
        <StyledFooter>
            <p>© 2020 Billy Hawkes. All Rights Reserved.</p>
            <a href={`mailto: ${data.site.siteMetadata.email}`}>
                Email: {data.site.siteMetadata.email}
            </a>
        </StyledFooter>
    )
}
