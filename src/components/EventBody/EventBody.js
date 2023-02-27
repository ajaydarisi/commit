import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import Typography from "@mui/material/Typography"
import PropTypes from "prop-types"
import React from "react"
import { Analysis } from "../Analysis/Analysis"
import EventSadhaks from "../Analysis/EventSadhaks/EventSadhaks"
import "./EventBody.css"

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    }
}

export default function BasicTabs({ dateValue }) {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    TabIndicatorProps={{ style: { background: "var(--primaryColor)" } }}
                >
                    <Tab style={{ color: "var(--primaryColor)" }} label="Sadhaks" {...a11yProps(0)} />
                    <Tab style={{ color: "var(--primaryColor)" }} label="Analysis" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <EventSadhaks dateValue={dateValue} handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Analysis dateValue={dateValue} handleChange={handleChange} />
            </TabPanel>
        </Box>
    )
}
