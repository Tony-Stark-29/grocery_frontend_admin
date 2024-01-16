import React, { useState } from "react";
import { Alert } from "../alert/Alert";
import { addNewCategory } from "../products/api";

export const CategoryForm = () => {
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
    <form onSubmit={(e) => e.preventDefault()} className="row px-3 py-4 m-2">
      <div className="col-12">
        <div className="row align-items-center justify-content-evenly">
          <div className="col-12 col-md-6">
            <input
              type="text"
              placeholder="Category Name"
              className="form-control my-2 "
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </div>
        </div>

        {msg && <Alert msg={msg} type={msgType} setMsg={setMsg} />}
      </div>
    </form>
  );
};
