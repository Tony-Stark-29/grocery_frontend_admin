import React, {useState } from "react";
import { addNewItem } from "./api";
import { Alert } from "../alert/Alert";
import { ProductImage } from "./ProductImage";
import { useGroceryContext } from "../../hooks/useGroceryContext";
 

export const AddItem = () => {
  const [categorySelected, setCategorySelected] = useState("");
  const [nameEntered, setNameEntered] = useState("");
  const [descriptionEntered, setDescriptionEntered] = useState("");
  const [tagsEntered, setTagsEntered] = useState("");
  const [priceEntered, setPriceEntered] = useState("");
  const [stockEntered, setStockEntered] = useState("");
  const [unitSelected, setUnitSelected] = useState("");
  const [url, setUrl] = useState("");
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const {categories}=useGroceryContext()||[];



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
      setMsgType('warning')
    } else {
      const data = {
        name: nameEntered,
        category: categorySelected,
        description: descriptionEntered,
        tags: tagsEntered,
        unit: unitSelected,
        price: priceEntered,
        stock: stockEntered,
        imageUrl:url,
      };
      try {
        const item = await addNewItem(data);
        console.log(item);
        setMsgType('success');
        setMsg('Products Added Successfully');
      } catch (error) {
        setMsgType('error');
        setMsg(error);
      }  
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="row shadow-sm border border-2 rounded-3 px-3 py-2 m-1"
    >
      <div className="d-flex flex-column">
        <div className="col-12">
          <h3>New Item</h3>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row">
        <div className="col col-md-8 p-3">
          <div className="row">
            <div className="col-12">
              <input
                type="text"
                placeholder="Name"
                className="form-control  my-2"
                onChange={(e) => setNameEntered(e.target.value)}
              />
            </div>
            <div className="col-12">
              <select
                name="category"
                className="form-control my-2"
                defaultValue={"Category"}
                onChange={(e) => setCategorySelected(e.target.value)}
              >
                <option value="Category" disabled>
                  Category
                </option>
                {categories && categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <input
                type="text"
                placeholder="Tags"
                className="form-control  my-2"
                onChange={(e) => setTagsEntered(e.target.value)}
              />
            </div>
            <div className="col-12">
              <textarea
                type="text"
                placeholder="Description"
                className="form-control  my-2"
                rows="3"
                onChange={(e) => setDescriptionEntered(e.target.value)}
              ></textarea>
            </div>

            <div className="col-12 col-lg-4 my-2">
              <select
                name="unit"
                id=""
                className="form-control"
                onChange={(e) => setUnitSelected(e.target.value)}
              >
                <option value="gram">gram</option>
                <option value="Kg">Kg</option>
                <option value="liter">liter</option>
              </select>
            </div>
            <div className="col-12 col-lg-4 ">
              <input
                type="number"
                placeholder="Price"
                className="form-control my-2 "
                onChange={(e) => setPriceEntered(e.target.value)}
              />
            </div>
            <div className="col-12 col-lg-4">
              <input
                type="number"
                placeholder="Stock"
                className="form-control  my-2"
                onChange={(e) => setStockEntered(e.target.value)}
              />
            </div>
            <div className="col-12 my-2">
              <button
                className="btn btn-outline-success w-25"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <ProductImage url={url} setUrl={setUrl} setMsg={setMsg} setMsgType={setMsgType} />
        {msg && <Alert msg={msg} type={msgType} setMsg={setMsg} />}
        </div>
    </form>
  );
};
