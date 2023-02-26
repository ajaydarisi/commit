import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getEventsByGroupId } from "../../apis/ApiEvent";
import EventCard from "../EventCard/EventCard";

function Dashboard() {
    const cardData = {
        title: "Event title",
        time: "7:00 am - 8:00 am",
        attended: 20,
    };
    const { data } = useQuery(["events"], getEventsByGroupId, {
        select: data => data.data.data,
    });
    console.log("data is ", data);
    return (
        <div>
            <EventCard cardData={cardData} />
        </div>
    );
}

export default Dashboard;
