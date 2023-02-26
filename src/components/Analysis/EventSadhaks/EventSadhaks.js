import { Button, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventParticipantAttendence } from "../../../apis/ApiEventParticipantAttendence";

const EventSadhaks = ({ dateValue }) => {
    const { id: event_id } = useParams();
    const [customRowData, setCustomRowData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await getEventParticipantAttendence({ queryKey: [1, event_id, dateValue] });
        // console.log("data is", data.data.data);
        setCustomRowData(data.data.data.data);
    };
    // const { data } = useQuery(["event-participant-attendence", event_id, dateValue], getEventParticipantAttendence, {
    //     select: data => data.data.data,
    // });
    // const memoizedData = useMemo(() => data, [data]);

    // if (memoizedData !== customRowData) {
    //     console.log("change eee change");
    //     setCustomRowData(memoizedData);
    // }
    // console.log("custom row data  is ", customRowData);

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
            renderCell: params => {
                return <div>{params.row.Participant.name}</div>;
            },
        },
        {
            field: "mobile",
            headerName: "mobile number",
            width: 150,
            renderCell: params => {
                return <div>{params.row.Participant.mobile}</div>;
            },
        },
        {
            field: "is_attended",
            headerName: "Is Attended",
            width: 300,
            renderCell: params => {
                // console.log("porps is ", params);
                return (
                    <MyCheckbox row={params.row} setCustomRowData={setCustomRowData} customRowData={customRowData} />
                );
            },
        },
        {
            field: "reason",
            headerName: "Reason",
            width: 300,
            renderCell: params => {
                return (
                    <ReasonInputComponent
                        row={params.row}
                        setCustomRowData={setCustomRowData}
                        customRowData={customRowData}
                    />
                );
            },
        },
    ];

    return (
        <div style={{ height: 300, width: "100%" }}>
            <DataGrid rows={customRowData || []} columns={columns} hideFooter rowHeight={60} autoHeight />
            <div className="saveBtn">
                <Button variant="contained">Save</Button>
            </div>
        </div>
    );
};
export default EventSadhaks;

export const MyCheckbox = ({ customRowData = [], setCustomRowData, row }) => {
    const handleChangeCheckbox = e => {
        const x = customRowData?.map(customRow => {
            if (customRow.id == row.id) {
                return { ...customRow, is_attended: !customRow.is_attended };
            } else {
                return customRow;
            }
        });
        setCustomRowData(x);
    };
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    return <Checkbox {...label} checked={row.is_attended} onChange={handleChangeCheckbox} />;
};

export const ReasonInputComponent = ({ row, customRowData = [], setCustomRowData }) => {
    const handleChangeInput = e => {
        const x = customRowData?.map(customRow => {
            if (customRow.id == row.id) {
                return { ...customRow, reason: e.target.value };
            } else {
                return customRow;
            }
        });
        setCustomRowData(x);
    };
    return (
        <div>
            <div>
                {row.is_attended ? (
                    "-"
                ) : (
                    <TextField
                        id="outlined-basic"
                        label="Reason"
                        variant="outlined"
                        size="small"
                        style={{ marginTop: "5px" }}
                        onChange={handleChangeInput}
                    />
                )}
            </div>
        </div>
    );
};
