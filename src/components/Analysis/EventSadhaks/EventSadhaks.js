import { TextField } from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import { DataGrid } from "@mui/x-data-grid"
import { useQuery } from "@tanstack/react-query"
import React from "react"
import { getParticipantsByGroupId } from "../../../apis/ApiParticipant"

const RenderAttendance = () => {
    return <TextField id="standard-basic" label="Standard" variant="standard" />
}

const EventSadhaks = () => {
    const { data = [] } = useQuery(["participants"], getParticipantsByGroupId, {
        select: (data) => data.data.data,
    })
    const label = { inputProps: { "aria-label": "Checkbox demo" } }
    const columns = [
        {
            field: "id",
            headerName: "S.no",
            width: 100,
        },
        {
            field: "name",
            headerName: "name",
            width: 300,
        },
        {
            field: "mobile",
            headerName: "mobile number",
            width: 300,
        },
        {
            field: "is_attended",
            headerName: "Is Attended",
            width: 300,
            renderCell: () => {
                return <Checkbox {...label} />
            },
        },
        {
            field: "reason",
            headerName: "Reason",
            width: 300,
            renderCell: () => {
                return <TextField id="outlined-basic" label="Reason" variant="outlined" />
            },
        },
    ]

    console.log("sadhaks data is", data)
    return (
        <div style={{ height: 300, width: "100%" }}>
            <DataGrid rows={data} columns={columns} hideFooter autoHeight />
        </div>
    )
}
export default EventSadhaks
