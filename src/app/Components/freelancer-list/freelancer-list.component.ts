import { Component, OnInit } from '@angular/core';
import { FreelancerService } from '../../services/freelancer.service';


@Component({
  selector: 'app-freelancer-list',
  templateUrl: './freelancer-list.component.html',
  styleUrls: ['./freelancer-list.component.css']
})
export class FreelancerListComponent implements OnInit {
  freelancers: any[] = [];

  constructor(private freelancerService: FreelancerService) { }

  ngOnInit(): void {
    this.getFreelancers();
  }

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
}
