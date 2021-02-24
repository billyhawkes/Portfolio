import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Head from "../components/Head"
import styled from "styled-components"

const Styled404 = styled.div`
    margin-top: 30vh;
    text-align: center;

    a {
        color: #0645ad;
    }
    a:hover {
        text-decoration: underline;
    }
`

export default function NotFound() {
    return (
        <Layout>
            <Styled404>
                <Head title="404" />
                <h1>Page Not Found</h1>
                <p>Please navigate to a page that exists</p>
                <Link to="/">Head Home</Link>
            </Styled404>
        </Layout>
    )
}
