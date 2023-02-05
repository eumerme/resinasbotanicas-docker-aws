import { createContext, useReducer } from "react";

const CartContext = createContext();
const initialState = Object.freeze({
  cart: {
    items: JSON.parse(localStorage.getItem("RB_CartItems")) || [],
  },
});
const TYPES = Object.freeze({
  addToCart: "addToCart",
  removeFromCart: "removeFromCart",
});

function reducer(state, action) {
  const { cart } = state;
  const newItem = action.payload;

  if (action.type === "addToCart") {
    const itemExists = cart.items.find(({ id }) => id === newItem.id);

    const items = itemExists
      ? cart.items.map((item) => (item.id === itemExists.id ? newItem : item))
      : [...cart.items, newItem];

    return saveData({ state, cart, items });
  }

  if (action.type === "removeFromCart") {
    const items = cart.items.filter((item) => item.id !== newItem.id);

    return saveData({ state, cart, items });
  }

  return state;
}

function saveData({ state, cart, items }) {
  localStorage.setItem("RB_CartItems", JSON.stringify(items));
  return { ...state, cart: { ...cart, items } };
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider value={{ state, dispatch, TYPES }}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
