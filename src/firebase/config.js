import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBdVeGPQBoPvb0_DBnGg4knwuZbtqALXQs",
  authDomain: "expire-172fd.firebaseapp.com",
  projectId: "expire-172fd",
  storageBucket: "expire-172fd.appspot.com",
  messagingSenderId: "294018044881",
  appId: "1:294018044881:web:eb1589e980d748afa286f0"
};

initializeApp(firebaseConfig)

//init firestore
const db = getFirestore()

//init auth
const auth = getAuth()

export { db, auth }

