import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null); // <-- new

  // Check if token exists in localStorage on page refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role"); // <-- new
    if (token) {
      setIsAuthenticated(true);
      setRole(storedRole); // <-- new
    }
  }, []);

  const login = (token, userRole) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", userRole); // <-- new
    setIsAuthenticated(true);
    setRole(userRole); // <-- new
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role"); // <-- new
    setIsAuthenticated(false);
    setRole(null); // <-- new
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
