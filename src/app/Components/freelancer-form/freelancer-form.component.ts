import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FreelancerService } from '../../services/freelancer.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-freelancer-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule,HttpClientModule],
  templateUrl: './freelancer-form.component.html',
  styleUrl: './freelancer-form.component.css'
})
export class FreelancerFormComponent implements OnInit {
  freelancerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private freelancerService: FreelancerService,
    private router: Router
  ) {
    this.freelancerForm = this.fb.group({
      userId: ['', Validators.required],
      skills: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  createFreelancer(): void {
    if (this.freelancerForm.valid) {
      this.freelancerService.createFreelancer(this.freelancerForm.value).subscribe(() => {
        this.router.navigate(['/freelancers']);
      });
    }
  }
}
