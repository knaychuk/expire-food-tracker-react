import { useEffect, useState } from 'react'

import { useAuthContext } from '../../hooks/useAuthContext'
import Modal from '../../components/Modal'

//styles
import styles from './Home.module.css'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useCollection } from '../../hooks/useCollection'
import ItemList from '../../components/ItemList'



export default function Home() {
	const [showModal, setShowModal] = useState(false)
	const { user } = useAuthContext()
	const { documents } = useCollection(
		'items',
		["uid", "==", user.uid],
		["expiryDate", "asc"]
		)

	const handleClick = () => {
		setShowModal(true)
	}

	return (
		<div className={styles.home}>
			<div className={styles.content}>
		
				<div className={styles.heading}>
					
					<h1>{user.displayName}'s List</h1>
					
					<button onClick={handleClick}>Add Item</button>
				</div>
				{documents && <ItemList items={documents}/>}
				{showModal && <Modal setShowModal={setShowModal}/>}
			</div>
		</div>
	)
}
