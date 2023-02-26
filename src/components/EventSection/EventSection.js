import React from "react";
import image1 from "../../assets/SudarshanKriya.jpg";
import Header from "../Dashboard/Header/Header";
import EventCard from "../EventCard/EventCard";

function EventSection() {
    const cardData = {
        title: "Event title",
        time: "7:00 am - 8:00 am",
        attended: 20,
        image: image1,
    };
    return (
        <div className="eventSectionMain">
            <Header />
            <div className="cardsViewSection">
                <EventCard cardData={cardData} />
            </div>
        </div>
    );
}

export default EventSection;
