import React, { useEffect, useState } from "react";
import image_preview from "../resources/imgs/image-preview.png";
import { imgStorage } from "../config/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupee } from "@fortawesome/free-solid-svg-icons";

export const AddItem = () => {
  const [categorySelected, setCategorySelected] = useState("");
  const [descriptionEntered, setDescriptionEntered] = useState("");
  const [tagsEntered, setTagsEntered] = useState("");
  const [priceEntered, setPriceEntered] = useState("");
  const [stockEntered, setStockEntered] = useState("");
  const [unitSelected, setUnitSelected] = useState("");
  const [imgSrc, setImgSrc] = useState(null);
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getCategory = async () => {
      const res = await fetch("grocery/category");

      if (res.ok) {
        const data = await res.json();
        setCategory(data.category);
      }

      if (!res.ok) {
        setError(res);
      }
    };

    getCategory();
  }, []);

  const uploadImage = async () => {
    try {
      console.log(imgSrc.name);
      console.log(imgSrc);
      const uniqueIdentifier = v4();

      const imgRef = ref(
        imgStorage,
        `grocery_app_uploads/images/${imgSrc.name + uniqueIdentifier}`
      );

      await uploadBytes(imgRef, imgSrc);

      const downloadURL = await getDownloadURL(imgRef);

      console.log("Image uploaded successfully. Download URL:", downloadURL);

      setUrl(downloadURL);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="row shadow-sm border border-2 rounded-3 px-3 py-4 m-2"
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
              <select name="category" id="" className="form-control" defaultValue={"Category"}>
                <option value="Category"  disabled >
                  Category
                </option>
                {category &&
                  category.map((item) => (
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
              />
            </div>
            <div className="col-12">
              <textarea
                type="text"
                placeholder="Description"
                className="form-control  my-2"
                rows="3"
              ></textarea>
            </div>

            <div className="col-12 col-lg-4 my-2">
              <select name="unit" id="" className="form-control">
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
              />
            </div>
            <div className="col-12 col-lg-4">
              <input
                type="number"
                placeholder="Stock"
                className="form-control  my-2"
              />
            </div>
          </div>
        </div>
        <div className="col col-md-4 d-flex flex-column align-items-center p-3">
          <img
            src={(imgSrc && URL.createObjectURL(imgSrc)) || image_preview}
            className="w-100 h-75 border border-2 rounded-2 "
            alt="Preview"
          />
          <input
            type="file"
            src={imgSrc}
            onChange={(e) => setImgSrc(e.target.files[0])}
            className="form-control m-2"
          />
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center">
        {url && (
          <img
            src={url}
            alt="Alt"
            style={{ height: "100px", width: "150px" }}
          />
        )}
        <button className="btn btn-outline-success w-25" onClick={uploadImage}>
          Add
        </button>
      </div>
      {error && <div className="text-danger">{error}</div>}
    </form>
  );
};
