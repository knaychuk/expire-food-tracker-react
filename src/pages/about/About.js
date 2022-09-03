import { Link } from 'react-router-dom'

//hooks
import { useAuthContext } from '../../hooks/useAuthContext'

//styles
import styles from './About.module.css'

export default function About() {
	const { user } = useAuthContext()

	return (
		<div className={styles.container}>
			{!user && <>
				<div className={styles.text}>
				<span>Welcome to the Expire.</span> A quick and easy way to keep track of your groceries expiry dates. No more accidentally leaving food until it goes bad.
				Click login, signup, or the buttons below to begin tracking. Once logged in, you will find a list where you can add and delete items accordingly.
				</div> 
				<div className={styles.links}>
						<Link to="/login">Have an account? Click here to login</Link>
						<Link to="/signup">Click here to create an account</Link>
				</div>
			</> }
			{user && <>
				<div className={styles.text}>
				<span>Welcome to the Expire.</span> A quick and easy way to keep track of your groceries expiry dates. No more accidentally leaving food until it goes bad.
				Click on 'My List' to begin tracking. You will find a list where you can add and delete items accordingly.
				</div>
			</>}
		</div>
	)
}
