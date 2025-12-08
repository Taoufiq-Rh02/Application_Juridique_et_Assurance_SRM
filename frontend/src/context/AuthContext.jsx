import { createContext, useContext, useState, useEffect } from "react";
import { getToken, setToken as saveToken, removeToken as clearToken } from "../utils/auth";
// import jwtDecode from "jwt-decode";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Initialize user from token on first load
  useEffect(() => {
    const token = getToken();
    if (token) {
      const decoded = jwtDecode(token);
      setUser({ id: decoded.id, role: decoded.role_name, role_id: decoded.role_id });
    }
  }, []);

  const login = (token) => {
    saveToken(token);
    const decoded = jwtDecode(token);
    setUser({ id: decoded.id, role: decoded.role_name, role_id: decoded.role_id });
  };

  const logout = () => {
    clearToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
