import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { BrowserStorageService } from '../../shared/browser-storage.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: []
})
export class LoginComponent implements OnInit {
  
  LoginForm! : FormGroup
  showPassword = false
  constructor(private fb: FormBuilder, private fire: FirebaseService, private router: Router, private storage: BrowserStorageService   ){}

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  handleSubmit(){
    console.log(this.LoginForm.value)
    
  }

  async signInWithGoogle(){
    try {
      const res = await this.fire.signInWIthGoogle()
      const userString = JSON.stringify(res.user.toJSON())
      this.storage.set('userInfo', userString)
      this.router.navigate(['/'])
    } catch (error) {
      alert(error)
    }
  }

  get email () {
    return this.LoginForm.get('email')
  }
  get password () {
    return this.LoginForm.get('password')
  }
} 
