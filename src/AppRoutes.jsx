
import { Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
// import EventList from "./pages/EventList";
// import CalendarView from "./pages/CalendarView";
// import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    
  );
};

export default AppRoutes;
