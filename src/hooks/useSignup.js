import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

import { createUserWithEmailAndPassword } from "firebase/auth"
import { updateProfile } from "firebase/auth"
import { auth } from "../firebase/config"

export const useSignup = () => {
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)
	const { dispatch } = useAuthContext()

	const signup = async (email, password, username) => {
		setError(null)
		setIsPending(false)

		createUserWithEmailAndPassword(auth, email, password)
			.then((res) => {
				setIsPending(true)
				dispatch({ type: 'LOGIN', payload: res.user })
				updateProfile(res.user, {
					displayName: username
				})
			})
			.catch((err) => {
				setIsPending(false)
				setError(err.message)
			})
		
		}


	return { error, isPending, signup }
}