import ListItem from "./EventsListItem";
import "./EventsList.css";

const EventsList = (props) => {
  return (
    <center>
      <ul className="EventsList">
        {props.isLoading ? (
          <p>Loading...</p>
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
          <p>No events!</p>
        )}
      </ul>
    </center>
  );
};

export default EventsList;
