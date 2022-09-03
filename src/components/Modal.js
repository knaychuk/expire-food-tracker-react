import { useState } from 'react'

//firebase
import { db } from '../firebase/config'
import { addDoc, collection } from 'firebase/firestore'

//hooks
import { useAuthContext } from '../hooks/useAuthContext'

//styles
import styles from './Modal.module.css'


export default function Modal({ setShowModal }) {
	const [name, setName] = useState('')
	const [category, setCategory] = useState('')
	const [quantity, setQuantity] = useState(0)
	const [expiryDate, setExpiryDate] = useState('')
	const [days, setDays] = useState(0)

	const { user } = useAuthContext()


	const handleSubmit = async (e) => {
		e.preventDefault()
		setShowModal(false)


		await addDoc(collection(db, 'items'), {
			name,
			category, 
			quantity, 
			expiryDate,
			days,
			uid: user.uid
		})


	}

	return (
		<div className={styles.modal}>
			<div className={styles.content}>
				<h2>Add Item</h2>
				<form onSubmit={handleSubmit}>
					<label>
						<span>Item Name:</span>
						<input 
							type="text" 
							placeholder='e.g Loaf of Bread'
							onChange={(e) => setName(e.target.value)}
							value={name}
							required
							/>
					</label>
					<label>
						<span>Category:</span>
						<select 
							onChange={(e) => setCategory(e.target.value)} required defaultValue={'DEFAULT'}>
							<option value="DEFAULT" disabled> -- select an option -- </option>
							<option value="fruits">Fruits</option>
							<option value="vegetables">Vegetables</option>
							<option value="dairy">Dairy</option>
							<option value="meat">Meat</option>
							<option value="grains">Grains</option>
							<option value="canned goods">Canned Goods</option>
							<option value="dry foods">Dry Foods</option>
							<option value="condiments/seasonings">Condiments/Seasonings</option>
							<option value="snacks">Snacks</option>
							<option value="other">Other</option>
						</select>
					</label>
					<label>
						<span>Quantity:</span>
						<input 
							type="number" 
							onChange={(e) => setQuantity(e.target.value)}
							value={quantity}	
							required
						/>
					</label>
					<label>
						<span>Expiry Date:</span>
						<input 
							type="date" 
							onChange={(e) => setExpiryDate(e.target.value)}
							value={expiryDate}
							required
						/>
					</label>
					<div className={styles.button}>
						<button type='submit'>Add</button>
						<button onClick={() => setShowModal(false)}>Cancel</button>
					</div>
				</form>

		
			</div>
		</div>
	)
}
