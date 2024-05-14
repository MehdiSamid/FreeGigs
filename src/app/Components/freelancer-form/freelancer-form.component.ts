import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FreelancerService } from '../../services/freelancer.service';


@Component({
  selector: 'app-freelancer-form',
  standalone: true,
  imports: [ReactiveFormsModule],
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
