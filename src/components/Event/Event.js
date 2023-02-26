import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React, { useState } from "react";
import EventBody from "../EventBody/EventBody";
import EventTitle from "../EventTitle/EventTitle";

export default function MaterialUIPickers() {
    const [dateValue, setdateValue] = useState(dayjs(new Date().toISOString()));

    const handleChange = newdateValue => {
        setdateValue(newdateValue);
    };
    const dateValueForApi = dateValue.$D + "-" + (dateValue.$M + 1) + "-" + dateValue.$y;
    console.log(dateValueForApi, "date ");

    return (
        <div>
            <EventTitle title="Gita Campus" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    label="Date"
                    inputFormat="DD-MM-YYYY"
                    dateValue={dateValue}
                    onChange={handleChange}
                    renderInput={params => <TextField {...params} />}
                />
            </LocalizationProvider>
            <EventBody dateValue={dateValueForApi} />
        </div>
    );
}
