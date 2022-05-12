import React, { useContext, useState } from "react";

export const AuthContext = React.createContext();
export const AuthUpdateContext = React.createContext();

const nameKey = "auth";
const initialStateAuth = () => sessionStorage.getItem(nameKey) != null;

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(initialStateAuth);
  const toggleAuth = (value) => {
    if (value) {
      sessionStorage.setItem(nameKey, value);
    } else {
      sessionStorage.removeItem(nameKey);
    }
    setAuth(value);
  };
  return (
    <AuthContext.Provider value={auth}>
      <AuthUpdateContext.Provider value={toggleAuth}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
}

// Custom Hooks
export const useAuth = () => useContext(AuthContext);

export const useAuthUpdate = () => useContext(AuthUpdateContext);
