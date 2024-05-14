import { Routes } from '@angular/router';
import { CompanyListComponent } from './Components/company-list/company-list.component';
import { CompanyFormComponent } from './Components/company-form/company-form.component';
import { FreelancerListComponent } from './Components/freelancer-list/freelancer-list.component';
import { FreelancerFormComponent } from './Components/freelancer-form/freelancer-form.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SigninComponent } from './Components/signin/signin.component';

export const routes: Routes = [
    { path: 'companies', component: CompanyListComponent },
    { path: 'create-company', component: CompanyFormComponent },
    { path: 'freelancers', component: FreelancerListComponent },
    { path: 'create-freelancer', component: FreelancerFormComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'login', component: SigninComponent },


];
