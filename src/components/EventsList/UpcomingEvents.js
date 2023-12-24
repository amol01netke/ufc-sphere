import { useState, useEffect } from "react";
import MessageScreen from "../MessageScreen/MessageScreen";
import EventsList from "./EventsList";

const UpcomingEvents = () => {
  const API_KEY = `be12afde158b47e9ab335272f70b4e45`;
  const YEAR = new Date().getFullYear();
  const API_URL = `https://api.sportsdata.io/v3/mma/scores/json/Schedule/ufc/${YEAR}?key=${API_KEY}`;

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const response = await fetch(API_URL);
        const allEvents = await response.json();
        setIsLoading(false);
        setUpcomingEvents(filterEvents(allEvents));
      } catch (err) {
        setError(err);
      }
    };

    fetchUpcomingEvents();
  }, [API_URL]);

  const filterEvents = (events) => {
    const currentDate = new Date();
    const next30Days = new Date();
    next30Days.setDate(currentDate.getDate() + 60);

    return events.filter((event) => {
      const eventDate = new Date(event.DateTime);
      return eventDate >= currentDate && eventDate <= next30Days;
    });
  };

  if (error) return <MessageScreen message={error.message} />;

  return <EventsList array={upcomingEvents} isLoading={isLoading} />;
};

export default UpcomingEvents;
