import React, { useContext, useState } from "react";
export const AuthContext = React.createContext();
export const UserContext = React.createContext();
export const AuthUpdateContext = React.createContext();

const nameKey = "auth";
const nameLogin = "login";
const initialStateUser = () => JSON.parse(localStorage.getItem(nameLogin));
const initialStateAuth = () => sessionStorage.getItem(nameKey) != null || initialStateUser() != null;

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(initialStateAuth());
  const [user, setUser] = useState(initialStateUser() || {});
  const toggleAuth = (value, user) => {
    if (value) {
      setUser(user);
      sessionStorage.setItem(nameKey, value);
      localStorage.setItem(nameLogin, JSON.stringify(user));
    } else {
      sessionStorage.removeItem(nameKey);
      localStorage.removeItem(nameLogin);
    }
    setAuth(value);
  };
  return (
    <AuthContext.Provider value={auth}>
      <UserContext.Provider value={user}>
        <AuthUpdateContext.Provider value={toggleAuth}>
          {children}
        </AuthUpdateContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

// Custom Hooks
export const useAuth = () => useContext(AuthContext);
export const useEmployee = () => useContext(UserContext);

export const useAuthUpdate = () => useContext(AuthUpdateContext);
