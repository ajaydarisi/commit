import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getEventsByGroupId } from "../../apis/ApiEvent";
import EventCard from "../EventCard/EventCard";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";

function Dashboard() {
    const cardData = {
        title: "Event title",
        time: "7:00 am - 8:00 am",
        attended: 20,
    };
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="mainBody">
                <EventSection />
            </div>
        </div>
    );
}

export default Dashboard;
