
import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

//styles
import styles from './Login.module.css'

export default function Signup() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { error, isPending, login } = useLogin()

	const handleSubmit = (e) => {
		e.preventDefault()
		login(email, password)
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className={styles.login}>
				<h2>Login Page</h2>
				<label>
					<span>Email:</span>
					<input 
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						/>
				</label>
				<label>
					<span>Password:</span>
					<input 
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						/>
				</label>
				{!isPending && <button>Login</button>}
				{isPending && <button>Loading</button>}
				{error && <p>{error}</p>}
			</form>

		</div>
	)
}
