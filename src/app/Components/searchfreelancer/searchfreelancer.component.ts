import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FreelancerService } from '../../services/freelancer.service';
import { Freelancer } from '../../interfaces/freelancer';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map ,switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-searchfreelancer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searchfreelancer.component.html',
  styleUrl: './searchfreelancer.component.css'
})
export class SearchFreelancerComponent implements OnInit {

  freelancers$!: Observable<Freelancer[]>;

  constructor(private route: ActivatedRoute, private freelancerService: FreelancerService,private router: Router) { }

  redirectToFreelancers() {
    this.router.navigate(['/freelancers']);
  }
  ngOnInit(): void {
    this.freelancers$ = this.route.queryParams.pipe(
      switchMap(params => {
        const skills = params['skills'];
        const freelancerLocation = params['freelancerLocation'];
        console.log('skills : '+skills)
        return this.freelancerService.searchFreelancers(skills, freelancerLocation);
      })
    );
  }

}







