import styles from './ItemList.module.css'

export default function ItemList({ items }) {
	return (
		<div>
			<ul className={styles.items}>
			{items.map(item => (
				<li key={item.id}>
					<span className={styles.quantity}>{item.quantity}</span>
					<span>&nbsp;</span>
					<span className={styles.name}>{item.name}</span>
          <span className={styles.expiry}>{item.expiryDate}</span>

				</li>
			))}
			</ul>
		</div>
	)
}
