import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Head from "../components/Head"

export default function NotFound() {
    return (
        <Layout>
            <Head title="404" />
            <h1>Page Not Found</h1>
            <p>Please navigate to a page that exists</p>
            <Link to="/">Head Home</Link>
        </Layout>
    )
}
