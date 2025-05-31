'use client'

import { createContext, useContext, useEffect, useReducer } from "react";
import { getMyProfiles } from "@/services/user-datas/profile";

const ProfileContext = createContext();

const initialState = {
  profiles: [],
  currentProfile: null,
  loading: false,
  error: null,
};

const actionTypes = {
  LOAD_PROFILES: "LOAD_PROFILES",
  SET_CURRENT_PROFILE: "SET_CURRENT_PROFILE",
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
        currentProfile: action.data[0] || null,
        error: null,
        loading: false,
      };
    case actionTypes.SET_CURRENT_PROFILE:
      return {
        ...previousState,
        currentProfile: action.profile,
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
      dispatch({ type: actionTypes.LOAD_PROFILES, data });
    } catch (error) {
      console.error("Erreur loadProfiles :", error);
      dispatch({ type: actionTypes.ERROR, error });
    }
  },
  setCurrentProfile: (profile) => {
    dispatch({ type: actionTypes.SET_CURRENT_PROFILE, profile });
  },
});

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const { loadProfiles, setCurrentProfile } = profileFactory(state, dispatch);

  useEffect(() => {
    loadProfiles();
  }, []);

  return (
    <ProfileContext.Provider value={{ ...state, loadProfiles, setCurrentProfile }}>
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