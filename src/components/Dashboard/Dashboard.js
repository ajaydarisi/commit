import React from "react"
import EventSection from "../EventSection/EventSection"
import "./Dashboard.css"
import Navbar from "./Navbar/Navbar"

function Dashboard() {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>

            <div className="mainBody">
                <EventSection />
            </div>
        </div>
    )
}

export default Dashboard
