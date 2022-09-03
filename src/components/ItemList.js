import { useEffect, useState } from 'react'

import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

import styles from './ItemList.module.css'

export default function ItemList({ items }) {
	const [isExpired, setIsExpired] = useState(false)

	const handleClick = async (id) => {
		await deleteDoc( doc(db, 'items', id))
	}

	let currentDate = new Date().toISOString().substring(0, 10)

	useEffect(() => {
	
		console.log(currentDate)
		items.forEach(item => {

			if(item.expiryDate > currentDate) {
			} else {
			}
		})
	}, [])
	

	return (
		<div>
			<ul className={styles.items}>
			{items.map(item => (
				<li key={item.id}>
					<span className={styles.quantity}>{item.quantity}</span>
					<span>&nbsp;</span>
					<span>&nbsp;</span>
					<span className={styles.name}>{item.name}</span>
          <span className={styles.expiry}>Expires on {item.expiryDate}</span>
				
					<button onClick={() => handleClick(item.id)}>X</button>
				</li>
			))}
			</ul>
		</div>
	)
}
