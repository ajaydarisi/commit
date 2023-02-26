import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./Header.css";

function Header() {
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
            <div className="sadhaks">
                {/* <Button variant="outlined" size="small"> */}
                    <PeopleOutlineIcon />
                    <Typography variant="h6" component="h1">
                        Sadhaks
                    </Typography>
                {/* </Button> */}
            </div>
        </div>
    );
}

export default Header;
