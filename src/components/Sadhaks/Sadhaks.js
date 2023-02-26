import { DataGrid } from "@mui/x-data-grid"
import { useQuery } from "@tanstack/react-query"
import { getParticipantsByGroupId } from "../../apis/ApiParticipant"
import EventTitle from "../EventTitle/EventTitle"
import "./Sadhaks.css"

const Sadhaks = () => {
    const { data = [] } = useQuery(["participants"], getParticipantsByGroupId, {
        select: (data) => data.data.data,
    })
    return (
        <div style={{ height: 300, width: "100%" }}>
            <EventTitle title="Gita Campus" />
            <div className="participants">Participants</div>
            <DataGrid rows={data} columns={columns} hideFooter autoHeight />
        </div>
    )
}
export default Sadhaks
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
        field: "email",
        headerName: "email",
        width: 300,
    },
    {
        field: "mobile",
        headerName: "mobile number",
        width: 300,
    },
]
