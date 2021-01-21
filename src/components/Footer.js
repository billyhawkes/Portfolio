import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #171a1d;
    padding: 2rem 3rem;

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
