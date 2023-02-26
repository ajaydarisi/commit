import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React, { useState } from "react";
import EventBody from "../EventBody/EventBody";
import EventTitle from "../EventTitle/EventTitle";

export default function MaterialUIPickers() {
    const [value, setValue] = useState(dayjs(new Date().toISOString()));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const forApi = value.$D + "-" + value.$M + "-" + value.$y;
    console.log(forApi, "date ");

    return (
        <div>
            <EventTitle title="Gita Campus" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    label="Date"
                    inputFormat="DD-MM-YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <EventBody />
        </div>
    );
}
