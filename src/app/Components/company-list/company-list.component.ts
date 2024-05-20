import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  standalone: true,
  imports: [CommonModule,RouterModule],
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: any[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe((data: any[]) => {
      this.companies = data;
    });
  }

  deleteCompany(id: number): void {
    this.companyService.deleteCompany(id).subscribe(() => {
      this.companies = this.companies.filter(company => company.id !== id);
    });
  }
}
