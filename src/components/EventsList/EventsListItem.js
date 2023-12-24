import "./EventsListItem.css";
import FormatDate from "../../helpers/FormatDate";
import FormatTime from "../../helpers/FormatTime";

const EventsListItem = (props) => {
  const eventDate = FormatDate(new Date(props.date));
  const eventTime = FormatTime(new Date(props.date));

  return (
    <a href={`/event-details/${props.eventId}`} className="EventsListItem">
      <li>
        <div className="event-names">{props.name}</div>
        <div className="event-dates">{eventDate}</div>
        <div className="event-times">{eventTime}</div>
      </li>
    </a>
  );
};

export default EventsListItem;
