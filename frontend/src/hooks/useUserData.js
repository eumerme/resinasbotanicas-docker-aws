import { useContext } from "react";
import { UserContext } from "../contexts";

export function useUserData() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("User context not found");
  }
  return context;
}
