'use client'

import { createContext, useContext, useEffect, useReducer } from "react";
import { getAllGroups } from "@/services/api";

const GroupContext = createContext();

const initialState = {
  groups: [],
  loading: false,
  error: null,
};

const actionTypes = {
  LOAD_GROUPS: "LOAD_GROUPS",
  LOADING: "LOADING",
  ERROR: "ERROR",
  RESET: "RESET",
};

const groupReducer = (previousState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_GROUPS:
      return {
        ...previousState,
        groups: action.data,
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

const groupFactory = (previousState, dispatch) => ({
  loadGroups: async () => {
    dispatch({ type: actionTypes.LOADING });
    try {
      const data = await getAllGroups();
      console.log("Data reçue dans GroupContext :", data);
      dispatch({ type: actionTypes.LOAD_GROUPS, data });
    } catch (error) {
      console.error("Erreur loadGroups :", error);
      dispatch({ type: actionTypes.ERROR, error });
    }
  },
});

const GroupProvider = ({ children }) => {
  const [state, dispatch] = useReducer(groupReducer, initialState);
  const { loadGroups } = groupFactory(state, dispatch);

  useEffect(() => {
    loadGroups();
  }, []);

  return (
    <GroupContext.Provider value={{ ...state, loadGroups }}>
      {children}
    </GroupContext.Provider>
  );
};

const useGroups = () => {
  const context = useContext(GroupContext);
  if (!context) {
    throw new Error("useGroups must be used within a GroupProvider");
  }
  return context;
};

export {
  GroupProvider,
  useGroups,
}