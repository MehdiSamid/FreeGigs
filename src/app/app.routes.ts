import { Routes } from '@angular/router';
import { CompanyListComponent } from './Components/company-list/company-list.component';
import { CompanyFormComponent } from './Components/company-form/company-form.component';
import { FreelancerListComponent } from './Components/freelancer-list/freelancer-list.component';
import { FreelancerFormComponent } from './Components/freelancer-form/freelancer-form.component';
import { MissionFormComponent } from './Components/mission-form/mission-form.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SigninComponent } from './Components/signin/signin.component';
import { MissionListComponent } from './Components/mission-list/mission-list.component';
import { SearchFreelancerComponent } from './Components/searchfreelancer/searchfreelancer.component';
import { LayoutsComponent } from './Components/layouts/layouts.component';


export const routes: Routes = [
    
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
     {
        path:"",
        component:LayoutsComponent,
        children : [

        {
            path:"home",
            component:HomeComponent,
            title:"homepage"
    
        },
           { path: 'companies', component: CompanyListComponent },
           { path: 'create-company', component: CompanyFormComponent },
           { path: 'freelancers', component: FreelancerListComponent },
           { path: 'create-freelancer', component: FreelancerFormComponent },
           { path: 'create-mission', component: MissionFormComponent },
           { path: 'missions',component:MissionListComponent},
           { path: 'contact', component: ContactComponent },
           { path: 'signup', component: SignUpComponent},
           { path: 'login',component:SigninComponent},
           { path: 'search-freelancer', component:SearchFreelancerComponent},
           
    {
        path:'**',
        component:PageNotFoundComponent
    },
]

     }
];
