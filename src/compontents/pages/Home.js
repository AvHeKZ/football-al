import { useContext } from "react";
import Data from "../Data";
import Navbar from "../Navbar";
import Navbar2 from "../Navbar2";
import { GlobalContext } from "../../context/GlobalState";

function Home() {
  const { ndeshjet } = useContext(GlobalContext);

  return (
    <>
      <Navbar />
      <Navbar2 />
      <ul className="list-group">
        {ndeshjet.map((el) => (
          <Data el={el} />
        ))}
      </ul>
    </>
  );
}

export default Home;
