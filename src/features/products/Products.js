import React, { useEffect, useState } from "react";
import { useGroceryContext } from "../../hooks/useGroceryContext";
import { deleteProduct } from "../../api/groceryProductApi";
import { Alert } from "../alert/Alert";
import { AddItem } from "./ProductForm";
import { ProductListTable } from "./ProductListTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { ProductFormModal } from "./ProductFormModal";
import spinning_dots from "../../resources/imgs/spinning-dots.svg";

export const Products = () => {
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const [editItemId, setEditItemId] = useState("");
  const [categorySelected, setCategorySelected] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState("");
  const { products } = useGroceryContext();
  const { categories } = useGroceryContext();

  useEffect(() => {
    if (products) {
      const filtered = products.filter(
        (product) =>
          (categorySelected === "All" ||
            product.category.toLowerCase() ===
              categorySelected.toLowerCase()) &&
          (
            product.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
      );
      setFilteredProducts(filtered);
    }
  }, [categorySelected, searchText,products]);
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

  const handleCategoryFilter = (e) => {
    console.log(e.target.value);
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
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
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

              <select
                className="w-50 m-2 form-control "
                onChange={(e) => setCategorySelected(e.target.value)}
              >
                <option value="All">All</option>
                {categories &&
                  categories.map(({ category, _id }) => (
                    <option key={_id} value={category}>
                      {category}
                    </option>
                  ))}
              </select>

              <ProductFormModal />
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
            products={filteredProducts}
            handleDelete={handleDelete}
            handleEditItem={handleEditItem}
          />
        )}
      </div>
    </section>
  );
};
