import "./FightsList.css";
import FightsListItem from "./FightsListItem";

const FightsList = (props) => {
  return (
    <center>
      <ul className="FightsList">
        {props.isLoading ? (
          <p>Loading...</p>
        ) : props.array && props.array.length ? (
          props.array.map((fight) => (
            <FightsListItem key={fight.FightId} fighters={fight.Fighters} />
          ))
        ) : (
          <p>Oops... Something went wrong!</p>
        )}
      </ul>
    </center>
  );
};

export default FightsList;
