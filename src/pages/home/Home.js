import { useState } from 'react'

import { useAuthContext } from '../../hooks/useAuthContext'
import Modal from '../../components/Modal'

//styles
import styles from './Home.module.css'


export default function Home() {
	const [showModal, setShowModal] = useState(false)
	const { user } = useAuthContext()
	
	const handleClick = () => {
		setShowModal(true)
	}

	return (
		<div>
			<h1>{user.displayName}'s List</h1>
			<button onClick={handleClick}>Add Item</button>
			{showModal && <Modal setShowModal={setShowModal}/>}
			<ul>

			</ul>
		</div>
	)
}
