import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/dashboard/DashboardPage";
import EventPage from "./pages/event/EventPage";
import SadhaksPage from "./pages/sadhaks/SadhaksPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage/>} />
            <Route path="/Sadhaks" element={<SadhaksPage />} />
            <Route path="/event" element={<EventPage />} />
        </Routes>
    );
}

export default App;
