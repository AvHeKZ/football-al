import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [ndeshjet, setNdeshjet] = useState([]);

  const d = new Date();
  const today = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  useEffect(() => {
    fetchNdeshje(today);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchNdeshje = async (x) => {
    const result = await axios.get(
      `https://soccer.sportmonks.com/api/v2.0/fixtures/date/${x}?api_token=iIi4dPDDAhYlTc6fk8Kn5PV7Vmff7raIeqXzrUd6XjNC2rgocPpcSBdxdlV6&include=localTeam,visitorTeam,league,contry,events`
    );
    setNdeshjet(result.data.data);
  };

  console.log(ndeshjet);

  const liveNdeshje = async () => {
    const result = await axios.get(
      `https://soccer.sportmonks.com/api/v2.0/livescores/now?api_token=iIi4dPDDAhYlTc6fk8Kn5PV7Vmff7raIeqXzrUd6XjNC2rgocPpcSBdxdlV6&include=localTeam,visitorTeam,league,contry`
    );
    setNdeshjet(result.data.data);
  };

  return (
    <GlobalContext.Provider
      value={{
        ndeshjet,
        fetchNdeshje,
        liveNdeshje,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
