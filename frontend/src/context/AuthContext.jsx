import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  signupUser,
  loginUser,
  checkAuthStatus,
  logoutUser,
} from "../services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const userData = await checkAuthStatus();
        setUser(userData);
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    verifyUser();
  }, []);

  const signup = async (userData) => {
    try {
      const response = await signupUser(userData);
      localStorage.setItem("token", response.token);
      setUser(response.user);
      navigate("/dashboard");
    } catch (error) {
      throw error;
    }
  };

  const login = async (credentials) => {
    try {
      const response = await loginUser(credentials);
      localStorage.setItem("token", response.token);
      setUser(response.user);
      navigate("/dashboard");
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
