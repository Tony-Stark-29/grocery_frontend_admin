import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome ,faChartLine, faAdd, faTableList, faBell} from "@fortawesome/free-solid-svg-icons";
export const SideNav = () => {
  return (
    <div
      id="sideNav"
      className="col-2 bg-success  offcanvas-lg offcanvas-start d-flex flex-column align-items-strech justify-content-between "
    >
      <nav className="navbar  navbar-light bg-none flex-column ">
        <div className="navbar-brand my-3">Groz</div>

        <ul className="navbar-nav w-100">
          <li className="nav-item   ">
            <Link to="/" className="nav-link fw-bolder">
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/analytics" className="nav-link fw-bolder">
              <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>
              <span>Analytics</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/manageitems" className="nav-link fw-bolder">
            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
              <span>New Item</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="allitems" className="nav-link fw-bolder">
            <FontAwesomeIcon icon={faTableList}></FontAwesomeIcon>
              <span>All Items</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="notifications" className="nav-link fw-bolder">
            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
              <span>Notifications</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div>Admin</div>
    </div>
  );
};
