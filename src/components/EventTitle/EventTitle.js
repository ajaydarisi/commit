import { Box, Typography } from "@mui/material"
import React from "react"

function EventTitle({ title }) {
    return (
        <div style={{ marginTop: "10px", marginBottom: "18px", display: "flex", gap: "8px", alignItems: "center" }}>
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
            <Typography variant="h6" component="h1">
                {title}
            </Typography>
        </div>
    )
}

export default EventTitle
