import "./FightsListItem.css";
import ufc_fighter from "../../assets/ufc_fighter.jpg";

const FightsListItem = (props) => {
  const fighter1 = props.fighters[0];
  const fighter2 = props.fighters[1];

  const firstNames = [`${fighter1.FirstName}`, `${fighter2.FirstName}`];
  const lastNames = [`${fighter1.LastName}`, `${fighter2.LastName}`];

  const records = [
    `${fighter1.PreFightWins}-${fighter1.PreFightLosses}-${fighter1.PreFightDraws} `,
    `${fighter2.PreFightWins}-${fighter2.PreFightLosses}-${fighter2.PreFightDraws} `,
  ];

  return (
    <li className="FightsListItem">
      <div className="fighter">
        <div className="fighter-image">
          <img src={ufc_fighter} alt="Fighter 1" />
        </div>
        <div className="fighter-info">
          <div className="fighter-name">
            <div>{firstNames[0]}</div>
            <div>{lastNames[0]}</div>
          </div>
          <div className="fighter-record">{records[0]}</div>
        </div>
      </div>
      <div>vs</div>
      <div className="fighter">
        <div className="fighter-image">
          <img src={ufc_fighter} alt="Fighter 2" />
        </div>
        <div className="fighter-info">
          <div className="fighter-name">
            <div>{firstNames[1]}</div>
            <div>{lastNames[1]}</div>
          </div>
          <div className="fighter-record">{records[1]}</div>
        </div>
      </div>
    </li>
  );
};

export default FightsListItem;
