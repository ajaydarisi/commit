import React from "react"
import EventSection from "../EventSection/EventSection"
import "./Dashboard.css"
import Navbar from "./Navbar/Navbar"

function Dashboard() {
    const cardData = {
        title: "Event title",
        time: "7:00 am - 8:00 am",
        attended: 20,
    }
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
