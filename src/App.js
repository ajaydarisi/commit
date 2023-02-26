import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/dashboard/DashboardPage";
import EventPage from "./pages/event/EventPage";
import SadhaksPage from "./pages/sadhaks/SadhaksPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/events/:id" element={<EventPage />} />
            <Route path="/Sadhaks/:id" element={<SadhaksPage />} />
        </Routes>
    );
}

export default App;
