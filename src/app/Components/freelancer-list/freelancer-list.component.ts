import { Component, OnInit } from '@angular/core';
import { FreelancerService } from '../../services/freelancer.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-freelancer-list',
  templateUrl: './freelancer-list.component.html',
  standalone: true,
  imports: [CommonModule,RouterModule],
  styleUrls: ['./freelancer-list.component.css']
})
export class FreelancerListComponent implements OnInit {
  freelancers: any[] = [];
  currentUser: any;
  

  constructor(private freelancerService: FreelancerService,private authService:AuthService) { }

  ngOnInit(): void {
    this.getFreelancers();
    this.getCurrentUser()
  }
role : string | undefined
  getFreelancers(): void {
    this.freelancerService.getFreelancers().subscribe((data: any[]) => {
      this.freelancers = data;
    });
  }

  deleteFreelancer(id: number): void {
    this.freelancerService.deleteFreelancer(id).subscribe(() => {
      this.freelancers = this.freelancers.filter(freelancer => freelancer.id !== id);
    });
  }
  
  getCurrentUser() {
    this.role = this.authService.getRole() as string
  }
}
