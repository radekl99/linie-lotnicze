import FlightItem from "./FlightItem";
import classes from "./FlightsList.module.scss";

const FlightsList = ({ flight }) => {
  return (
    <ul className={classes["flights-list"]}>
      {flight &&
        flight.map((airport, i, arr) => {
          if (i !== arr.length - 1) {
            return <FlightItem from={airport} to={arr[i + 1]} key={i} />;
          }
          return null;
        })}
    </ul>
  );
};

export default FlightsList;
