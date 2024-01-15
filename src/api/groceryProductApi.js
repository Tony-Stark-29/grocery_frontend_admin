export const getAllProducts = async () => {
  const res = await fetch("grocery/products");
  const products = await res.json();

  if (!res.ok) {
    throw Error(products.error);
  }
  return products;
};

export const deleteProduct = async (_id) => {
  const res = await fetch(`grocery/product/${_id}`, {
    method: "DELETE",
  });
  const product = await res.json();

  if (!res.ok) {
    throw Error(product.error);
  }
  return product;
};

export const getAllCategories = async () => {
  const res = await fetch("grocery/category");
  const categories = await res.json();

  if (!res.ok) {
    throw Error(categories.error);
  }
  return categories;
};
