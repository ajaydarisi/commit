import Button from "@mui/material/Button"
import React from "react"
import ImageOne from "../../assets/SudarshanKriya.jpg"
import "./EventCard.css"

function EventCard({ cardData }) {
    return (
        <div className="card">
            <img src={ImageOne} alt="evet Image" />
            <div className="cardContent">
                <div className="title">{cardData.title}</div>
                <div className="textMedium">{cardData.time}</div>
                <div className="textMedium">Attended : {cardData.attended}</div>
                <Button variant="contained" style={{ marginTop: "20px" }}>
                    View more
                </Button>
            </div>
        </div>
    )
}

export default EventCard
