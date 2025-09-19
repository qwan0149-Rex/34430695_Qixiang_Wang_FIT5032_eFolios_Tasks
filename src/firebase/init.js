// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCLPanEdcgKAJGJerD9Bs8PRWm_oNjdh0U',
  authDomain: 'week7-qixiang-wang.firebaseapp.com',
  projectId: 'week7-qixiang-wang',
  storageBucket: 'week7-qixiang-wang.firebasestorage.app',
  messagingSenderId: '639379896871',
  appId: '1:639379896871:web:2fb5ca10bb9c9634272c02',
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
