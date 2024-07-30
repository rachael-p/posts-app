import { login } from "@/lib/api";
import { useStore } from "@/lib/store";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { getAuthenticatedUser } from "@/lib/auth";

// This custom hook, useMutationUser, is designed to manage user authentication-related state changes and handle login operations within our application. It encapsulates the logic for logging in a user and updating the global state accordingly.

function useMutationUser() {
  const { toast } = useToast();
  const setUser = useStore((state) => state.setUser);
  const clearUser = useStore((state) => state.clearUser);

  const loginUser = async (username: string, password: string) => {
    try {
      const user = await login(username, password);
      setUser(user);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to login",
        description:
          (error as Error).message ||
          "There was an error signing you in. Please try again later.",
      });
    }
  };

    useEffect(() => {
    try {
      const user = getAuthenticatedUser();
      setUser(user);    // if user is already authenticated, updates global state
    } catch (error) {
      clearUser();  // if token is invalid or expired, clears data from global state
    }
  }, []); // runs when component is mounted to check if the user is already authenticated 

  return { loginUser };
}

export default useMutationUser;
