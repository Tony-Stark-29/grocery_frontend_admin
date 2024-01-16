import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Category } from "./Category";
import { CategoryModal } from "./CategoryModal";

const cat = [
  {
    _id: 1,
    name: "Dairy",
    products: ["Milk", "Cheese", "Butter", "Ghee", "White Chocolate"],
  },
  {
    _id: 2,
    name: "Meat",
    products: ["Goat", "Chicken", "Country Chicken"],
  },
  {
    _id: 3,
    name: "Seafood",
    products: ["fish", "Pron", "Lobster"],
  },
  {
    _id: 4,
    name: "Fruits",
    products: [
      "Apple",
      "Orange",
      "Banana",
      "Grapes",
      "Kivi",
      "Guava",
      "PineApple",
      "Pomogranate",
      "Jackfruit",
    ],
  },
  {
    _id: 5,
    name: "Vegetables",
    products: [
      "Tomato",
      "Potato",
      "Onion",
      "Chilli",
      "Capsicum",
      "Carrot",
      "Beans",
      "Cucumber",
      "Cabbage",
      "Kidney Beans",
      "BitterGuard",
      "Pumkin",
    ],
  },
];

export const ProductCategory = () => {
  return (
    <section className="container-flex bg-light">
      <div className="row">
        <div className="col-12">
          <div className="row p-2">
            <h3 className="text-start">Product Categories</h3>
          </div>
          <div className="row p-2 m-2 justify-content-end">
            <button
              className=" w-25 btn btn-outline-success"
              data-bs-target="#categoryModal"
              data-bs-toggle="modal"
            >
              <FontAwesomeIcon icon={faAdd} /> Category
            </button>
            <CategoryModal />
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row flex-wrap align-items-start justify-content-eveny">
            {cat.map((item) => (
              <Category item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
