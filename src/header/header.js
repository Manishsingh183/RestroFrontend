import { Link, useLocation } from "react-router-dom";
import "./header.css";

function Header() {
  const location = useLocation();

  return (
    <div className="header">
      {/* <Link to="/"> */}
      <h2 className="restro_name">Lamma's Restro</h2>
      {/* </Link> */}
      <div className="header_align">
        <div className="header_options">
          <Link to="/">
            <button
              className={location.pathname === "/" ? "active" : "header_button"}
            >
              About
            </button>
          </Link>
          <Link to="/menu">
            <button
              className={
                location.pathname === "/menu" ? "active" : "header_button"
              }
            >
              Menu
            </button>
          </Link>
          <Link to="/delivery">
            <button
              className={
                location.pathname === "/delivery" ? "active" : "header_button"
              }
            >
              Delivery
            </button>
          </Link>
          <Link to="/reservations">
            <button
              className={
                location.pathname === "/reservations"
                  ? "active"
                  : "header_button"
              }
            >
              Reservations
            </button>
          </Link>
          <Link to="/contact">
            {" "}
            <button
              className={
                location.pathname === "/contact" ? "active" : "header_button"
              }
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
