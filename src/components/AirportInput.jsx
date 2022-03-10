import classes from "./AirportInput.module.scss";
import { lotniska } from "../utils/lotniska";

const AirportInput = ({ disable, onChange }) => {
  const changeAirportHandler = (e) => {
    onChange(e.target.value);
  };

  return (
    <select className={classes.select} onChange={changeAirportHandler}>
      {lotniska.map((lotnisko) => {
        if (lotnisko !== disable) {
          return (
            <option value={lotnisko} key={lotnisko}>
              {lotnisko}
            </option>
          );
        } else {
          return null;
        }
      })}
    </select>
  );
};

export default AirportInput;
