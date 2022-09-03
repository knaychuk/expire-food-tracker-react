import { useState } from "react"
import { useNavigate } from "react-router-dom"

//hooks
import { useAuthContext } from "./useAuthContext"

//firebase
import { auth } from "../firebase/config"
import { signOut } from "firebase/auth"

export const useLogout = () => {
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)
	const { dispatch } = useAuthContext()
	const navigate = useNavigate()

	const logout = async () => {
		setError(null)
		setIsPending(false)

		signOut(auth)
			.then(() => {
				setIsPending(true)
				dispatch({ type: 'LOGOUT' })
			})
			.catch((err) => {
				setIsPending(false)
				setError(err.message)
			})

		navigate('/login')
		}

	return { error, isPending, logout }
}