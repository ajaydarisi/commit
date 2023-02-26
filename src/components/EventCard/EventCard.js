import Button from "@mui/material/Button"
import React from "react"
import ImageOne from "../../assets/SudarshanKriya.jpg"
import "./EventCard.css"

function EventCard() {
    return (
        <div className="card">
            <img src={ImageOne} alt="evet Image" />
            <div className="cardContent">
                <div className="title">Event title</div>
                <div className="time">Event timings</div>
                <div className="text">Event Attendance</div>
                <Button variant="contained">View more</Button>
            </div>
        </div>
    )
}

export default EventCard
