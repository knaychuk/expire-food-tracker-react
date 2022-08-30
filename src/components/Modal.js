
import styles from './Modal.module.css'


export default function Modal({ setShowModal }) {

	const handleSubmit = () => {
		setShowModal(false)
		
	}

	return (
		<div className={styles.modal}>
			<div className={styles.content}>
				<h2>Add Item</h2>
				<form onSubmit={handleSubmit}>
					<label>
						<span>Name</span>
						<input type="text" />
					</label>
					<label>
						<span>Name</span>
						<input type="text" />
					</label>
					<label>
						<span>Name</span>
						<input type="text" />
					</label>
					<div className={styles.button}>
						<button>Add</button>
					</div>
				</form>

		
			</div>
		</div>
	)
}
