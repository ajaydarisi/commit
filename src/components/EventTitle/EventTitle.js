import { Box, Typography } from "@mui/material";
import React from "react";

function EventTitle({ title }) {
    return (
        <div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <Box
                    sx={{
                        backgroundColor: "var(--primaryColor)",
                        height: "40px",
                        width: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                />
                <Typography variant="h5" component="h1">
                    {title}
                </Typography>
            </div>
        </div>
    );
}

export default EventTitle;
