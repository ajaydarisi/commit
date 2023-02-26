import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import Button from "@mui/material/Button"
import React from "react"
import { useNavigate } from "react-router-dom"
import Image1 from "../../assets/SudarshanKriya.jpg"
import "./EventCard.css"

function EventCard({ cardData }) {
    const navigate = useNavigate()
    return (
        <div>
            <div className="card">
                {/* <img src={cardData.image} alt="evet Image" /> */}
                <img src={Image1} alt="evet Image" />
                <div className="cardContent">
                    <div className="title">{cardData.title}</div>
                    <div className="textMedium">{cardData.time}</div>
                    <div className="textMedium">Attended : {cardData.attended}</div>
                    <Button variant="contained" style={{ marginTop: "20px" }} onClick={() => navigate(`/events/${1}`)}>
                        View more
                        <KeyboardArrowRightIcon />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default EventCard
