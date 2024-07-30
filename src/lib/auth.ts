import { jwtDecode } from "jwt-decode";
import { User } from "./types";

// Get the user by decoding the token from local storage
export const getAuthenticatedUser = (): User => {
  const token = localStorage.getItem("token") as string;
  const decodedToken = jwtDecode<User>(token);
  return decodedToken;
};

// Get the token from local storage
export const getAuthenticatedUserToken = (): string | null => {
  return localStorage.getItem("token");
};

// Store the token in local storage
export const storeAuthenticatedUserToken = (token: string): void => {
  localStorage.setItem("token", token);
};
