import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule , RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  myform! : FormGroup
  constructor(private fb : FormBuilder , private authService : AuthService){

  }
  ngOnInit(): void {
    this.myform = this.fb.group({
      username : new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }


  onsubmit(){
    console.log('form :' + this.myform.value.username);
    console.log('form :' + this.myform.value.password);
    this.authService.authenticate(this.myform.value.username,this.myform.value.password);
  }

}
