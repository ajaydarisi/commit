import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline"
import { Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import EventTitle from "../../EventTitle/EventTitle"
import "./Header.css"

function Header() {
    const navigate = useNavigate()
    return (
        <div className="headerMain">
            <EventTitle  title="Gita Campus"/>
            <div className="sadhaks" onClick={() => navigate(`/sadhaks/${1}`)}>
                <PeopleOutlineIcon />

                <Typography variant="h6" component="h1">
                    Sadhaks
                </Typography>
                <div>(20 )</div>
            </div>
        </div>
    )
}

export default Header
