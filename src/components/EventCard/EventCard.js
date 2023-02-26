import AccessTimeIcon from "@mui/icons-material/AccessTime"
import { Button } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

import "./EventCard.css"

function EventCard({ cardData }) {
    const navigate = useNavigate()
    const data = {
        title: "title",
        time: "time - time",
        attended: 50,
    }
    return (
        <div>
            <div className="card">
                <img src={cardData.image_link} alt="evet Image" className="cardImage" />
                <div className="cardContent">
                    <div className="title">{cardData.name}</div>
                    <div className="textMedium aliginVertical">
                        {" "}
                        <AccessTimeIcon /> {cardData.event_time}
                    </div>

                    <Button
                        style={{
                            backgroundColor: "var(--primaryColor)",
                            color: "white",
                            marginTop: "10px",
                        }}
                        onClick={() => navigate(`/events/${cardData?.id}`)}
                    >
                        View
                    </Button>
                </div>
            </div>

            {/* <div className="card">
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
            </div> */}
        </div>
    )
}

export default EventCard
