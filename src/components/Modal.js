
import { useState } from 'react'
import styles from './Modal.module.css'


export default function Modal({ setShowModal }) {
	const [name, setName] = useState('')
	const [category, setCategory] = useState('')
	const [quantity, setQuantity] = useState(0)
	const [expiryDate, setExpiryDate] = useState('')


	const handleSubmit = () => {
		setShowModal(false)
		addDocument({
			name,
			category, 
			quantity, 
			expiryDate})
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
							onChange={(e) => setName(e.target.value)}
							value={name}
							/>
					</label>
					<label>
						<span>Category:</span>
						<select 
							onChange={(e) => setCategory(e.target.value)}>
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
						/>
					</label>
					<label>
						<span>Expiry Date:</span>
						<input 
							type="date" 
							onChange={(e) => setExpiryDate(e.target.value)}
							value={expiryDate}
						/>
					</label>
					<div className={styles.button}>
						<button>Add</button>
					</div>
				</form>

		
			</div>
		</div>
	)
}
