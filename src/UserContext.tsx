import React, { createContext, useContext, useReducer } from "react";

interface UserState {
  id: string;
  token: string;
}

interface UserContextValue {
  state: UserState;
  setAuth: (id: string, token: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const useUserContext = (): UserContextValue => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

const userReducer = (state: UserState, action: any) => {
  switch (action.type) {
    case "SET_AUTH":
      return { id: action.payload.id, token: action.payload.token };
    case "LOGOUT":
      return { id: "", token: "" };
    default:
      return state;
  }
};

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const initialState: UserState = { id: "", token: "" };
  const [state, dispatch] = useReducer(userReducer, initialState);

  const setAuth = (id: string, token: string) => {
    dispatch({ type: "SET_AUTH", payload: { id, token } });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const value: UserContextValue = {
    state,
    setAuth,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};