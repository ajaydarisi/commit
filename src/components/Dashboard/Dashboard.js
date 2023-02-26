import React from "react"
import EventSection from "../EventSection/EventSection"
import "./Dashboard.css"
import Navbar from "./Navbar/Navbar"

function Dashboard() {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="mainBody">
                <EventSection />
            </div>
        </div>
    )
}

export default Dashboard


// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import { getEventsByGroupId } from "../../apis/ApiEvent";
// import EventCard from "../EventCard/EventCard";
// import Header from "./Header/Header";
// import Navbar from "./Navbar/Navbar";

// function Dashboard() {
//     const cardData = {
//         title: "Event title",
//         time: "7:00 am - 8:00 am",
//         attended: 20,
//     };
//     const { data =[]} = useQuery(["events"], getEventsByGroupId, {
//         select: data => data.data.data,
//     });
//     console.log("data is ", data);
//     return (
//         <div>
//             <Navbar />
//             <Header />
//             <EventCard cardData={cardData} />
//         </div>
//     );
// }

// export default Dashboard;
