import { useState, useContext } from "react";
import "react-calendar/dist/Calendar.css";
import { GlobalContext } from "../context/GlobalState";

import Calendar from "react-calendar";

function Kalendari() {
  const [value, setValue] = useState(new Date());

  const { fetchNdeshje } = useContext(GlobalContext);

  console.log(
    value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate()
  );

  return (
    <div>
      <Calendar
        onChange={setValue}
        onClickDay={() =>
          fetchNdeshje(
            value.getFullYear() +
              "-" +
              (value.getMonth() + 1) +
              "-" +
              value.getDate()
          )
        }
      />
    </div>
  );
}

export default Kalendari;
