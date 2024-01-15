import React from "react";
import { useGroceryContext } from "../../hooks/useGroceryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
export const Overview = () => {
  const { products } = useGroceryContext();

  return (
    <section className="container-flex m-0 vh-100">
      <div className="row m-auto p-2">
        <div className="col-12 col-md-3 card bg-light text-dark shadow my-2 mx-lg-3">
          <div className="card-title fs-4 fw-bolder">Total Products</div>
          <div className="row card-body ">
            <div className="col-4 fs-1  ">
              <FontAwesomeIcon icon={faBox} />
            </div>
            <div className="col fs-1">{products?.length}</div>
          </div>
        </div>
        <div className="col-12 col-md-3 card bg-light text-dark shadow  my-2 mx-lg-3">
          <div className="card-title fw-bolder">Total Products</div>
          <div className="row   card-body">
            <div className="col-4 fs-1">
              <FontAwesomeIcon icon={faBox} />
            </div>
            <div className="col fs-1">{products?.length}</div>
          </div>
        </div>
        <div className="col-12 col-md-3 card bg-light text-dark shadow  my-2 mx-lg-3">
          <div className="card-title fw-bolder">Total Products</div>
          <div className="row   card-body">
            <div className="col-4 fs-1">
              <FontAwesomeIcon icon={faBox} />
            </div>
            <div className="col fs-1">{products?.length}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
