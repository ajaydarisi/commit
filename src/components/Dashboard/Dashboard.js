import React from "react"
import EventSection from "../EventSection/EventSection"
import "./Dashboard.css"
import Navbar from "./Navbar/Navbar"

function Dashboard() {
   
    return (
        <div className="app">
            <Navbar />
            <EventSection />
        </div>
    )
}

export default Dashboard
