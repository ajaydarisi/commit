import React from "react"
import Navbar from "../Dashboard/Navbar/Navbar"
import "./PageLayout.css"

function PageLayout({ children }) {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="mainBody">{children}</div>
        </div>
    )
}

export default PageLayout
