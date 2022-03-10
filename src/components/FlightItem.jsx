import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import classes from "./FlightItem.module.scss";

const FlightItem = ({ from, to }) => {
  return (
    <li className={classes["flight-item"]}>
      <div>
        <h2>{from}</h2>
        <FaPlaneDeparture className={classes.icon} />
      </div>
      <hr />
      <div>
        <FaPlaneArrival className={classes.icon} />
        <h2>{to}</h2>
      </div>
    </li>
  );
};

export default FlightItem;
