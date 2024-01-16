import React from "react";
import { AddItem } from "./ProductForm";

export const ProductFormModal = ({ id }) => {
 
  return (
    <div
      class="modal fade"
      id="editItemModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              New Product
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <AddItem />
          </div>
          <div class="modal-footer">
             
            <button type="button" class="btn btn-outline-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
