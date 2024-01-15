import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export const ProductListTable = ({products,handleDelete,handleEditItem}) => {
    
  return (
    <table class=" table table-responsive-sm ">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          {/* <th scope="col">Category</th> */}
          <th scope="col">Stock</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products.map((item,index) => (
            <tr key={item?._id}>
              <td>{index+1}</td>
              <td>
               
                {<img
                    src={item?.imageUrl}
                    className="img-thumbnail"
                    style={{ maxHeight: "50px", maxWidth: "70px" }}
                  />
                }
              </td>
              <td>{item?.name} </td>
              {/* <td>{item?.category}</td> */}
              <td>{item?.stock + " " + item?.unit}</td>

              <td>{item?.price}</td>
              <td className="   ">
                <button
                  className="mx-1 btn btn-outline-warning"
                  type="button"
                  onClick={() => handleEditItem(item?._id)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>

                <button className="mx-1 btn btn-outline-danger">
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => handleDelete(item._id)}
                  />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
