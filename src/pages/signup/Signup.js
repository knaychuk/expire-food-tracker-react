import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

//styles
import styles from './Signup.module.css'

export default function Signup() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const { error, isPending, signup } = useSignup()

	const handleSubmit = (e) => {
		e.preventDefault()
		signup(email, password, username)
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className={styles.signup}>
				<h2>Signup</h2>
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
				<label>
					<span>Username:</span>
					<input 
						type="text"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						/>
				</label>
				{!isPending && <button>Sign Up</button>}
				{isPending && <button>Loading</button>}
				{error && <p>{error}</p>}
			</form>

		</div>
	)
}
