import ListItem from "./EventsListItem";
import "./EventsList.css";
import ErrorScreen from "../MessageScreen/MessageScreen";
import MessageScreen from "../MessageScreen/MessageScreen";

const EventsList = (props) => {
  return (
    <center>
      <ul className="EventsList">
        {props.isLoading ? (
          <MessageScreen message="Loading..." />
        ) : props.array.length ? (
          props.array.map((event) => (
            <ListItem
              key={event.EventId}
              eventId={event.EventId}
              name={event.Name}
              date={event.DateTime}
            />
          ))
        ) : (
          <MessageScreen message="No events!" />
        )}
      </ul>
    </center>
  );
};

export default EventsList;
