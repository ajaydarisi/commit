import React from "react"
import { useNavigate } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    const navigate = useNavigate()
    return (
        <div className="navBar">
            <div className="logo" onClick={() => navigate("/")}>
                Commit
            </div>
        </div>
    )
}

export default Navbar
