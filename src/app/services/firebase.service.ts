import { Injectable } from '@angular/core';
import { firebaseConfig } from '../../assets/environments/environment';
import { initializeApp } from "firebase/app";


@Injectable({
  providedIn: 'root'
})


// Initialize Firebase


export class FirebaseService {

  private app = initializeApp(firebaseConfig)

  constructor() { }
}
