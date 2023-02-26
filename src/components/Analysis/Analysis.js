import { useQuery } from "@tanstack/react-query"
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js"
import React from "react"
import { Pie } from "react-chartjs-2"
import { useParams } from "react-router-dom"
import { getEventParticipantAttendence } from "../../apis/ApiEventParticipantAttendence"
import WarnIcon from "../../assets/warnIcon.svg"
import "./Analysis.css"

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
    labels: ["Attended", "Not Attended"],
    // ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
        {
            label: "Sadhaks",
            data: [12, 3],
            backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
            borderWidth: 1,
        },
    ],
}

export function Analysis({ dateValue, handleChange }) {
    const { id: event_id } = useParams()
    const { data } = useQuery(["event-participant-attendence", event_id, dateValue], getEventParticipantAttendence, {
        select: (data) => data.data.data,
    })
    console.log("data is ", data.is_taken)

    return (
        <div className="analysisSection">
            {data.is_taken ? (
                <div className="pieChart">
                    <Pie data={data} />
                </div>
            ) : (
                <div className="warningSection">
                    <img src={WarnIcon} alt="" className="warnIcon" />
                    <div style={{ marginBottom: "10px" }}>Attendance not taken ...!</div>
                    <button
                        variant="contained"
                        onClick={() => handleChange(0, 0)}
                        className="PrimaryBtn"
                        style={{ height: "35px" }}
                    >
                        Go to sadhaks
                    </button>
                </div>
            )}
        </div>
    )
}
