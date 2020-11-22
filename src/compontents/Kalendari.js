import { useState, useContext } from "react";
import "react-calendar/dist/Calendar.css";
import { GlobalContext } from "../context/GlobalState";

import Calendar from "react-calendar";

function Kalendari({ handleClose }) {
  const [value, setValue] = useState(new Date());

  const { fetchNdeshje } = useContext(GlobalContext);

  console.log(
    value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate()
  );

  const handleChange = (e) => {
    setValue(e);
    fetchNdeshje(
      e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
    );
    handleClose();
  };

  return (
    <div>
      <Calendar onChange={handleChange} />
    </div>
  );
}

export default Kalendari;
