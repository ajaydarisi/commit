import React from "react"
import EventSection from "../EventSection/EventSection"
import PageLayout from "../PageLayout/PageLayout"
import "./Dashboard.css"

function Dashboard({ children }) {
    return (
        <PageLayout>
            <EventSection />
        </PageLayout>
    )
}

export default Dashboard
