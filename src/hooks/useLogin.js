import { useState } from "react"

//hooks
import { useAuthContext } from "./useAuthContext"

//firebase
import { auth } from "../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"

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
				setError(err.code)
			})
		}

	return { error, isPending, login }
}