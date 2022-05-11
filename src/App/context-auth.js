import React, { useContext, useState } from "react";

export const AuthContext = React.createContext();
export const AuthUpdateContext = React.createContext();


export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  return (
    <AuthContext.Provider value={auth}>
      <AuthUpdateContext.Provider value={(value) => setAuth(value)}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
}

// Custom Hooks
export const useAuth = () => useContext(AuthContext);

export const useAuthUpdate = () => useContext(AuthUpdateContext);

