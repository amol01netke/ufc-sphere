import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./EventDetails.css";
import FightsList from "../../components/FightsList/FightsList";
import FormatDate from "../../helpers/FormatDate";
import FormatTime from "../../helpers/FormatTime";
import MessageScreen from "../../components/MessageScreen/MessageScreen";

//main component of event details page
export const Main = (props) => {
  const eventDate = FormatDate(new Date(props.date));
  const eventTime = FormatTime(new Date(props.date));

  return (
    <div className="event-main">
      <div className="event-heading">
        {props.isLoading ? (
          <p>Loading...</p>
        ) : (
          <React.Fragment>
            <div className="event-name">{props.name}</div>
            <div className="event-datetime">
              <div className="event-date">{eventDate}</div>
              <div className="event-time">{eventTime}</div>
            </div>
          </React.Fragment>
        )}
      </div>

      <div className="event-fights">
        <FightsList array={props.fights} isLoading={props.isLoading} />
      </div>
    </div>
  );
};

const EventDetails = () => {
  const { eventId } = useParams();
  const API_KEY = `be12afde158b47e9ab335272f70b4e45`;
  const API_URL = `https://api.sportsdata.io/v3/mma/scores/json/Event/${eventId}?key=${API_KEY}`;

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [eventName, setEventName] = useState(" ");
  const [eventDate, setEventDate] = useState();
  const [eventFights, setEventFights] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(API_URL);
        const event = await response.json();

        setIsLoading(false);
        setEventName(event.Name);
        setEventDate(event.DateTime);
        setEventFights(event.Fights);
      } catch (err) {
        setError(err);
      }
    };

    fetchEvent();
  }, [API_URL]);

  if (error) return <MessageScreen message={error.message} />;

  return (
    <React.Fragment>
      <Header />
      <Main
        name={eventName}
        date={eventDate}
        fights={eventFights}
        isLoading={isLoading}
      />
      <Footer />
    </React.Fragment>
  );
};

export default EventDetails;
