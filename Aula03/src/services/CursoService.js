import {collection, doc, getDoc} from 'firebase/firestore'
import {db} from '../config/firebase.js'

const cursosRef = collection(db,"cursos")

export const getCursos = async () => {
    const snapshot = await getDocs(cursosRef)
    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
}