import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  myform! : FormGroup
  constructor(private fb : FormBuilder){

  }
  ngOnInit(): void {
    this.myform = this.fb.group({
      username : new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }


  onsubmit(){}

}
