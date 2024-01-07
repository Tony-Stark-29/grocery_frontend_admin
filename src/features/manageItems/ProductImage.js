import React from 'react';
import { useState } from 'react';
import { uploadImage } from "./api";
import loadingSvg from "../../resources/imgs/tube-spinner.svg";
import image_preview from "../../resources/imgs/image-preview.png";

export const ProductImage = ({url,setUrl,setMsg,setMsgType}) => {
    const [isUploading, setIsUploading] = useState();
    const handleImageUpload = async (img) => {
        setMsg('');
        setIsUploading(true);
        try {
          const imgUrl = await uploadImage(img);
          setUrl(imgUrl);
          setMsg('Image Uploaded');
          setMsgType('success');
        } catch (error) {
          setMsg(error);
          setMsgType('error');
        } finally {
          setIsUploading();
        }
      };
  return (
    <div className="col col-md-4 d-flex flex-column align-items-center p-3">
          {isUploading && (
            <img
              className="w-100 h-75 border border-2 rounded-2 img-thumbnail "
              src={loadingSvg}
              alt="Uploading"
            />
          )}
          {!isUploading && (
            <img
              src={url}
              className="w-100 h-75 border border-2 rounded-2  img-fluid"
              alt="Preview"
            />
          )}
          <input
            type="file"
            src={url || image_preview}
            onChange={(e) => handleImageUpload(e.target.files[0])}
            className="form-control m-2"
          />
        </div>
       
  )
}
