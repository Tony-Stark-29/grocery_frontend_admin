export const getAllProducts = async () => {
  const res = await fetch("grocery/products");
  const products = await res.json();

  if (!res.ok) {
    throw Error(products.error);
  }
  return products;
};

export const getAllCategories = async () => {
  const res = await fetch("grocery/category");
  const categories = await res.json();

  if (!res.ok) {
    throw Error(categories.error);
  }
  return categories;
};
