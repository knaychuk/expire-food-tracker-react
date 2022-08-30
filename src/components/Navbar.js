import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

//styles
import styles from './Navbar.module.css'

export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<ul>
				<Link className={styles.logo} to="/"><img  src={Logo} alt="Brand Logo" /></Link>

				<li className={styles.link}><Link to="/">Home</Link></li>
				<li className={styles.link}><Link to="/about">About</Link></li>
				<li><span className={styles.divider}></span></li>
				<li className={styles.link}><Link to="/login">Login</Link></li>
				<li className={styles.link}><Link to="/signup">Signup</Link></li>

				<button>Logout</button>
			</ul>

		</div>
	)
}
