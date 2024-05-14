import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { SignUpComponent } from "../sign-up/sign-up.component";
import { FreelancerFormComponent } from '../freelancer-form/freelancer-form.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, FooterComponent, RouterLink, SignUpComponent , FreelancerFormComponent]
})
export class HomeComponent {

}
