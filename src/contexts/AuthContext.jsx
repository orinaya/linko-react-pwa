'use client'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { supabaseGetUser, supabaseLogin, supabaseRegister } from '../services/auth/auth'
import { supabase } from '../services/api'

const AuthContext = createContext()

const initialState = {
  user: null,
  jwt: null,
  isLoggedIn: false,
  loading: false,
  error: null,
  hasCheckedAuth: false,
}

const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  LOAD_USER_DATA: 'LOAD_USER_DATA',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
  LOGOUT: 'LOGOUT'
}

// previousState = état précédent
const authReducer = (previousState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.REGISTER_SUCCESS:
      return {
        user: action.data.user,
        jwt: action.data.jwt,
        isLoggedIn: true,
        loading: false,
        error: null
      }
    case actionTypes.LOAD_USER_DATA:
      return {
        ...previousState,
        user: action.data,
        loading: false,
        hasCheckedAuth: true,
        error: null
      }
    case actionTypes.LOADING:
      return {
        ...previousState,
        loading: true
      }
    case actionTypes.ERROR:
      return {
        ...initialState,
        hasCheckedAuth: true,
        error: action.error
      }
    case actionTypes.LOGOUT:
      return {
        ...initialState,
        hasCheckedAuth: true,
      }
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const authFactory = (previousState, dispatch, router) => ({
  login: async (credentials) => {
    dispatch({
      type: actionTypes.LOADING
    })
    try {
      const loginData = await supabaseLogin(credentials)
      if (loginData.user && loginData.jwt) {
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          data: loginData
        })
        router.push('/locate')
      }
    } catch (error) {
      handleError(dispatch, error)
    }
  },
  register: async (user) => {
    dispatch({
      type: actionTypes.LOADING
    })
    try {
      const registerData = await supabaseRegister(user)
      if (registerData.user && registerData.jwt) {
        dispatch({
          type: actionTypes.REGISTER_SUCCESS,
          data: registerData
        })
        router.push('/locate')
      }
    } catch (error) {
      handleError(dispatch, error)
    }
  },
  loadUserData: async () => {
    dispatch({
      type: actionTypes.LOADING
    })
    try {
      const user = await supabaseGetUser()
      if (user) {
        dispatch({
          type: actionTypes.LOAD_USER_DATA,
          data: user
        })
      }
    } catch (error) {
      handleError(error)
    }
  },
  logout: () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
    router.push('/')
  }
})

const handleError = (dispatch, error) => {
  console.error(error)
  dispatch({
    type: actionTypes.ERROR,
    error: error?.message || 'Une erreur est survenue'
  })
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  const router = useRouter()
  // Charge le state sauvegardé UNIQUEMENT côté client
  // Charger depuis localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedState = JSON.parse(localStorage.getItem('@AUTH'))
      if (savedState) {
        dispatch({ type: actionTypes.LOAD_USER_DATA, data: savedState.user })
      }
    }
  }, [])
  // Vérifier avec Supabase si l’utilisateur est connecté
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser()
        if (error || !data?.user) {
          dispatch({ type: actionTypes.ERROR, error })
          return
        }

        dispatch({
          type: actionTypes.LOAD_USER_DATA,
          data: data.user
        })
      } catch (err) {
        dispatch({ type: actionTypes.ERROR, error: err })
      }
    }

    if (!state.user) {
      fetchUser()
    }
  }, [])

  // Sauvegarde dans localStorage à chaque changement
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('@AUTH', JSON.stringify(state))
    }
  }, [state])


  return (
    // <AuthContext.Provider value={{ state, ...authFactory(state, dispatch, router) }}>
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        isLoggedIn: state.isLoggedIn,
        error: state.error,
        ...authFactory(state, dispatch, router)
      }}
    >
      {children}
    </AuthContext.Provider >
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside a AuthProvider')
  return context
}

export {
  AuthProvider,
  useAuth
}
