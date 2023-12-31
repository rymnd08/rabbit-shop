import { Injectable } from '@angular/core';
import { firebaseConfig } from '../../assets/environments/environment';
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore, query, getDocs } from "firebase/firestore"; 
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  private app = initializeApp(firebaseConfig)
  private db = getFirestore(this.app)
  private auth  = getAuth(this.app)
  private provider = new GoogleAuthProvider()
  private storage = getStorage(this.app)

  constructor() { }

  //firebase auth
  signInWIthGoogle(){
    return signInWithPopup(this.auth, this.provider)
  }

  signIn(email: string, password: string){
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  signOut(){
    return signOut(this.auth)
  }

  // firestore
  addDocument(collectionName: string, data: object){
    return  addDoc(collection(this.db, collectionName), data)
  }

  getDocuments(collectionName: string){
    const q = query(collection(this.db, collectionName));
    return  getDocs(q);

  }

  getCurrentUser(){
    const user = this.auth.currentUser
    return user
  }
  
  // upload file 
  uploadFile(fileName: string, file: File){
    const storageRef = ref(this.storage, fileName);
    return uploadBytes(storageRef, file)
  }
  getURL(fileName: string){
    return getDownloadURL(ref(this.storage, fileName))
  }

  
  
}
