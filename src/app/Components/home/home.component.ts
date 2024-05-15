import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { SignUpComponent } from "../sign-up/sign-up.component";
import { SharedModule } from '../../shared/shared/shared.module';
import { FreelancerFormComponent } from '../freelancer-form/freelancer-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ReactiveFormsModule,NavbarComponent, FooterComponent, RouterLink, SignUpComponent , FreelancerFormComponent,SharedModule]
})
export class HomeComponent {

    searchForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router) {
      this.searchForm = this.formBuilder.group({
        skills: [''],
        freelancerLocation: ['']
      });
    }
  
    onSearch() {
      const skills = this.searchForm.get('skills')!.value;
      const freelancerLocation = this.searchForm.get('freelancerLocation')!.value;
      this.router.navigate(['/search-freelancer'], { queryParams: { skills, freelancerLocation } });
    }
}
