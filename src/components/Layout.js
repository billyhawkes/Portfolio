import React from "react"
import "../App.css"

// Components
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
