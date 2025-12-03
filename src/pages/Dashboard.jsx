import { useState, useContext } from "react";
import { EventContext } from "../context/EventContext";
import DashboardStats from "../components/DashboardStats";
import Modal from "../components/Modal";
import EventForm from "../components/EventForm";

const Dashboard = () => {
  const { events } = useContext(EventContext);

  const [openModal, setOpenModal] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const totalEvents = events.length;

  const upcomingEventsList = events.filter((event) => event.date >= today);
  const upcomingEvents = upcomingEventsList.length;

  const pastEventsList = events.filter((event) => event.date < today);
  const pastEvents = pastEventsList.length;

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <DashboardStats
        total={totalEvents}
        upcoming={upcomingEvents}
        past={pastEvents}
      />

      <button onClick={() => setOpenModal(true)}>Create New Event</button>

      <Modal 
        isOpen={openModal} 
        onClose={() => setOpenModal(false)}>
        <EventForm onClose={() => setOpenModal(false)} />
      </Modal>
    </div>
  );
};

export default Dashboard;
