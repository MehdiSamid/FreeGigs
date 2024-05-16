import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FreelancerService } from '../../services/freelancer.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Skills } from '../../enums/skills';
import { MatSelectModule } from '@angular/material/select';



@Component({
  selector: 'app-freelancer-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule,HttpClientModule, MatSelectModule],
  templateUrl: './freelancer-form.component.html',
  styleUrl: './freelancer-form.component.css'
})
export class FreelancerFormComponent implements OnInit {
  freelancerForm: FormGroup;
  skills = Object.values(Skills);

  constructor(
    private fb: FormBuilder,
    private freelancerService: FreelancerService,
    private router: Router ,
  ) {
    this.freelancerForm = this.fb.group({
      userId: ['', Validators.required],
      skills: ['', Validators.required ],
      freelancerLocation:['',Validators.required]
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
