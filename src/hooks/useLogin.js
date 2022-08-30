import { useState } from "react"
import { useAuthContext } from "./useAuthContext"


import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/config"

export const useLogin = () => {
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)
	const { dispatch } = useAuthContext()

	const login = async (email, password) => {
		setError(null)
		setIsPending(false)

		signInWithEmailAndPassword(auth, email, password)
			.then((res) => {
				setIsPending(true)
				dispatch({ type: 'LOGIN', payload: res.user })
			})
			.catch((err) => {
				setIsPending(false)
				setError(err.message)
			})
		
		}


	return { error, isPending, login }
}