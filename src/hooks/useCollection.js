import { useState, useEffect, useRef } from "react"
import { db } from "../firebase/config"
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"

export const useCollection = (c, _query, _orderBy) => {
	const [documents, setDocuments] = useState(null)



	useEffect(() => {
		let ref = collection(db, c)

		
			const q = query(ref, where(..._query), orderBy(..._orderBy))

			
	
		const unsub = onSnapshot(q, (snapshot) => {
			let results = []
			snapshot.docs.forEach(doc => {
				results.push({ ...doc.data(), id: doc.id })
			})
			setDocuments(results)
		})

		return () => unsub()
	}, [c])

	return { documents }
}