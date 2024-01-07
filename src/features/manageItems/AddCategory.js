import React, { useState } from "react";
import { Alert } from "../alert/Alert";
import { addNewCategory } from "./api";

export const AddCategory = () => {
  const [newCategory, setNewCategory] = useState("");
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");

  const handleNewCadegory = async (category) => {
    try {
      const data = await addNewCategory(category);
      setMsg(`${data.category} Added`);
      setMsgType("success");
    } catch (error) {
      setMsg(error.message);
      setMsgType("error");
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="row shadow-sm border border-2 rounded-3  px-3 py-4 m-2"
    >
      <div className="col-12">
        <div className="row">
          <h3 className="heading-4 col-12 col-md-3">New Category</h3>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <input
              type="text"
              placeholder="Category"
              className="form-control my-2 "
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </div>
          <button
            className="btn btn-outline-success col-12 col-md-2"
            type="submit"
            onClick={() => handleNewCadegory(newCategory)}
          >
            Add
          </button>
        </div>
        {msg && <Alert msg={msg} type={msgType} setError={setMsg} />}
      </div>
    </form>
  );
};
