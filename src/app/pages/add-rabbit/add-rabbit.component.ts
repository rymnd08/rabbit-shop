import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserStorageService } from '../../shared/browser-storage.service';
import { FirebaseService } from '../../services/firebase.service';

const modules = [ReactiveFormsModule]
const components = [NavbarComponent]

@Component({
  selector: 'app-add-rabbit',
  standalone: true,
  imports: [modules, components ],
  templateUrl: './add-rabbit.component.html',
  styleUrl: './add-rabbit.component.css'
})
export class AddRabbitComponent implements OnInit {

  showAlert = false
  alertMessage = ''
  alertType = ''

  addRabbitForm = new FormGroup({
    rabbitName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    breed: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    isAvailable: new FormControl(true),
    userID: new FormControl()
  })

  constructor(public router: Router, private storage: BrowserStorageService, private fire: FirebaseService){}

  ngOnInit(): void {
    this.addUserIDtoForm()
  }

  addUserIDtoForm(){
    // get user info from localStorage
    const userString = this.storage.get('userInfo')
    const user = JSON.parse(userString!)
    this.addRabbitForm.get('userID')?.setValue(user.uid)
  }
  
  async handleSubmit(){
    try {
      await this.fire.addDocument('rabbits', this.addRabbitForm.value)
      this.alertMessage = 'Rabbit was added successfully'
      this.alertType = 'success'
      this.showAlert = true
      setTimeout(()=> this.showAlert = false, 2000)
      this.addRabbitForm.reset()
    } catch (error) {
      this.alertMessage = `Error: ${error}`
      this.alertType = 'error'
      this.showAlert = true
    }
  }

  // getters
  get rabbitName () { return this.addRabbitForm.get('rabbitName')}
  get breed () { return this.addRabbitForm.get('breed')}
  get color () { return this.addRabbitForm.get('color')}
  get price () { return this.addRabbitForm.get('price')}
  get description () { return this.addRabbitForm.get('description')}
  

  
}
