import { createContext, useEffect, useReducer } from "react"

import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase/config'

export const AuthContext = createContext()

export const AuthReducer = (state, action) => {
	switch(action.type) {
		case 'AUTH_IS_READY':
			return { ...state, user: action.payload, authIsReady: true }
		case 'LOGIN':
			return { ...state, user: action.payload}
		
		default:
			return state
	}
}

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, {
		user: null,
		authIsReady: false
	})

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, user => {
			dispatch({ type: 'AUTH_IS_READY', payload: user})
			unsub()
		})
	}, [])


	console.log(state)

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	)
}

