import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MissionService } from '../../services/mission.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-mission-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './mission-form.component.html',
  styleUrl: './mission-form.component.css'
})
export class MissionFormComponent implements OnInit {
  missionForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  #MissionService = inject(MissionService)
  #route = inject(Router)

  ngOnInit(): void {
    this.missionForm = this.fb.group({
      id: [null, [Validators.required, Validators.min(1)]],
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      status: ['', Validators.required],
      assignedTo: [null, Validators.required],
      createdBy: [null, Validators.required],
      priority: ['', Validators.required],
      location: [''],
      budget: [null, Validators.min(0)],
      skillsRequired: [''],
    });
  }

  createMission(): void {

  if (this.missionForm.valid) {
    this.#MissionService.createMission(this.missionForm.value).subscribe(() => {
      this.#route.navigate(['/missions']);
    });
  }
  }
}
