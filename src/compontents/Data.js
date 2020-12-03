import { Link } from "react-router-dom";

function Data({ el }) {
  console.log(el.time.status);
  return (
    <Link
      to={{
        pathname: `/h2h/${el.localTeam.data.id}/${el.visitorTeam.data.id}`,
        events: el.events,
        localTeam: el.localTeam.data.logo_path,
        visitorTeam: el.visitorTeam.data.logo_path,
      }}
      className={
        el.time.status === "LIVE"
          ? "text-white d-flex  p-2  justify-content-between border-green"
          : "text-white d-flex  p-2  justify-content-between"
      }
      style={{
        background: "black",
        width: "100%",
        cursor: "pointer",
        borderBottom: "1px solid #F2F2F2",
        position: "relative",
      }}
    >
      <div className="div d-flex align-items-center" style={{ flex: "1" }}>
        <img
          src={el.localTeam.data.logo_path}
          alt=""
          className="m-0  mr-1"
          style={{ width: "30px", height: "30px" }}
        />
        <p className="m-0 " style={{ fontSize: "0.9rem" }}>
          {el.localTeam.data.name}
        </p>
      </div>
      <div
        style={{
          flex: "1",
          display: "grid",
          placeItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10px",
            color: "red",
          }}
        >
          {el.time.status === "NS" ? "" : `${el.time.minute}'`}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-10px",
            color: "red",
          }}
        >
          {el.scores.ht_score && `HT ${el.scores.ht_score}`}
        </div>
        {el.time.status === "NS"
          ? `${el.time.starting_at.time.slice(0, 5)}`
          : `${el.scores.localteam_score} - ${el.scores.visitorteam_score}`}
      </div>

      <div
        className="d-flex align-items-center justify-content-end"
        style={{ flex: "1" }}
      >
        <p className="m-0 text-center" style={{ fontSize: "0.9rem" }}>
          {el.visitorTeam.data.name}
        </p>
        <img
          src={el.visitorTeam.data.logo_path}
          alt=""
          className="ml-1 "
          style={{ width: "30px", height: "30px" }}
        />
      </div>
    </Link>
  );
}

export default Data;
