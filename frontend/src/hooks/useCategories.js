import { useContext } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";

export function useCategories() {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("Categories context not found");
  }
  return context;
}
