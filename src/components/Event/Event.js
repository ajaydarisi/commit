import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import dayjs from "dayjs"
import React, { useState } from "react"
import EventTitle from "../EventTitle/EventTitle"

export default function MaterialUIPickers() {
    const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"))

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <EventTitle title="Gita Campus" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    label="Date"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    )
}
