import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const StyledAbout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 88vh;
    margin: auto;
    p {
        margin-left: 2rem;
        flex: 4;
        color: #94a4b4;
    }
`
const StyledImage = styled.div`
    flex: 2;
    width: 15rem;
    img {
        border-radius: 50%;
    }
`
export default function About() {
    const data = useStaticQuery(graphql`
        {
            contentfulAbout {
                about {
                    about
                }
                profileImage {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <StyledAbout>
                <StyledImage>
                    <Image fluid={data.contentfulAbout.profileImage.fluid} />
                </StyledImage>
                <p>{data.contentfulAbout.about.about}</p>
            </StyledAbout>
        </Layout>
    )
}
