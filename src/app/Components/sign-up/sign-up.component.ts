import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/iuser';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule  , CommonModule , RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  user: IUser = {
    id: 0 ,
    username: '',
    email: '',
    password: '',
    role: ''
  };
  constructor(private fb : FormBuilder , private authService : AuthService){}
  onsubmit() {
    console.log(this.myform.value.username);
    this.user.username = this.myform.value.username ;
    this.user.email = this.myform.value.email ;
    this.user.password = this.myform.value.password ;
    this.user.role = this.myform.value.role ;
    console.log('user . ' +this.user.username);
    this.user = Object.assign({}, this.myform.value)
    console.log('user . ' +this.user.username);
    this.authService.SignUp(this.user).subscribe(
      (response) => {
        console.log('Signup successful:', response);
        // Optionally, you can reset the form after successful signup
        this.myform.reset();
      },
      (error) => {
        console.error('Error signing up:', error);
        // Handle error
      }
    );

  }

  myform! : FormGroup ;
  ngOnInit(): void {
    this.myform = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('freelancer')
    });
  }
  updateRole(event: Event): void {
    const selectedRole = (event.target as HTMLInputElement).value;
    this.myform.patchValue({
      role: selectedRole
    });
  
  }


}
