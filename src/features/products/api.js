import { imgStorage } from "../../config/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export const addNewCategory = async (category) => {
  const res = await fetch("grocery/category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ category }),
  });

  const newCategory = await res.json();

  if (!res.ok) {
    throw Error(newCategory.error);
  }

  return newCategory;
};

export const getCategories = async () => {
  const res = await fetch("grocery/category");

  const categories = await res.json();
  
  if(!res.ok)
  {
    throw Error(categories.error)
  }

  return categories.category;
};

export const uploadImage = async (imgSrc) => {
  
  console.log(imgSrc);
  const uniqueIdentifier = v4();

  const imgRef = ref(
    imgStorage,
    `grocery_app_uploads/images/${imgSrc.name + uniqueIdentifier}`
  );
    console.log("Uploading");
  const snapShot=await uploadBytes(imgRef, imgSrc);

  const downloadURL = await getDownloadURL(snapShot.ref);

  return downloadURL;
};


export const addNewItem=async(item) =>{

    const res=await fetch('/grocery/products',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({item})
    });

    const data=await res.json();

    if(!res.ok)
    {
      throw Error(data.error)
    }

    return data;
}