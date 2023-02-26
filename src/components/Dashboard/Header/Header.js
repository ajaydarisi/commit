import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const navigate = useNavigate();
    return (
        <div className="headerMain">
            <div className="headerTitle">
                <Box
                    sx={{
                        backgroundColor: "#7677F4",
                        height: "40px",
                        width: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                />
                <Typography variant="h6" component="h1">
                    Gita Campus
                </Typography>
            </div>

            <div className="sadhaks" onClick={() => navigate("/sadhaks")}>
                <PeopleOutlineIcon />

                <Typography variant="h6" component="h1">
                    Sadhaks
                </Typography>
                <div>(20 )</div>
            </div>
        </div>
    );
}

export default Header;
