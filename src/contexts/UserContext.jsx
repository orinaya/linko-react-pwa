'use client'

import { createContext, useContext, useEffect, useReducer } from "react";
import { getAllUsers } from "@/services/api";

const UserContext = createContext();

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const actionTypes = {
  LOAD_USERS: "LOAD_USERS",
  LOADING: "LOADING",
  ERROR: "ERROR",
  RESET: "RESET",
};

const userReducer = (previousState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      return {
        ...previousState,
        users: action.data,
        error: null,
        loading: false,
      };
    case actionTypes.LOADING:
      return {
        ...previousState,
        loading: true,
      };
    case actionTypes.ERROR:
      return {
        ...previousState,
        error: action.error,
      };
    case actionTypes.RESET:
      return initialState;
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
};

const userFactory = (previousState, dispatch) => ({
  loadUsers: async () => {
    dispatch({ type: actionTypes.LOADING });
    try {
      const data = await getAllUsers();
      console.log("Data reçue dans UserContext :", data);
      dispatch({ type: actionTypes.LOAD_USERS, data });
    } catch (error) {
      console.error("Erreur loadUsers :", error);
      dispatch({ type: actionTypes.ERROR, error });
    }
  },
});

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const user = userFactory(state, dispatch);

  useEffect(() => {
    user.loadUsers();
  }, []);

  return (
    <UserContext.Provider value={{ ...state, ...user }}>
      {children}
    </UserContext.Provider>
  );
};

const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};

export {
  UserProvider,
  useUsers,
}