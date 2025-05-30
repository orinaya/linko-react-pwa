'use client'

import { createContext, useContext, useEffect, useReducer } from "react";
import { getMyProfiles } from "@/services/auth/profile";

const ProfileContext = createContext();

const initialState = {
  profiles: [],
  loading: false,
  error: null,
};

const actionTypes = {
  LOAD_PROFILES: "LOAD_PROFILES",
  LOADING: "LOADING",
  ERROR: "ERROR",
  RESET: "RESET",
};

const profileReducer = (previousState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PROFILES:
      return {
        ...previousState,
        profiles: action.data,
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

const profileFactory = (previousState, dispatch) => ({
  loadProfiles: async () => {
    dispatch({ type: actionTypes.LOADING });
    try {
      const data = await getMyProfiles();
      console.log("Data reçue dans ProfileContext :", data);
      dispatch({ type: actionTypes.LOAD_PROFILES, data });
    } catch (error) {
      console.error("Erreur loadProfiles :", error);
      dispatch({ type: actionTypes.ERROR, error });
    }
  },
});

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const { loadProfiles } = profileFactory(state, dispatch);

  useEffect(() => {
    loadProfiles();
  }, []);

  return (
    <ProfileContext.Provider value={{ ...state, loadProfiles }}>
      {children}
    </ProfileContext.Provider>
  );
};

const useProfiles = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfiles must be used within a ProfileProvider");
  }
  return context;
};

export {
  ProfileProvider,
  useProfiles,
}