import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Company } from '../../interfaces/company';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  standalone: true,
  imports: [CommonModule,RouterModule],
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies!: Company ;

  constructor(private companyService: CompanyService , private auth : AuthService , private router : Router) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanyByIdUser(this.auth.authenticatedUser.id).subscribe((data: any) => {
      this.companies = data;
      console.log(data);
    });
  }


    editCompany(company: any): void {
      this.router.navigate(['/company-form', { company: JSON.stringify(company), isUpdate: true }]);
    }


}
