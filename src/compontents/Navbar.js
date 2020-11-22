import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar text-white  ">
      <button className="topi">
        <Link to="/football-al" className="text-white">
          <i class="fas fa-bars"></i>
        </Link>
      </button>
      <h5 className="m-0 ">
        <span className="text-danger ">AL</span>Football
      </h5>
    </nav>
  );
}

export default Navbar;
