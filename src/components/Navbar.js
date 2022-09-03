import { Link, Navigate } from 'react-router-dom'

//assets
import Logo from '../assets/logo.png'

//hooks
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

//styles
import styles from './Navbar.module.css'

export default function Navbar() {
	const { user } = useAuthContext()
	const { logout } = useLogout()


	return (
		<div className={styles.navbar}>
			<ul>
				<Link className={styles.logo} to="/"><img  src={Logo} alt="Brand Logo" /></Link>

				{user && (<li className={styles.link}><Link to="/">My List</Link></li> )}
				<li className={styles.link}><Link to="/about">About</Link></li>
				<li><span className={styles.divider}></span></li>
				{!user && (<li className={styles.link}><Link to="/login">Login</Link></li>)}
				{!user && (<li className={styles.link}><Link to="/signup">Signup</Link></li>)}

				{user && (<button onClick={logout}>Logout</button>)}
			</ul>

		</div>
	)
}
