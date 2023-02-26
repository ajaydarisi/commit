import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getParticipantsByGroupId } from "../../../apis/ApiParticipant";
import EventTitle from "../../EventTitle/EventTitle";
import "./Header.css";

function Header() {
    const params = useParams();
    const navigate = useNavigate();
    const { data = [] } = useQuery(["participants"], getParticipantsByGroupId, {
        select: data => data.data.data,
    });
    console.log("datai is dadkljasunillllllllllll0", data);
    return (
        <div className="headerMain">
            <EventTitle title="Gita Campus" />
            <div className="sadhaks" onClick={() => navigate(`/sadhaks`)}>
                <PeopleOutlineIcon />

                <Typography variant="h6" component="h1">
                    Sadhaks
                </Typography>
                <div className="count">{data?.length}</div>
            </div>
        </div>
    );
}

export default Header;
