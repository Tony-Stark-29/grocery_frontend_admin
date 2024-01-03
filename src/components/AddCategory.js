import React, {useState } from "react";
import {Alert} from "../components/Alert";

export const AddCategory = () => {
  const [newCategory, setNewCategory] = useState("");
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");

  const handleNewCadegory=async(category)=>{

     console.log(category);
    const res=await fetch('grocery/category',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({category})
    })

    const data=await res.json();

    if(res.ok)
    {

      setMsg(`${data.category} Added`);
      setMsgType('Success');

    }
    if(!res.ok)
    {

      setMsg(data.error);
      setMsgType('Success');

    }

  }

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
              onChange={(e)=>setNewCategory(e.target.value)}
            />
          </div>
          <button className="btn btn-outline-success col-12 col-md-2" type="submit" onClick={()=>handleNewCadegory(newCategory)}>
            Add
          </button>
        </div>
        {msg && <Alert msg={msg} type={msgType} setError={setMsg}/> }
         
      </div>
    </form>
  );
};
