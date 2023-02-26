import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import Button from "@mui/material/Button"
import React from "react"
import "./EventCard.css"

function EventCard({ cardData }) {
    return (
        <div className="card">
            <img src={cardData.image} alt="evet Image" />
            <div className="cardContent">
                <div className="title">{cardData.title}</div>
                <div className="textMedium">{cardData.time}</div>
                <div className="textMedium">Attended : {cardData.attended}</div>
                <Button variant="contained" style={{ marginTop: "20px" }}>
                    View more
                    <KeyboardArrowRightIcon />
                </Button>
            </div>
        </div>
    )
}

export default EventCard
