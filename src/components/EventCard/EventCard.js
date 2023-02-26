import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getEventsByGroupId } from "../../apis/ApiEvent";
import "./EventCard.css";

function EventCard({ cardData }) {
    const { data = [] } = useQuery(["events"], getEventsByGroupId, {
        select: (data) => data.data.data,
    });
    console.log("data is ", data);
    return (
        <div>
            {data?.map((card, index) => {
                return (
                    <div key={index} className="card">
                        <img src={cardData.image} alt="evet Image" />
                        <div className="cardContent">
                            <div className="title">{card.name}</div>
                            <div className="textMedium">Time: {card.event_time}</div>
                            <div className="textMedium">Attended : {cardData.attended}</div>
                            <Button variant="contained" style={{ marginTop: "20px" }}>
                                View more
                                <KeyboardArrowRightIcon />
                            </Button>
                        </div>
                    </div>
                );
            })}
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
        </div>
    );
}

export default EventCard;
