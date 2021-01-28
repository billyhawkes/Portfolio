import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const StyledAbout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 88vh;
    margin: 2rem auto;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
    }
`
const StyledImage = styled.div`
    flex: 2;
    width: 15rem;
    img {
        border-radius: 50%;
    }
`
const StyledContent = styled.div`
    margin-left: 2rem;
    flex: 4;
    p {
        color: #94a4b4;
    }
    div {
        height: 3px;
        width: 2rem;
        background-color: white;
        margin: 1rem 0;
    }
    @media only screen and (max-width: 800px) {
        margin: 2rem 0;
        text-align: center;
        div {
            margin: 1rem auto;
        }
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
                    description
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
                    <Image
                        fluid={data.contentfulAbout.profileImage.fluid}
                        alt={data.contentfulAbout.profileImage.description}
                    />
                </StyledImage>
                <StyledContent>
                    <h2>About</h2>
                    <div />
                    <p>{data.contentfulAbout.about.about}</p>
                </StyledContent>
            </StyledAbout>
        </Layout>
    )
}
