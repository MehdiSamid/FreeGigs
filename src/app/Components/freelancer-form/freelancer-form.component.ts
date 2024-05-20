import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FreelancerService } from '../../services/freelancer.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Skills } from '../../enums/skills';
import { MatSelectModule } from '@angular/material/select';
import { Freelancer } from '../../interfaces/freelancer';

@Component({
  selector: 'app-freelancer-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, HttpClientModule, MatSelectModule],
  templateUrl: './freelancer-form.component.html',
  styleUrl: './freelancer-form.component.css'
})
export class FreelancerFormComponent implements OnInit {
  freelancerForm: FormGroup;
  skills = Object.values(Skills);

  constructor(
    private fb: FormBuilder,
    private freelancerService: FreelancerService,
    private router: Router,
  ) {
    this.freelancerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      skills: ['', Validators.required],
      freelancerLocation: ['', Validators.required],
      IsAvailable: new FormControl(false)
    });
  }

  ngOnInit(): void {
    this.freelancerService.getAuthenticatedFreelancer().subscribe((freelancer: Freelancer) => {
      this.freelancerForm.patchValue({
        username: freelancer.username,
        email: freelancer.email,
        skills: freelancer.skills,
        freelancerLocation: freelancer.freelancerLocation,
        IsAvailable: freelancer.IsAvailable
      });
    });
  }

  updateprofile(): void {
    if (this.freelancerForm.valid) {
      this.freelancerService.updateprofile(this.freelancerForm.value).subscribe(() => {
        this.router.navigate(['/freelancers']);
      });
    }
  }
}
