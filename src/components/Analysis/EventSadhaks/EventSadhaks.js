import { TextField } from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import { DataGrid } from "@mui/x-data-grid"
import { useQuery } from "@tanstack/react-query"
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { getEventParticipantAttendence } from "../../../apis/ApiEventParticipantAttendence"

const EventSadhaks = ({ dateValue }) => {
    const { id: event_id } = useParams()
    const { data } = useQuery(["event-participant-attendence", event_id, dateValue], getEventParticipantAttendence, {
        select: (data) => data.data.data,
    })
    console.log("adfkajdkflajdkl data is ", data?.data)

    const columns = [
        {
            field: "id",
            headerName: "S.no",
            width: 60,
        },
        {
            field: "Participant",
            headerName: "name",
            width: 250,
            renderCell: (params) => {
                return <div>{params.row.Participant.name}</div>
            },
        },
        {
            field: "mobile",
            headerName: "mobile number",
            width: 150,
            renderCell: (params) => {
                return <div>{params.row.Participant.mobile}</div>
            },
        },
        {
            field: "is_attended",
            headerName: "Is Attended",
            width: 120,
            renderCell: (params) => {
                console.log("porps is ", params.row.is_attended)
                return <MyCheckbox checked={params.row.is_attended} />
            },
        },
        {
            field: "reason",
            headerName: "Reason",
            width: 300,
            renderCell: (params) => {
                return (
                    <div>
                        {!params.row.is_attended ? (
                            "-"
                        ) : (
                            <TextField
                                id="outlined-basic"
                                label="Reason"
                                variant="outlined"
                                size="small"
                                style={{ marginTop: "5px" }}
                            />
                        )}
                    </div>
                )
            },
        },
    ]

    return (
        <div style={{ height: 300, width: "100%" }}>
            <DataGrid rows={data?.data || []} columns={columns} hideFooter rowHeight={60} />
        </div>
    )
}
export default EventSadhaks

export const MyCheckbox = ({ checked }) => {
    const [isAttended, setAttended] = useState(checked)
    const label = { inputProps: { "aria-label": "Checkbox demo" } }
    return <Checkbox {...label} checked={isAttended} onChange={() => setAttended(!isAttended)} />
}
