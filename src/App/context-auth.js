import React, { useContext, useReducer } from "react";
export const LoginContext = React.createContext();
export const DispatcherContext = React.createContext();

const nameKey = "auth";
const nameLogin = "login";


const initialStateUser = () => JSON.parse(localStorage.getItem(nameLogin)) || {};
const checkUser = (obj) => Object.keys(obj).length != 0;
const initialStateAuth = () => (sessionStorage.getItem(nameKey) != null && checkUser(user)) || initialStateUser() != null;

const initialStateAuthentication = {
  auth: initialStateAuth,
  login: initialStateUser
};
export const ACTION_TYPES = {
  LOG_IN: "sessionLogin/logIn",
  LOG_OUT: "sessionLogin/logOut",
  EDIT_USERNAME: "sessionLogin/editUserName",
  EDIT_EMAIL: "sessionLogin/editEmail"
};
// TO ASK Edit username and email has to be related to the redux state of users?
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOG_IN:
      sessionStorage.setItem(nameKey, action.payload.auth);
      localStorage.setItem(nameLogin, JSON.stringify(action.payload.login));
      return { auth: true, login: action.payload };
    case ACTION_TYPES.LOG_OUT:
      sessionStorage.removeItem(nameKey);
      localStorage.removeItem(nameLogin);
      return { auth: false, login: {} };
    case ACTION_TYPES.EDIT_USERNAME:
      return { ...state, login: { ...login, name: action.payload } };
    case ACTION_TYPES.EDIT_EMAIL:
      return { ...state, login: { ...login, email: action.payload } };
    default:
      console.error("This is not an action: " + action.type);
      return state;
  }
};


export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialStateAuthentication);
  return (
    <LoginContext.Provider value={state}>
      <DispatcherContext.Provider value={dispatch}>
        {children}
      </DispatcherContext.Provider >
    </LoginContext.Provider>
  );
}

// Custom Hooks
export const useLogin = () => useContext(LoginContext);
export const useDispatchLogin = () => useContext(DispatcherContext);

