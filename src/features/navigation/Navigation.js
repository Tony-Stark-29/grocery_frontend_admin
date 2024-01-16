import React from "react";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faHome,
  faListUl,
  faShoppingBasket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark  align-items-start  h-100 " >
      <div class="container">
        <h3 className="d-block d-lg-none text-light">Tasty Daily</h3>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-lg offcanvas-end p-0  " id="navbarNav">
          <ul class="navbar-nav flex-lg-column text-center">
            <div className="d-flex flex-row align-items-center  justify-content-between ">
              <h3 className="w-100 p-3 text-white">Tasty Daily</h3>
              <button
                type="button"
                class="btn-close text-reset d-block d-lg-none float-right "
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <li class="nav-item mt-lg-5 ">
              <Link
                class="nav-link p-lg-3 active d-flex justify-content-evenly align-items-center"
                aria-current="page"
                to="/overview"
              >
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link p-lg-3  d-flex justify-content-evenly align-items-center"
                to="/products"
              >
                <FontAwesomeIcon icon={faBoxArchive} />
                <span>Products</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link p-lg-3  d-flex justify-content-evenly align-items-center"
                to="category"
              >
                <FontAwesomeIcon icon={faListUl} />
                <span>Categories</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link p-lg-3  d-flex justify-content-evenly align-items-center"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                <FontAwesomeIcon icon={faShoppingBasket} />
                <span>Orders</span>
              </Link>
            </li>
          </ul>

          <div className="row m-auto align-items-center">
            <div className="row m-auto">
                <div className="m-auto fs-1 bg-light rounded-circle" style={{width:"100px",height:"100px"}}>
                <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
            <div className="text-white my-2"> {"Admin"} </div>
            <button className="btn btn-outline-danger w-50 m-auto" >Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
