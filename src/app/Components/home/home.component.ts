import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { SignUpComponent } from "../sign-up/sign-up.component";
import { SharedModule } from '../../shared/shared/shared.module';
import { FreelancerFormComponent } from '../freelancer-form/freelancer-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Skills } from '../../enums/skills';
import { CommonModule } from '@angular/common';
import { FreelancerService } from '../../services/freelancer.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ReactiveFormsModule,NavbarComponent, FooterComponent, RouterLink, SignUpComponent , CommonModule , FreelancerFormComponent,SharedModule , MatSelectModule]
})
export class HomeComponent {
     skills = Object.values(Skills);
    searchForm: FormGroup;
    freelancerLocations: string[] = [];

    constructor(private formBuilder: FormBuilder, private router: Router,private freelancerService : FreelancerService) {
      this.searchForm = this.formBuilder.group({
        skills: [[]],
        freelancerLocation: ['']
      });
    }
    ngOnInit(): void {
     this.freelancerService.getLocations().subscribe((res)=>{
            this.freelancerLocations =res ;
      }); 
    }

    onSearch() {
      const skills = this.searchForm.get('skills')!.value;
      const freelancerLocation = this.searchForm.get('freelancerLocation')!.value;
      this.router.navigate(['/search-freelancer'], { queryParams: { skills, freelancerLocation } });
    }
}
