import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbarMain">
            <Box
                sx={{
                    backgroundColor: "#F8F5EF",
                    height: "60px",
                    width: "100%",
                    padding: "10px",
                }}
            >
                <Typography variant="h4" color={"#59595B"}>
                    Commit
                </Typography>
            </Box>
        </div>
    );
}

export default Navbar;
