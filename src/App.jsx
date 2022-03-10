import { useState } from "react";
import classes from "./App.module.scss";
import FlightsForm from "./components/FlightsForm";
import FlightsList from "./components/FlightsList";

function App() {
  const [flight, setFlight] = useState(null);

  return (
    <section className={classes.app}>
      <FlightsForm setFlight={setFlight} />
      <FlightsList flight={flight} />
    </section>
  );
}

export default App;
