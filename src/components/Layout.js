import React from "react"
import "../App.css"

// Components
import Header from "./Header"
import Footer from "./Footer"
import Socials from "./Socials"

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <Socials />
            {children}
            <Footer />
        </div>
    )
}
