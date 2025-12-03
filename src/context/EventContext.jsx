import { createContext, useState, useEffect } from "react";

//  Create Context
export const EventContext = createContext();

//  Provider Component
export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

    // Load events from localStorage on mount
    useEffect(() => {
        const storedEvents = localStorage.getItem("events");
        if (storedEvents) {
            setEvents(JSON.parse(storedEvents));
        }
    }, []);

    // Save events to localStorage whenever events change
    useEffect(() => {
        localStorage.setItem("events", JSON.stringify(events));
    }, [events]);

    // Add new event
    const addEvent = (newEvent) => {
        setEvents((prev) => [...prev, newEvent]);
    };

    // Update event by id
    const updateEvent = (id, updatedEvent) => {
        setEvents((prev) =>
            prev.map((event) => (event.id === id ? updatedEvent : event))
        );
    };

    // Delete event by id
    const deleteEvent = (id) => {
        setEvents((prev) => prev.filter((event) => event.id !== id));
    };

    // Context value
    const value = {
        events,
        addEvent,
        updateEvent,
        deleteEvent,
    };

    return (
        <EventContext.Provider value={value}>{children}</EventContext.Provider>
    );
};
