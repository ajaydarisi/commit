import React from "react"
import Navbar from "../Dashboard/Navbar/Navbar"
import "./PageLayout.css"

function PageLayout({ children }) {
    var quote = "Life gives you both positive & negative. Focus on the good & move ahead with commitment."
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <marquee behavior="" direction="" className="quote">
                {quote} -- sri sri.
            </marquee>
            <div className="mainBody">{children}</div>
        </div>
    )
}

export default PageLayout
