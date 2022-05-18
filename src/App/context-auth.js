import React, { useContext, useState } from "react";
export const AuthContext = React.createContext();
export const UserContext = React.createContext();
export const AuthUpdateContext = React.createContext();

const nameKey = "auth";
const nameLogin = "login";
const initialStateUser = () => JSON.parse(localStorage.getItem(nameLogin));
const checkUser = (obj) => Object.keys(obj).length != 0;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(initialStateUser() || {});
  const initialStateAuth = () => (sessionStorage.getItem(nameKey) != null && checkUser(user)) || initialStateUser() != null;
  const [auth, setAuth] = useState(initialStateAuth());
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
