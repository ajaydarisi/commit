import React from "react"
import EventCard from "../EventCard/EventCard"

function Dashboard() {
    const cardData = {
        title: "Event title",
        time: "7:00 am - 8:00 am",
        attended: 20,
    }
    return (
        <div>
            <EventCard cardData={cardData} />
        </div>
    )
}

export default Dashboard
