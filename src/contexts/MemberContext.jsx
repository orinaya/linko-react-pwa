'use client'

import { createContext, useContext, useEffect, useReducer } from "react";
import { getAllMembers } from "@/services/api";

const MemberContext = createContext();

const initialState = {
  members: [],
  loading: false,
  error: null,
};

const actionTypes = {
  LOAD_MEMBERS: "LOAD_MEMBERS",
  LOADING: "LOADING",
  ERROR: "ERROR",
  RESET: "RESET",
};

const memberReducer = (previousState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_MEMBERS:
      return {
        ...previousState,
        members: action.data,
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

const memberFactory = (previousState, dispatch) => ({
  loadMembers: async () => {
    dispatch({ type: actionTypes.LOADING });
    try {
      const data = await getAllMembers();
      console.log("Data reçue dans MemberContext :", data);
      dispatch({ type: actionTypes.LOAD_MEMBERS, data });
    } catch (error) {
      console.error("Erreur loadMembers :", error);
      dispatch({ type: actionTypes.ERROR, error });
    }
  },
});

const MemberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(memberReducer, initialState);
  const member = memberFactory(state, dispatch);

  useEffect(() => {
    member.loadMembers();
  }, []);

  return (
    <MemberContext.Provider value={{ ...state, ...member }}>
      {children}
    </MemberContext.Provider>
  );
};

const useMembers = () => {
  const context = useContext(MemberContext);
  if (!context) {
    throw new Error("useMembers must be used within a MemberProvider");
  }
  return context;
};

export {
  MemberProvider,
  useMembers,
}