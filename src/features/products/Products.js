import React, { useState } from "react";
import { useGroceryContext } from "../../hooks/useGroceryContext";
import { deleteProduct } from "../../api/groceryProductApi";
import { Alert } from "../alert/Alert";
import { AddItem } from "./AddItem";
import { ProductListTable } from "./ProductListTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { EditItemModal } from "./EditItemModal";
import spinning_dots from "../../resources/imgs/spinning-dots.svg";

export const Products = () => {
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const [editItemId, setEditItemId] = useState("");
  const { products } = useGroceryContext();

  const handleDelete = async (_id) => {
    try {
      const product = await deleteProduct(_id);
      console.log(product);
      setMsg(`${product.name} is deleted `);
      setMsgType("warning");
    } catch (error) {
      setMsg(error.message);
      setMsgType("error");
    }
  };

  const handleEditItem = (id) => {
    setEditItemId(id);
  };

  return (
    <section className="container p-2 bg-light">
      <div className="row m-auto p-2">
        <div className="d-flex flex-column flex-lg-row g-2">
          <div className="col-12 col-lg-6">
            <h3 className="text-start">Products</h3>
            <input
              placeholder={"Search"}
              type="text"
              className="col my-4 form-control"
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-row flex-lg-column align-items-end justify-content-evenly p-2">
              <button
                className=" m-2 btn btn-outline-success"
                data-bs-toggle="modal"
                data-bs-target="#editItemModal"
              >
                <FontAwesomeIcon icon={faAdd} /> Add Product
              </button>
              <select className="w-50 m-2 form-control " name="" id="">
                <option value="Fruits">Fruits</option>
                <option value="Category " selected disabled>
                  Category
                </option>
              </select>
              <EditItemModal />
            </div>
          </div>
        </div>
      </div>
      <div className="row m-auto border ">
        {!products && (
          <div>
            <img
              src={spinning_dots}
              alt="loading..."
              style={{ width: "150px" }}
            />
          </div>
        )}
        {products && (
          <ProductListTable
            products={products}
            handleDelete={handleDelete}
            handleEditItem={handleEditItem}
          />
        )}
      </div>
    </section>
  );
};
