import React from "react";
import { AddItem } from "./AddItem";
import { AddCategory } from "./AddCategory";

export const ManageItem = () => {
  return (
    <>
      <div className="col col-lg-10 m-auto">
        <AddCategory />
      </div>
      <div className="col col-lg-10 m-auto  ">
        <AddItem />
      </div>
    </>
  );
};
