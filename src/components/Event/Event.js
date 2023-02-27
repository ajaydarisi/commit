import AccessTimeIcon from "@mui/icons-material/AccessTime"
import AcUnitIcon from "@mui/icons-material/AcUnit"
import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { getEvent } from "../../apis/ApiEvent"
import EventBody from "../EventBody/EventBody"
import EventTitle from "../EventTitle/EventTitle"
import "./Event.css"

export default function MaterialUIPickers() {
    const [dateValue, setdateValue] = useState(dayjs(new Date().toISOString()))
    const { id } = useParams()

    const { data: eventData } = useQuery(["events", id], getEvent, {
        select: (data) => data?.data?.data,
    })
    const handleChange = (newdateValue) => {
        setdateValue(newdateValue)
    }
    const dateValueForApi = dateValue.$D + "-" + (dateValue.$M + 1) + "-" + dateValue.$y

    return (
        <div>
            <div className="date">
                <EventTitle title="Gita Campus" />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        label="Date"
                        inputFormat="DD-MM-YYYY"
                        value={dateValue}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <div
                className="aliginVertical"
                style={{ fontSize: "30px", fontWeight: "bold", gap: "75px", paddingTop: "20px", paddingBottom: "20px" }}
            >
                <div className="aliginVertical" style={{ fontSize: "18px", fontWeight: "bold", gap: "10px" }}>
                    <AcUnitIcon />
                    {eventData?.name}
                </div>
                <div className="aliginVertical" style={{ fontSize: "18px", fontWeight: "bold", gap: "10px" }}>
                    {" "}
                    <AccessTimeIcon />
                    {eventData?.event_time}
                </div>
            </div>
            <EventBody dateValue={dateValueForApi} />
        </div>
    )
}
