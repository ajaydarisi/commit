import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { getParticipantsByGroupId } from "../../../apis/ApiParticipant";

const EventSadhaks = () => {
    const { data = [] } = useQuery(["participants"], getParticipantsByGroupId, {
        select: (data) => data.data.data,
    });
    console.log("sadhaks data is", data);
    return (
        <div style={{ height: 300, width: "100%" }}>
            <DataGrid rows={data} columns={columns} hideFooter autoHeight />
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
    },
    {
        field: "reason",
        headerName: "Reason",
        width: 300,
    },
];
