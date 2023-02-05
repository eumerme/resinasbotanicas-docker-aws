import { createContext } from "react";
import { useQuery } from "react-query";
import { categoriesApi } from "../services/categoriesApi";

const CategoriesContext = createContext();

function CategoriesProvider({ children }) {
  const { data: categories, isLoading, error } = useQuery("categories-nav", async () => categoriesApi.getCategories());

  return <CategoriesContext.Provider value={{ categories, isLoading, error }}>{children}</CategoriesContext.Provider>;
}

export { CategoriesContext, CategoriesProvider };
