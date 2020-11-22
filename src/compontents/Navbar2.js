import Datemodal from "./Datemodal";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Navbar2() {
  const { fetchNdeshje, liveNdeshje } = useContext(GlobalContext);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date();
  const today = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  const yesterday =
    d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + (d.getDate() - 1);
  const yesterday1 =
    d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + (d.getDate() - 2);
  const tomorrow =
    d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + (d.getDate() + 1);
  const tomorrow1 =
    d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + (d.getDate() + 2);

  return (
    <div className="navbar2">
      <div
        onClick={() => liveNdeshje()}
        style={{
          flex: "10%",
          borderRight: "1px solid #F2F2F2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <i class="far fa-clock text-success"></i>
        <p className="text-success m-0 p-0" style={{ fontSize: "0.7rem" }}>
          Live
        </p>
      </div>
      <div
        className="d-flex align-items-center justify-content-around"
        style={{ flex: "80" }}
      >
        <p
          onClick={() => fetchNdeshje(yesterday1)}
          className="text-light m-0 p-0"
          style={{ fontSize: "0.7rem" }}
        >
          {d.getDate() - 2} {monthNames[d.getMonth()]}
        </p>
        <p
          onClick={() => fetchNdeshje(yesterday)}
          className="text-light m-0 p-0"
          style={{ fontSize: "0.7rem", cursor: "pointer" }}
        >
          {d.getDate() - 1} {monthNames[d.getMonth()]}
        </p>
        <p
          onClick={() => fetchNdeshje(today)}
          className="text-light m-0 p-0"
          style={{ fontSize: "0.7rem", cursor: "pointer" }}
        >
          Today
        </p>
        <p
          onClick={() => fetchNdeshje(tomorrow)}
          className="text-light m-0 p-0"
          style={{ fontSize: "0.7rem" }}
        >
          {d.getDate() + 1} {monthNames[d.getMonth()]}
        </p>
        <p
          onClick={() => fetchNdeshje(tomorrow1)}
          className="text-light m-0 p-0"
          style={{ fontSize: "0.7rem" }}
        >
          {d.getDate() + 2} {monthNames[d.getMonth()]}
        </p>
      </div>
      <div
        style={{
          flex: "10%",
          borderLeft: "1px solid #F2F2F2",
          display: "grid",
          placeItems: "center",
          background: "transparent",
        }}
      >
        <Datemodal />
      </div>
    </div>
  );
}

export default Navbar2;
