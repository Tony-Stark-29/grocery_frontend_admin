import { createContext, useEffect, useReducer } from "react";
import { getAllProducts, getAllCategories } from "../api/groceryProductApi";

export const GroceryProductContext = createContext();

const groceryReducer=(state,action)=>{

    switch(action.type)
    {
        case 'SET_PRODUCTS':
            return {...state,products:action.payload};
        case 'SET_CATEGORIES':
            return {...state,categories:action.payload};
        default:
            return state;
    }

};

export const GroceryProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(groceryReducer, {
    products: null,
    categories: null,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const categories = await getAllCategories();
      
        const products = await getAllProducts();

        dispatch({type:"SET_PRODUCTS",payload:products.products});
        dispatch({type:"SET_CATEGORIES",payload:categories.categories});

      } catch (error) {

        console.log(error.message);

      }
    };

    getData();
  }, []);

  return (
    <GroceryProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GroceryProductContext.Provider>
  );
};
