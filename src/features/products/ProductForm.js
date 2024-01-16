import React, { useState } from "react";
import { addNewItem } from "./api";

import { useGroceryContext } from "../../hooks/useGroceryContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faClose,
  faPercentage,
} from "@fortawesome/free-solid-svg-icons";
import previewImage from "../../resources/imgs/image-preview.png";
export const AddItem = () => {
  const [categorySelected, setCategorySelected] = useState("");
  const [nameEntered, setNameEntered] = useState("");
  const [descriptionEntered, setDescriptionEntered] = useState("");
  const [tagsEntered, setTagsEntered] = useState([]);
  const [priceEntered, setPriceEntered] = useState("");
  const [stockEntered, setStockEntered] = useState("");
  const [unitSelected, setUnitSelected] = useState("");
  const [offerEntered, setOfferEntered] = useState("");
  const [url, setUrl] = useState("");
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const { categories } = useGroceryContext() || [];

  const clearAll = () => {
    setCategorySelected("");
    setDescriptionEntered("");
    setTagsEntered("");
    setPriceEntered("");
    setStockEntered("");
    setUnitSelected("");
    setOfferEntered("");
    setUrl("");
    setMsg("");
    setMsgType("");
  };
  const handleSubmit = async () => {
    if (
      !nameEntered ||
      !descriptionEntered ||
      !categorySelected ||
      !tagsEntered ||
      !priceEntered ||
      !stockEntered ||
      !unitSelected
    ) {
      setMsg("All Fields Required");
      setMsgType("warning");
    } else {
      const data = {
        name: nameEntered,
        category: categorySelected,
        description: descriptionEntered,
        tags: tagsEntered,
        unit: unitSelected,
        price: priceEntered,
        stock: stockEntered,
        imageUrl: url,
      };
      try {
        const item = await addNewItem(data);
 
        setMsgType("success");
        setMsg("Products Added Successfully");
      } catch (error) {
        setMsgType("error");
        setMsg(error);
      }
    }
  };
 
  return (
    <form onSubmit={(e) => e.preventDefault()} className="row  px-3 py-2 m-1">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div class="row m-auto input-group my-2 ">
            <div class="col-3 col-lg-2 input-group-text">Name</div>
            <input
              type="text"
              class="col form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Milk"
            />
          </div>
          <div class="row m-auto input-group my-2 ">
            <div class="col-3 col-lg-2 input-group-text">Category</div>

            <select className="col form-control" value={categorySelected}>
              {categories && categories.map(({category,_id})=><option key={_id} value={category}>{category}</option>)}
            </select>
          </div>
          <div class="row m-auto input-group my-2">
            <div class="col-3 col-lg-2 input-group-text">Description</div>

            <textarea className="form-control" rows={4} />
          </div>

          <div class="row m-auto input-group my-2">
            <div class="col-3 col-lg-2 input-group-text">Stock</div>
            <input type="number" className="col form-control" />

            <button class="text-center btn btn-outline-dark input-group-text w-auto">
              <FontAwesomeIcon icon={faAdd} />
            </button>
          </div>
          <div className="row my-2justify-content-between ">
            <div className="w-50 input-group">
              <div class="input-group-text">Price</div>
              <input type="number" className=" form-control" />
            </div>
            <div className="w-50 input-group">
              <div class="  input-group-text">Offer</div>
              <input type="number" className=" form-control" />
            </div>
          </div>
          <div className=" row m-auto input-group my-2  ">
            <div className="col-3 col-lg-2  input-group-text">
              <span>Tags</span>
            </div>
            <input type="" className="col form-control" />
          </div>
          <div className=" row m-auto input-group my-2  ">
            <div className="badge bg-light text-dark w-auto">
              <span>Apple</span> <FontAwesomeIcon icon={faClose} />{" "}
            </div>
          </div>
        </div>
        {/* image upload start */}
        <div className="col-12 col-lg-4">
          <div className="row p-2 ">
            <img src={previewImage} alt="preview" className="img-thumbnail " />
          </div>
          <div className="row p-2  ">
            <input type="file" className="form-control" />
          </div>
        </div>
      </div>
    </form>
  );
};
