import { Injectable } from '@angular/core';
import { firebaseConfig } from '../../assets/environments/environment';
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth"

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  private app = initializeApp(firebaseConfig)
  private db = getFirestore(this.app)
  private auth  = getAuth(this.app)
  private provider = new GoogleAuthProvider()

  constructor() { }

  createAccount(){}

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

  getCurrentUser(){
    const user = this.auth.currentUser
    return user
  }

  
  
}
