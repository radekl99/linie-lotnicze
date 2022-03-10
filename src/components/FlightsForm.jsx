import AirportInput from "./AirportInput";
import classes from "./FlightsForm.module.scss";
import { useState } from "react";
import { znajdzPolaczenie } from "../utils/znajdzPolaczenie";

const FlightsForm = ({ setFlight }) => {
  const [from, setFrom] = useState("ATH");
  const [to, setTo] = useState("BSL");

  const searchFlightsHandler = (e) => {
    e.preventDefault();

    const flight = znajdzPolaczenie(from, to);

    setFlight(flight);
  };

  return (
    <section className={classes["flights-form"]}>
      <h1>Wyszukiwarka lotów</h1>
      <form onSubmit={searchFlightsHandler}>
        <div className={classes["input-container"]}>
          <div>
            <label>Z:</label>
            <AirportInput disable={to} onChange={setFrom} />
          </div>
          <div>
            <label>DO:</label>
            <AirportInput disable={from} onChange={setTo} />
          </div>
        </div>
        <button className={classes["submit-btn"]}>SZUKAJ</button>
      </form>
    </section>
  );
};

export default FlightsForm;
