import { useState, useEffect } from "react";
import EventsList from "./EventsList";

const PreviousEvents = () => {
  const API_KEY = `be12afde158b47e9ab335272f70b4e45`;
  const YEAR = new Date().getFullYear();
  const API_URL = `https://api.sportsdata.io/v3/mma/scores/json/Schedule/ufc/${YEAR}?key=${API_KEY}`;

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [previousEvents, setPreviousEvents] = useState([]);

  useEffect(() => {
    const fetchPreviousEvents = async () => {
      try {
        const response = await fetch(API_URL);
        const allEvents = await response.json();
        setIsLoading(false);
        setPreviousEvents(filterEvents(allEvents.reverse()));
      } catch (err) {
        setError(err);
      }
    };

    fetchPreviousEvents();
  }, [API_URL]);

  const filterEvents = (events) => {
    const currentDate = new Date();
    const previousDays = new Date();
    previousDays.setDate(currentDate.getDate() - 365);

    return events.filter((event) => {
      const eventDate = new Date(event.DateTime);
      return eventDate < currentDate && eventDate > previousDays;
    });
  };

  if (error) return <p>"Oops... Something went wrong!" </p>;

  return <EventsList array={previousEvents} isLoading={isLoading} />;
};

export default PreviousEvents;
