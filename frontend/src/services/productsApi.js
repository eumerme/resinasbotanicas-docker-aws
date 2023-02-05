import { api } from "./api";

async function getProducts() {
  const response = await api.get("/products/latest");
  return response.data;
}

async function getProductDetail(id) {
  const response = await api.get(`/products/${id}`);
  return response.data;
}

async function getProductByCategory(name) {
  const response = await api.get(`/products/category/${name}`);
  return response.data;
}

export const productsApi = { getProducts, getProductDetail, getProductByCategory };
