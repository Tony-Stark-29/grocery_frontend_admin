import React from "react";
import { CategoryForm } from "./CategoryForm";

export const CategoryModal = () => {
  return (
    <div
      className="modal fade"
      tabindex="-1"
      role="dialog"
      id="categoryModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">New Category</div>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <CategoryForm />
          </div>
          <div className="modal-footer">
            <button type="button" class="btn btn-outline-success">
             Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
