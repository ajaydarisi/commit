import { TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getEventParticipantAttendence } from "../../../apis/ApiEventParticipantAttendence";

const RenderAttendance = () => {
    return <TextField id="standard-basic" label="Standard" variant="standard" />;
};

const EventSadhaks = ({ dateValue }) => {
    const { id: event_id } = useParams();
    const { data } = useQuery(["event-participant-attendence", event_id, dateValue], getEventParticipantAttendence, {
        select: data => data.data.data,
    });
    console.log("data is ", data);
    return (
        <div style={{ height: 300, width: "100%" }}>
            <DataGrid rows={data?.data || []} columns={columns} hideFooter autoHeight />
        </div>
    );
};
export default EventSadhaks;

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
            return <div>helllooo</div>;
        },
    },
    {
        field: "reason",
        headerName: "Reason",
        width: 300,
    },
];
