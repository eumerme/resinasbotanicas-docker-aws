import { api, createHeaders } from "./api";

async function getCategories() {
  const headers = createHeaders();
  const response = await api.get("/categories", headers);
  return response.data;
}

export const categoriesApi = { getCategories };
