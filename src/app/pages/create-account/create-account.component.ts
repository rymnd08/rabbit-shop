import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup , ReactiveFormsModule, Validators, AbstractControl} from '@angular/forms';
import { RouterModule } from '@angular/router';

type errors = {
  minLength: number
  actualLength: number
}

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, JsonPipe],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  CreateAccountForm! : FormGroup
  showPassword = false
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.CreateAccountForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {validator: this.passwordMatchValidator})
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value
    const confirmPassword = control.get('confirmPassword')?.value

    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }

    return null;
  }

  handleSubmit(){
    console.log(this.CreateAccountForm.value)
  }

  get password(){
    return this.CreateAccountForm.get('password')
  }
  get confirmPassword(){
    return this.CreateAccountForm.get('confirmPassword')
  }
  get email(){
    return this.CreateAccountForm.get('email')
  }

} 
