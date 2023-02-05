import { api } from "./api";

async function createCheckout(data) {
  const response = await api.post("/stripe/checkout-session", data, {
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_PKEY}`,
    },
  });
  return response.data;
}

export const checkoutApi = { createCheckout };
