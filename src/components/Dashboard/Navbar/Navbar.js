import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Navbar() {
    return (
        <div>
            <Box
                sx={{
                    backgroundColor: "#F8F5EF",
                    height: "40px",
                    width: "100%",
                    padding: "10px"
                }}
            >
                <Typography variant="h4" component="h1" color={"#59595B"}>
                    Commit
                </Typography>
            </Box>
        </div>
    );
}

export default Navbar;
