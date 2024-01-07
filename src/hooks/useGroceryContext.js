import { useContext } from "react";
import { GroceryProductContext } from "../contexts/GroceryProducts";

export const useGroceryContext = () => {
  const context = useContext(GroceryProductContext);
  if (!context) {
    throw Error(
      "groceryProductContext should be used inside groceryProductContextProvider"
    );
  }
  return context;
};
