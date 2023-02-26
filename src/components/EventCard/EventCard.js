import React from "react";
import { useNavigate } from "react-router-dom";
import Image1 from "../../assets/SudarshanKriya.jpg";
import "./EventCard.css";

function EventCard({ cardData }) {
    const navigate = useNavigate();
    console.log("card data i s", cardData);
    const data = {
        title: "title",
        time: "time - time",
        attended: 50,
    };
    return (
        <div>
            <div className="card">
                <img src={Image1} alt="evet Image" className="cardImage" />
                <div className="cardContent">
                    <div className="title">{data.title}</div>
                    <div className="textMedium">{data.time}</div>
                    <div className="textMedium">attended : {data.attended}</div>
                    <button className="PrimaryBtn" onClick={() => navigate(`/events/${cardData?.id}`)}>
                        View
                    </button>
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
    );
}

export default EventCard;
