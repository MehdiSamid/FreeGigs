import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SignUpComponent } from "../sign-up/sign-up.component";
import { SharedModule } from '../../shared/shared/shared.module';
import { SigninComponent } from '../signin/signin.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent,RouterOutlet, FooterComponent,SharedModule, RouterLink, SignUpComponent , SigninComponent]
})
export class HomeComponent {


}
