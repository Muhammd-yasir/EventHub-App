import { useState, useContext } from "react";
import { EventContext } from "../context/EventContext";

const EventForm = ({ onClose }) => {
  const { addEvent } = useContext(EventContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title ) {
      alert("Title is required!");
      return;
    }
    if (!date) {
      alert("Date are required!");
      return;
    }
    if (!description) {
      alert("Description is required!");
      return;
    }

    const newEvent = {
      id: Date.now(), 
      title,
      date,
      description,
    };

    addEvent(newEvent);

    setTitle("");
    setDate("");
    setDescription("");
    
    alert("Event Added");
    
    // Close modal
    if (onClose) onClose();

};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit">Create Event</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default EventForm;
