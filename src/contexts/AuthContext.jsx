'use client'
import { useRouter, usePathname } from 'next/navigation'
import { createContext, useContext, useEffect, useReducer, useState } from 'react'
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
      handleError(dispatch, error)
    }
  },
  logout: async () => {
    try {
      await supabase.auth.signOut()
    } catch (error) {
      console.error('Erreur lors de la déconnexion Supabase:', error)
    }
    if (typeof window !== 'undefined') {
      localStorage.removeItem('@AUTH')
    }
    dispatch({
      type: actionTypes.LOGOUT
    })
    router.push('/');
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
  const [isInitialized, setIsInitialized] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Charge l'état depuis localStorage côté client
  useEffect(() => {
    if (typeof window === 'undefined') return

    const saved = localStorage.getItem('@AUTH')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (parsed?.user) {
          dispatch({ type: actionTypes.LOAD_USER_DATA, data: parsed.user })
        }
      } catch (e) {
        console.error('Erreur de parsing localStorage @AUTH', e)
      }
    }
    setIsInitialized(true)
  }, [])

  // Fetch depuis supabase si non trouvé dans localStorage
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

    if (isInitialized && !state.user) {
      fetchUser()
    }
  }, [isInitialized, state.user])

  // Sauvegarde dans localStorage à chaque mise à jour du user
  useEffect(() => {
    if (typeof window !== 'undefined' && state.user) {
      localStorage.setItem('@AUTH', JSON.stringify({ user: state.user }))
    }
  }, [state.user])

  // Vérifie si l'utilisateur a un profil associé
  useEffect(() => {
    const checkUserProfiles = async () => {
      try {
        const { data, error } = await supabase
          .from('User_Profile')
          .select('profile_id')
          .eq('user_id', state.user.id)

        if (error) {
          console.error("Erreur lors de la vérification des profils :", error)
          return
        }

        const hasProfile = data && data.length > 0

        if (!hasProfile && pathname !== '/create-profile') {
          router.push('/create-profile')
        } else if (hasProfile && (pathname === '/' || pathname === '/create-profile')) {
          router.push('/locate')
        }
      } catch (err) {
        console.error('Erreur lors du check des profils :', err)
      }
    }

    if (state.user && state.hasCheckedAuth) {
      checkUserProfiles()
    }
  }, [state.user, state.hasCheckedAuth, pathname])

  return (
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
