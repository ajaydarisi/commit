import { useQuery } from "@tanstack/react-query"
import React from "react"
import { getEventsByGroupId } from "../../apis/ApiEvent"
import Header from "../Dashboard/Header/Header"
import EventCard from "../EventCard/EventCard"
import "./EventSection.css"
function EventSection() {
    const { data = [] } = useQuery(["events"], getEventsByGroupId, {
        select: (data) => data.data.data,
    })
    console.log("data is ", data)
  
    return (
        <div>
            <Header />
            <div className="cardsViewSection">
                {data?.map((card, index) => {
                    return <EventCard cardData={card} key={index} />
                })}
            </div>
        </div>
    )
}

export default EventSection
