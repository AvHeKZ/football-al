import { useEffect, useState } from "react";
import axios from "axios";

function Head2Head({ match, location }) {
  const [h2h, setHead2head] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://soccer.sportmonks.com/api/v2.0/head2head/${match.params.Team1}/${match.params.Team2}?api_token=iIi4dPDDAhYlTc6fk8Kn5PV7Vmff7raIeqXzrUd6XjNC2rgocPpcSBdxdlV6&include=events,goals,cards,referee,venue,localTeam,visitorTeam,flatOdds:filter(bookmaker_id|2)`
      );
      setHead2head(result.data.data);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(h2h);
  console.log(location.events);

  return (
    <div>
      <div
        className="d-flex justify-content-around align-items-center px-2 py-3"
        style={{ background: "#212121" }}
      >
        <div>
          <img
            src={location.localTeam}
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div>
          <h5 className="text-white">VS</h5>
        </div>
        <div>
          <img
            src={location.visitorTeam}
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Head2Head;
