function Data({ el }) {
  console.log(el.time.status);
  return (
    <li
      className={"text-white d-flex  p-2  justify-content-between "}
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
          style={{ width: "35px", height: "35px" }}
        />
        <p className="m-0  ">{el.localTeam.data.name}</p>
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
            top: "-9px",
            color: "red",
          }}
        >
          {el.time.status === "NS" ? "" : `${el.time.minute}'`}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-9px",
            color: "red",
          }}
        >
          {el.scores.ht_score && `HT ${el.scores.ht_score}`}
        </div>
        {el.time.status === "NS"
          ? "-"
          : `${el.scores.localteam_score} - ${el.scores.visitorteam_score}`}
      </div>

      <div
        className="d-flex align-items-center justify-content-end"
        style={{ flex: "1" }}
      >
        <p className="m-0 text-center ">{el.visitorTeam.data.name}</p>
        <img
          src={el.visitorTeam.data.logo_path}
          alt=""
          className="ml-1 "
          style={{ width: "35px", height: "35px" }}
        />
      </div>
    </li>
  );
}

export default Data;
