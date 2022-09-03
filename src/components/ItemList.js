//firebase
import { db } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

//styles
import styles from './ItemList.module.css'

export default function ItemList({ items }) {

	const handleClick = async (id) => {
		await deleteDoc( doc(db, 'items', id))
	}

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
