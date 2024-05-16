import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private freelancerService: FreelancerService) { }

  ngOnInit(): void {
    this.freelancers$ = this.route.queryParams.pipe(
      switchMap(params => {
        const skills = params['skills'];
        // Split the string into an array of words
        // const words = skills.split(' ');

        // Capitalize the first letter of each word and convert the rest to lowercase
        // const capitalizedSkills = words.map((d: string) => d.charAt(0).toUpperCase() + d.slice(1).toLowerCase());

        // Join the words back into a single string
        // const formattedSkills = skills.toLowerCase();
        // console.log('formattedSkills : '+formattedSkills)
        const freelancerLocation = params['freelancerLocation'];
        console.log('skills : '+skills)
        return this.freelancerService.searchFreelancers(skills, freelancerLocation);
      })
    );
  }


}







