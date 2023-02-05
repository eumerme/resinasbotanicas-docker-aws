import { createContext, useReducer } from "react";

const UserContext = createContext();
const initialState = {
  userData: JSON.parse(localStorage.getItem("RB_UserData")) || null,
};
const TYPES = Object.freeze({
  userSignin: "userSignin",
  userSignout: "userSignout",
});

function reducer(state, action) {
  if (action.type === "userSignin") {
    localStorage.setItem("RB_UserData", JSON.stringify(action.payload));
    return { ...state, userData: action.payload };
  }

  if (action.type === "userSignout") {
    localStorage.removeItem("RB_UserData");
    return { ...state, userData: null };
  }

  return state;
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <UserContext.Provider value={{ state, dispatch, TYPES }}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
